import express from "express";
import productsRouter from "./routes/products.routes.js";
import errorHandler from "./middlewares/errors/index.js";
import { config } from "dotenv";

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use("/api/mockingProducts", productsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
