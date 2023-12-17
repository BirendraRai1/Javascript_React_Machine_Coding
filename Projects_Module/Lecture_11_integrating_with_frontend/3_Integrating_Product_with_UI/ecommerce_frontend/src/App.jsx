import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PaginationProvider from "./contexts/PaginationContext";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <PaginationProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>

        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}>
          {" "}
        </Route>
        <Route path="/user" element={<User></User>}>
          {" "}
        </Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}>
          {" "}
        </Route>
      </Routes>
    </PaginationProvider>
  );
}

export default App;

/*we have a Frontend server that only gives you a react code
 *Similarly we have a backend api working on some other port using express
 *our react server is running on 5174.Basically vite is sharing frontend code for it
 *If we want to implement our own image server.If we want to our frontend client to add server there is a package known as multer in nodejs to upload file
 *we can create .env file in vite application .They have already given the support for it.In Vite if we want to create a custom environment variable then we have to add vite in front of it after that we can use it
 *In frontend we have a lot of urls.We have a lot of urls signup,login,orders etc and all these urls are string and debugging string is a headache.
 *So people usually create a urlConfig file and store all the url over there
 *vite environment variables https://vitejs.dev/guide/env-and-mode
 *In this project we will be using axios because the syntax is bit less.There is no difference between axios and fetch .The only difference is that fetch is basically more barebone
 *Instead of having a single file and putting all the css together we will create two folder signup and login.Let us explore another feature of vite which is also similar in create react app
 *if we create a file named index.jsx inside login folder what will happen that if we import inside App.jsx we can import using import Login from "./pages/Login"and with this our code starts working;Similar thing will happen for signup
 *
 *
 * ****/
