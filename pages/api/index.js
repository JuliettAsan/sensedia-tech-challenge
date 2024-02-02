export default async function userHandler(req, res) {
  const { method } = req;
  const url = process.env.API_URL || "http://localhost:8080/api/v1";

  switch (method) {
    case "GET":
      try {
        const res2 = await fetch(`${url}/users`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });
        const data = await res2.json();
        console.log(data, "veo data");
        return res.status(res2.status).json(data);
      } catch (error) {
        console.log(error);
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
