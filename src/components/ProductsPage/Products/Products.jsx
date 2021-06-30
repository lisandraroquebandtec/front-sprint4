import {
    ProductsContainer,
    ProductsLista
  } from "./StyleProducts";
  import { useContext} from "react";
  import ProductItem from "./ProductItem/ProductItem"
  import FilterContext from "../../../contexts/FilterContext";
  
  function Products() {
    const products = useContext(FilterContext);
    return (
      <ProductsContainer>
        <ProductsLista>
          {products &&
            products.products.length > 0 &&
            products.products.map((product) => (
              <ProductItem
              key={product.sku}
              image={product.image}
              name={product.name}
              price={product.price}
              />
            ))}
        </ProductsLista>
      </ProductsContainer>
    );
  }
  
  export default Products;
  