import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { Main } from "./StyleProductsPage";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";

function ProductsPage() {

  return (
    <Main>
      <Breadcrumbs />
      <Filters/>
      <Products />
    </Main>
  );
}

export default ProductsPage;
