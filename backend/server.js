import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API up and running....");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id == req.params.id);

  res.json(product);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Listening in ${process.env.NODE_ENV} environment on port ${process.env.PORT}`
      .yellow.bold
  );
});
