import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
function NavBar() {
  const { cartQuantity } = useSelector((store) => store.cartState);
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/cart">
        <div className="cart_container">
          <ShoppingCartIcon></ShoppingCartIcon>
          <div className="cart_quantity">{cartQuantity}</div>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
