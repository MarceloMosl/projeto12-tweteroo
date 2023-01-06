import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.listen(5000, () => console.log("Ola"));

const users = [];

const tweets = [];

server.post("/sign-up", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send({ response: "ok" });
});

server.get("/tweets", (req, res) => {
  if (tweets.length < 10) {
    res.send(tweets);
  } else {
    const newArr = tweets.slice(-10);
    res.send(newArr);
  }
});

server.post("/tweets", (req, res) => {
  const tweet = req.body;
  const validador = users.find((a) => a.username == tweet.username);

  if (validador) {
    tweet.avatar = validador.avatar;
    tweets.push(tweet);
    res.send({ resposnse: "OK" });
  } else {
    res.send("UNAUTHORIZED");
  }
});
