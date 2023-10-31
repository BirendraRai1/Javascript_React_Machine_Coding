// import logo from './logo.svg';
import "./App.css";
import posts from "./posts.js";
import { useState, lazy, Suspense } from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
// import About from './pages/About';
// import Products from './pages/Product';
//The component which are not required please use lazy
const About = lazy(() => {
  return import("./pages/About");
});
const Products = lazy(() => {
  return import("./pages/Product");
});
function App() {
  const [visibility, setVisibility] = useState("none");
  const [post, setPost] = useState([]);
  const handleClick = () => {
    if (visibility == "none") {
      console.log("entered inside visibility none");
      setVisibility("block");
      // dynmaic import
    } else {
      setVisibility("none");
    }
    // // console.log("handleClick");
  };

  const handleClick1 = () => {
    /*After inspecting into network tab we find that there is only one bundle bundle.js .There are few times when you don't need data at that point of time because user may choose to use that or
     *may not use to choose that on using button click.Sometimes user may not need the data.So how to work on that.So this is the place where dynamic import comes into place
     *It is of course a bad example.This is a dynamic import.Because it takes sometime it is a promise
     *based function .Now look at the network tab and reload it nothing will happen.when you click on the button then post comes from the backend and the application becomes lighter**/
    import("./posts.js").then((module) => {
      // console.log(module);
      setPost(module.default);
    });
  };

  return (
    <>
      <h1>I am App</h1>
      {/* <button onClick={handleClick}>Display Post</button>
      <ul style={{ display: visibility }}>
        {console.log("posts is ", posts)}
        {posts.map((post, idx) => {
          return <p key={idx}>{JSON.stringify(post)}</p>;
        })}
      </ul> */}
      <button onClick={handleClick1}>Display Post</button>
      <ul>
        {console.log("posts is ", post)}
        {post.map((post1, idx) => {
          return <p key={idx}>{JSON.stringify(post1)}</p>;
        })}
      </ul>
      {/* <Suspense fallback={<h2>...Loading</h2>}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Suspense> */}
    </>
  );
}
//useCase of suspense is to give whichever element is loaded
//lazily you can add a basic fallback your element is not able to
//come

export default App;
