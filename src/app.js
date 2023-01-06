import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.listen(5000, () => console.log("Ola"));

const users = [];

server.post("/sign-up", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send({ response: "ok" });
});
