const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Product Service Running ");
});

app.get("/products", (req,res) => {
  res.json([
    { id: 1,name: "Laptop", price:50000 },
    { id: 2,name: "Phone", price:25000 }
  ]);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
