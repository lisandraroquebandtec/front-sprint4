import { Item, BreadcrumbLink} from "./StyleBreadcrumbItem";

function BreadcrumbItem(props) {
  return (
    
      <Item>
        <BreadcrumbLink href={props.link}>{props.breadcrumbs}</BreadcrumbLink>
      </Item>
      /* <Separator>/</Separator> */
   
  );
}
export default BreadcrumbItem;

