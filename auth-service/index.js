const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth Service Runnning ");
});

app.get("/login", (req, res) => {
  res.json({
    message: "Login successful"
   });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Naman",
    role: "Devops Learner"
   });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

