// const path = require("path")
// const express = require("express")
// const dotenv = require("dotenv")
// const colors = require("colors")
// const morgan = require("morgan")
// const notFound = require("./middleware/errorMiddleware.js")
// const errorHandler = require("./middleware/errorMiddleware.js")
// const connectDB = require("./config/db.js")
// const productRoutes = require("./Routes/productRoutes.js")
// const userRoutes = require("./Routes/userRoutes.js")
// const orderRoutes = require("./Routes/productRoutes.js")

import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
    res.sendStatus(200);
    
  });
}

app.use(notFound);
app.use(errorHandler);

// const PORT = process.env.PORT || 5000

// changed for heroku

app.listen(process.env.PORT || 5000);
// (PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

// export default server

// module.exports = {
//   server
// }

// module.exports = { app, server };

export default app;
