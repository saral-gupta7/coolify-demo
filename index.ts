import express from "express";

const app = express();

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.json({ messsage: "This is the message form coolify home route" });
});

app.get("/deploy", (req, res) => {
  res.json({ messsage: "This is the message form coolify deploy route" });
});

app.get("/health", (req, res) => {
  res.json({ messsage: "This is the message form coolify health route" });
});

app.get("/auto-deploy", (req, res) => {
  res.json({ messsage: "This is the message form coolify auto-deploy route" });
});

app.listen(PORT, () => {
  console.log(`The server is listening on PORT:${PORT}`);
});
