import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API up and running....");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Listening in ${process.env.NODE_ENV} environment on port ${PORT}`.yellow
      .bold
  );
});
