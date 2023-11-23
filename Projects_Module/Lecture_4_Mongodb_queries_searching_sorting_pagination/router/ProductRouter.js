const express = require("express");
const ProductRouter = express.Router();
const {
  createProductHandler,
  getAllProductHandler,
  getProductById,
  deleteProductById,
  getAllQueryProduct,
} = require("../controller/ProductController");
const { checkInput } = require("../controller/middleWares");
/***********products***********/
ProductRouter.get("/query", getAllQueryProduct);
ProductRouter.post("/", checkInput, createProductHandler);
ProductRouter.get("/", getAllProductHandler);
ProductRouter.get("/:productId", getProductById);
ProductRouter.delete("/:productId", deleteProductById);
module.exports = ProductRouter;
