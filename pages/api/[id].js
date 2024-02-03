export default async function userHandler(req, res) {
  const url = process.env.API_URL || "http://localhost:8080/api/v1";
  const { method, body } = req;
  const id = req.query.id;
  switch (method) {
    case "PUT":
      try {
        const r = await fetch(`${url}/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          method: "PUT",
        });
        res.status(200).json({ message: "Actualizado correctamente" });
      } catch (error) {
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
