import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import cartSlice from "../redux/slices/cartSlice";
const action = cartSlice.actions;
function ProductList(props) {
  const { cartProducts } = useSelector((store) => store.cartState);
  console.log("cartProducts is ", cartProducts);
  const dispatch = useDispatch();
  let { productList } = props;
  const handleAddProduct = (product) => {
    console.log("I clicked add product", product);
    dispatch(action.addToCart(product));
  };
  const handleDeleteProduct = (product) => {
    dispatch(action.deleteFromCart(product));
  };
  return (
    <>
      {productList == null ? (
        <h3>Loading...</h3>
      ) : (
        productList.map((product, index) => {
          return (
            <div key={index} className="product">
              <img src={product.image} alt="" className="product_image" />
              <div className="product_meta">
                <p className="product_title">{product.title}</p>
                <p className="Price">${product.price}</p>
              </div>
              <div className="add_to_cart_container">
                <AddBoxIcon
                  onClick={() => handleAddProduct(product)}
                ></AddBoxIcon>
                <div className="currentCartCount">
                  {
                    <PrintCount
                      cartProducts={cartProducts}
                      id={product.id}
                    ></PrintCount>
                  }
                </div>
                <IndeterminateCheckBoxIcon
                  onClick={() => handleDeleteProduct(product)}
                ></IndeterminateCheckBoxIcon>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

function PrintCount(props) {
  let { id, cartProducts } = props;
  let quantity = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == id) {
      quantity = cartProducts[i].quantity;
    }
  }
  return <>{quantity}</>;
}

export default ProductList;
