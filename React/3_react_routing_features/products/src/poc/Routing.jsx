import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
function Routing() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Routing Example</h2>
      {/* No matter what the routes nav is always present */}
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li>
            {/* These are examples of Link routes.Link is predefined */}
            <Link to="/home">Home Page </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>
      {/* The upper part will always be there .The lower part will change depending on the Route */}
      {/* If either of the path matches there corressponding element will be rendered*/}
      {/* Routes is used to combine multiple routes */}
      <Routes>
        <Route path="/home/" element={<Home></Home>}></Route>
        <Route path="/about/*" element={<About></About>}></Route>
        <Route path="/listing" element={<Listing></Listing>}></Route>
        {/* This is an example of  redirecting Routes.
         *If we have "/home" routes and some one types "/abc" routes then we want to redirect him to "/home"
         *route for that we have a Navigate component. We use to="/home" to navigate to the home component where
         *we want to redirect
         */}
        <Route path="/abc" element={<Navigate to="/home"></Navigate>}></Route>
        {/* template routes -> dynamic routes  */}
        {/* The below route is an example of template route or dynamic route */}
        <Route
          path="/users/:id"
          element={<Users isAdmin={true}></Users>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        {/* path -> "*"/* -. wild card .It will match to everyone which the routes are not present*/}
      </Routes>
    </div>
    /**The first four routes are given by react routes
     * 1. Links:-How we can work with the links?  For Link route we have Link component to that .
     * When you click on that it will take to that component without reload
     * simplest useCase of link is that page will never reload
     * 2. Nested Routes:-How we can work with them?
     * 3. template route / Dynamic Route:- suppose we have a route /user We can pass a /:id and get that particular user  done
     * 4. redirecting  routes
     * 5. Custom Routes can contain
     *          private Routes
     *          conditional
     * */
  );
}

function About() {
  return (
    <>
      <h2>About Page</h2>
      {/* This is Nested Routes .If after "/about" "/company" or "/founders" is typed it will open this page also
       * otherwise it will play the role of wild card*/}
      <Routes>
        <Route path="company" element={<Company />}></Route>
        <Route path="founders" element={<Founder></Founder>}></Route>
      </Routes>
    </>
  );
}
function Company() {
  return <h4> We are a good firm</h4>;
}
function Founder() {
  return <h4> We are Nice People </h4>;
}

function Users(props) {
  console.log(props.isAdmin); //Here props is used to get the props in the Users component .Here the props in the Users component is isAdmin
  let params = useParams(); //This is the hook given by react-router-dom.It will give you an object whatever template route you have given .
  //In this route /users/:id passed in the browsers as /users/2 here  after consoling param we will get {id:2} .
  //Hooks are the function given by react or by some library which we are using
  let [user, setUser] = useState(null);
  console.log("46", params);
  // https://fakestoreapi.com/users/2
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
      const userData = await resp.json();
      console.log(userData);
      setUser(userData);
    })();
  }, []);
  return (
    <>
      {user == null ? (
        <h3>...loading</h3>
      ) : (
        <>
          <h4>User Name: {user.username}</h4>
          <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
          <h4> Phone: {user.phone}</h4>
        </>
      )}
    </>
  );
}

function Home() {
  return <h3>I am Home Page</h3>;
}

function Listing() {
  return <h3>I am Listing Page</h3>;
}

function PageNotFound() {
  return <h3>Page Not found</h3>;
}

export default Routing;
