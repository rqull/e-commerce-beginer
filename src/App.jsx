import React from "react";
import Navigator from "./Navigation/Nav";
import Products from "./Product/Products";
import Recommended from "./Recommended/Recommended";

const App = () => {
  return (
    <>
      <Navigator />
      <Products />
      <Recommended />
    </>
  );
};

export default App;
