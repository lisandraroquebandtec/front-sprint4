import { useContext } from "react";
import CategoriesContext from "../../../contexts/CategoriesContext";
import BreadcrumbItem from "./BreadcrumbItem/BreadcrumbItem";
import { ProductsBreadcrumbs, BreadcrumbsNav, BreadcrumbsMenu } from "./StyleBreadcrumbs";

function Breadcrumbs() {
  const breadcrumbs = useContext(CategoriesContext);
  return (
    <ProductsBreadcrumbs>
      <BreadcrumbsNav>
        <BreadcrumbsMenu>
          {breadcrumbs &&
            breadcrumbs.current.length > 0 &&
            breadcrumbs.current.map((breadcrumb) => (
              <BreadcrumbItem
                link={breadcrumb.link}
                breadcrumbs={breadcrumb.name}
                key={breadcrumb.id}
              />
            ))}
        </BreadcrumbsMenu>
      </BreadcrumbsNav>
    </ProductsBreadcrumbs>
  );
}

export default Breadcrumbs;
