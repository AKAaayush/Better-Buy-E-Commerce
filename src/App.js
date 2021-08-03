import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <Products products={products} />

      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        search={search}
      />
    </div>
  );
};

export default App;
