import {
    ProductsCard,
    Card,
    CardImg,
    CardDescription,
    CardPrice,
  } from "./StyleProductItem";

function ProductItem({image, name, price}){
    return(
        <ProductsCard>
              <Card>
                <CardImg src={image} />
                <CardDescription>{name}</CardDescription>
                <CardPrice>{price}</CardPrice>
              </Card>
        </ProductsCard>
    );
}

export default ProductItem;
