const express = require("express");
const ProductRouter = express.Router();
/***********products***********/
const {
  createProductHandler,
  getAllProductHandler,
  getProductById,
  deleteProductById,
} = require("../controller/ProductController");
const { checkInput } = require("../utility/middleWare");
ProductRouter.post("/", checkInput, createProductHandler);
ProductRouter.get("/", getAllProductHandler);
ProductRouter.get("/:productId", getProductById);
ProductRouter.delete("/:productId", deleteProductById);
module.exports = ProductRouter;
