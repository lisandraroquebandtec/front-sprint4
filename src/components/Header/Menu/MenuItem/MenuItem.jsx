import { Item, MenuLink } from "./StyleMenuItem";

function MenuItem(props) {
  return (
    <>
      <Item>
        <MenuLink href={props.link}>{props.categories}</MenuLink>
      </Item>
    </>
  );
}
export default MenuItem;
