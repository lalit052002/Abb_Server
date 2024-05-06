const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("welcome to home");
});
app.get("/about", (req, res) => {
  return res.send(`Welcome name=${req.query.name} and age=${req.query.age}`);
});

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});

// const myServer = http.createServer(app);
// myServer.listen(PORT, () => {
//   console.log(`server running on port : ${PORT}`);
// });

//perticular
app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id === id);
  res.send(user);
});

app.post("/api/user/:id", (req, res) => {
  //  create new user
  return res.json({ status: "pending" });
});
app.patch("/api/user/:id", (req, res) => {
  // Edit user by id
  return res.json({ status: "pending" });
});
app.delete("/api/user/:id", (req, res) => {
  // delete user by id
  return res.json({ status: "pending" });
});


















app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
