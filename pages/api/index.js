import { daysOfWeek, citiesOfWorld } from "config";

function generateRandomDays() {
  const numberOfRandomDays = Math.floor(Math.random() * daysOfWeek.length) + 1;
  const randomDays = new Set();

  while (randomDays.size < numberOfRandomDays) {
    const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
    randomDays.add(daysOfWeek[randomIndex]);
  }

  return Array.from(randomDays).join(", ");
}

function generateRandomCity() {
  const randomIndex = Math.floor(Math.random() * citiesOfWorld.length);
  const randomCity = citiesOfWorld[randomIndex];

  return randomCity;
}

const url = process.env.API_URL || "http://localhost:8080/api/v1";

async function fetchAlbumsUser(user) {
  try {
    const res = await fetch(`${url}/users/${user.id}/albums`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch albums for user ${user.id}. Status: ${res.status}`
      );
    }

    const albumsData = await res.json();
    return albumsData.albums || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchPostsUser(user) {
  try {
    const res = await fetch(`${url}/users/${user.id}/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch posts for user ${user.id}. Status: ${res.status}`
      );
    }

    const postsData = await res.json();
    return postsData.posts || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function userHandler(req, res) {
  const { method } = req;
  const { page = 1 } = req.query;
  const limit = 5;
  switch (method) {
    case "GET":
      try {
        const res2 = await fetch(`${url}/users`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });
        const responseData = await res2.json();

        const usersArray = responseData.users;

        if (!Array.isArray(usersArray)) {
          throw new Error("'users' property is not an array");
        }

        /* Filter user |blocked */
        const filteredUsers = usersArray.filter(
          (user) => !user.name.includes("|blocked")
        );

        /*Add random days, count posts and city */
        for (const user of filteredUsers) {
          user.randomCity = generateRandomCity();
          user.randomDays = generateRandomDays();
          user.postCount = (await fetchPostsUser(user)).length;
          user.albumCount = (await fetchAlbumsUser(user)).length;
        }

        /* Set item for page */
        const count = filteredUsers.length;
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedData = filteredUsers.slice(start, end);

        return res.status(res2.status).json({
          paginatedData,
          count,
          pagesNumber: Math.ceil(count / limit),
        });
      } catch (error) {
        console.error(error);
        res
          .status(error.status || 500)
          .json({ message: error.message || JSON.stringify(error) });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
