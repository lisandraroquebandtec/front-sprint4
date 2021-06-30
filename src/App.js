import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CategoriesContext from "./contexts/CategoriesContext";
import FilterContext from "./contexts/FilterContext";
import { GlobalStyle } from "./css/GlobalStyle";

function App() {
  const [categories, setCategories] = useState();
  const [breadcrumb, setBreadcrumb] = useState();
  const [product, setProduct] = useState();
  const [filter, setFilter] = useState();
  
  useEffect(() => {
    fetch("/data/categories.json")
      .then((data) => data.json())
      .then((json) => {
        setCategories(json);
        setBreadcrumb(json);
      });
  }, []);

  useEffect(() => {
    fetch("/data/products.json")
      .then((data) => data.json())
      .then((json) => {
        setFilter(json);
        setProduct(json);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <CategoriesContext.Provider value={(categories, breadcrumb)}>
        <FilterContext.Provider value={(product, filter)}>
          <Header />
          <ProductsPage />
        </FilterContext.Provider>
      </CategoriesContext.Provider>

    </>
  );
}

export default App;
