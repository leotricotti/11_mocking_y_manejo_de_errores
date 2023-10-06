import { Router } from "express";
import { generateProducts } from "../utils.js";
import CustomError from "../services/CustomError.js";
import EErrors from "../services/enum.js";
import { generateProductErrorInfo } from "../services/info.js";
import { mongo } from "mongoose";

const router = Router();

const products = [];

router.get("/", async (req, res) => {
  for (let i = 0; i < 100; i++) {
    products.push(generateProducts());
  }

  res.json({ message: "Success", data: products });
});

router.post("/", (req, res) => {
  const { title, description, code, price, stock, category, image } = req.body;
  if (
    !title ||
    !description ||
    !code ||
    !price ||
    !stock ||
    !category ||
    !image
  ) {
    CustomError.createError({
      name: "Missing product information",
      cause: generateProductErrorInfo({
        title,
        description,
        code,
        price,
        stock,
        category,
        image,
      }),
      message: "Faltan datos del producto",
      code: EErrors.INVALID_TYPES_ERROR,
    });
  }

  const product = {
    _id: new mongo.ObjectId(),
    title,
    description,
    code,
    price,
    stock,
    category,
    image,
  };

  products.push(product);
  res.json({ message: "Success", data: product });
});

export default router;
