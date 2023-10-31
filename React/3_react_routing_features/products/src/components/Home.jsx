import React, { useState, useEffect } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null); //here null is better instead of empty array because filtered array length can be empty in case of searching also
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const productData = await resp.json();
      console.log("line 10", productData);
      setProducts(productData);
    })();
  }, []);
  let filteredArr = products;
  if (searchTerm != "") {
    filteredArr = filteredArr.filter((product) => {
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerTitle = product.title.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    });
  }
  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <main className="product_wrapper">
        {filteredArr == null ? (
          <h3>Loading...</h3>
        ) : (
          filteredArr.map((product, index) => {
            return (
              <div key={index} className="product">
                <img src={product.image} alt="" className="product_image" />
                <div className="product_meta">
                  <p className="product_title">{product.title}</p>
                  <p className="Price">${product.price}</p>
                </div>
              </div>
            );
          })
        )}
      </main>
    </>
  );
}

export default Home;

//filtering :-Hiding them temporarily
//delete :-remove the element
