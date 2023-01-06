import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.listen(5000, () => console.log("Ola"));

const users = [];

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

server.post("/sign-up", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send({ response: "ok" });
});

server.get("/tweets", (req, res) => {
  res.send(tweets);
});
