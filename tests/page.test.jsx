import "@testing-library/jest-dom";

import {
  fetchUsers,
  fetchPostsUser,
  fetchAlbumsUser,
  generateRandomCity,
  generateRandomDays,
} from "../pages/api/index";

import { daysOfWeek, citiesOfWorld } from "../config/index";

describe("Testing API functions index", () => {
  /* FETCH USERS */
  test("Fetch user data and status", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            users: [
              {
                id: "c030a4a6-e170-4214-8b46-44fffc5a4e22",
                name: "User_7bdf7123-8e7b-4e25-8caa-7e27a45e814c",
                email: "user_7bdf7123-8e7b-4e25-8caa-7e27a45e814c@example.com",
                created_at: "2024-02-02T12:07:33.713373-05:00",
                updated_at: "2024-02-02T12:07:33.713373-05:00",
              },
            ],
          }),
        status: 200,
      })
    );

    const result = await fetchUsers();
    expect(result.status).toBe(200);
    expect(result.users.users).toEqual([
      {
        id: "c030a4a6-e170-4214-8b46-44fffc5a4e22",
        name: "User_7bdf7123-8e7b-4e25-8caa-7e27a45e814c",
        email: "user_7bdf7123-8e7b-4e25-8caa-7e27a45e814c@example.com",
        created_at: "2024-02-02T12:07:33.713373-05:00",
        updated_at: "2024-02-02T12:07:33.713373-05:00",
      },
    ]);
  });

  /* FETCH POSTS USER */
  test("Fetch posts data by user", async () => {
    const user = "c030a4a6-e170-4214-8b46-44fffc5a4e22";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            posts: [
              {
                content:
                  "Post content by User_c030a4a6-e170-4214-8b46-44fffc5a4e22",
                created_at: "2024-02-02T12:07:33.713373-05:00",
                id: "4bbe7490-4581-46db-9b97-0ca00d12e97f",
                updated_at: "2024-02-02T12:07:33.713373-05:00",
                user_id: "c030a4a6-e170-4214-8b46-44fffc5a4e22",
              },
            ],
          }),
      })
    );

    const result = await fetchPostsUser(user);

    expect(result).toEqual([
      {
        content: "Post content by User_c030a4a6-e170-4214-8b46-44fffc5a4e22",
        created_at: "2024-02-02T12:07:33.713373-05:00",
        id: "4bbe7490-4581-46db-9b97-0ca00d12e97f",
        updated_at: "2024-02-02T12:07:33.713373-05:00",
        user_id: "c030a4a6-e170-4214-8b46-44fffc5a4e22",
      },
    ]);
  });

  /* FETCH ALBUMS USER */
  test("Fetch albums data by user", async () => {
    const user = "c030a4a6-e170-4214-8b46-44fffc5a4e22";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            albums: [
              {
                id: "cbe567b3-fe86-461f-b729-a7dbb04e9959",
                title: "Album_6be6feff-77ee-489d-85fd-5fb2cdec9646",
                description:
                  "Description for Album_6be6feff-77ee-489d-85fd-5fb2cdec9646",
                created_at: "2024-02-02T12:07:33.841697-05:00",
                updated_at: "2024-02-02T12:07:33.841697-05:00",
              },
            ],
          }),
      })
    );

    const result = await fetchAlbumsUser(user);

    expect(result).toEqual([
      {
        id: "cbe567b3-fe86-461f-b729-a7dbb04e9959",
        title: "Album_6be6feff-77ee-489d-85fd-5fb2cdec9646",
        description:
          "Description for Album_6be6feff-77ee-489d-85fd-5fb2cdec9646",
        created_at: "2024-02-02T12:07:33.841697-05:00",
        updated_at: "2024-02-02T12:07:33.841697-05:00",
      },
    ]);
  });

  /* GENERATE RANDOM CITY */
  test("Return random city from citiesOfWorld", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const result = generateRandomCity();
    jest.spyOn(Math, "random").mockRestore();
    expect(citiesOfWorld).toContain(result);
  });

  /* GENERATE RANDOM DAYS */
  test("Return random days from daysOfWeek", () => {
    const result = generateRandomDays();
    console.log(result);
    expect(typeof result).toBe("string");

    expect(daysOfWeek.some((day) => result.includes(day))).toBe(true);
  });
});
