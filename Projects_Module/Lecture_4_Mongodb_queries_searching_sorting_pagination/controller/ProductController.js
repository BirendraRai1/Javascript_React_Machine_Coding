const ProductModel = require("../model/ProductModel");
const {
  createFactory,
  getAllFactory,
  getByIdFactory,
  deleteByIdFactory,
} = require("../utility/crudFactory");
/******************products************************/
const createProductHandler = createFactory(ProductModel);
const getAllProductHandler = getAllFactory(ProductModel);
const getProductById = getByIdFactory(ProductModel);
const deleteProductById = deleteByIdFactory(ProductModel);
const getAllQueryProduct = async (req, res) => {
  //http://localhost:8080/api/product/query1?sort=price%20inc&select=name%20description%20price
  try {
    // are done on the level of DB
    // -> find all the data
    // -> sort
    // -> select
    console.log("came inside the getAllQueryProduct");
    let query = req.query;
    console.log("query is ", query);
    let selectQuery = query.select;
    let sortQuery = query.sort;
    // console.log("selectParam", selectParam);
    // console.log("sortParam", sortParam);
    // make a find query -> searching for the product
    let queryResPromise = ProductModel.find();
    // sort the entries
    if (sortQuery) {
      // "price inc"
      let order = sortQuery.split(" ")[1];
      let sortParam = sortQuery.split(" ")[0];
      // console.log("order",order,"sortParam",sortParam);
      // applying this logic for inc and dec
      if (order == "inc") {
        queryResPromise = queryResPromise.sort(sortParam);
      } else {
        queryResPromise = queryResPromise.sort(-sortParam);
      }
    }
    if (selectQuery) {
      queryPromise = queryResPromise.select(selectQuery);
    }
    // when find and sort both are done
    const result = await queryResPromise;

    res.status(200).json({
      message: result,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
  // sorting -> increarsing
  // selecting -> (name,price)
};
module.exports = {
  createProductHandler,
  getAllProductHandler,
  getProductById,
  deleteProductById,
  getAllQueryProduct,
};
