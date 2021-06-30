import { MenuHeader, MenuList } from "./StyleMenu";
import MenuItem from "./MenuItem/MenuItem";
import CategoriesContext from "../../../contexts/CategoriesContext";
import { useContext } from "react";

function Menu() {
  const categories = useContext(CategoriesContext);
  return (
    <MenuHeader>
      <MenuList>
        {categories &&
          categories.all.length > 0 &&
          categories.all.map((category) => (
            <MenuItem
              link={category.link}
              categories={category.label}
              key={category.id}
            />
          ))}
      </MenuList>
    </MenuHeader>
  );
}
export default Menu;
