import { Routes, Route, Link } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavWrapper />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

function NavWrapper() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default App;
