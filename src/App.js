import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CategoriesContext from "./contexts/CategoriesContext";
import FilterContext from "./contexts/FilterContext";
import { GlobalStyle } from "./css/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound404 from "./pages/NotFound/NotFound404";
import ProductDetails from "./pages/ProductsDetails/ProductDetails"

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
      <Router>
        <CategoriesContext.Provider value={(categories, breadcrumb)}>
          <Header />
        </CategoriesContext.Provider>
        <Switch>
          <Route exact path="/">
            <CategoriesContext.Provider value={breadcrumb}>
              <FilterContext.Provider value={(product, filter)}>
                <ProductsPage />
              </FilterContext.Provider>
            </CategoriesContext.Provider>
          </Route>
          <Route path="/details/:id">
          <FilterContext.Provider value={product}>
            <ProductDetails  />
            </FilterContext.Provider>
          </Route>
          <Route>
            <NotFound404/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
