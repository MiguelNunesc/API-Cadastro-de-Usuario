import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body)
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000);

/*
  miguelnunesc 29YRYO43gs91apne
*/
