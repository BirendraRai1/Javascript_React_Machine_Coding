/******************products************************/
const {
  getAllFactory,
  getByIdFactory,
  deleteByIdFactory,
  createFactory,
} = require("../utility/crudFactory");
const ProductModel = require("../model/ProductModel");
const createProductHandler = createFactory(ProductModel);
const getAllProductHandler = getAllFactory(ProductModel);
const getProductById = getByIdFactory(ProductModel);
const deleteProductById = deleteByIdFactory(ProductModel);
module.exports = {
  createProductHandler,
  getAllProductHandler,
  getProductById,
  deleteProductById,
};
