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
                <CardPrice>R$ {price}</CardPrice>
              </Card>
        </ProductsCard>
    );
}

export default ProductItem;
