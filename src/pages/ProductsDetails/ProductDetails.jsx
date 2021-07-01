import { useEffect, useState, useContext } from "react";
import {
  DetailsContainer,
  DetailsImage,
  Details,
  Title,
  Size,
  TitleSize,
  SizeButton,
  AddContainer,
  Price,
  AddButton,
  CancelButton,
  Buttons,
  ListButton,
} from "./StyleProductDetails";
import FilterContext from "../../contexts/FilterContext";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const products = useContext(FilterContext);
  const { id } = useParams();

  useEffect(() => {
    if (products) {
      setProduct(products.products[id]);
    }
  }, [products]);

  function AddProduct() {
    alert('Produto adicionado á sacola');
  }

  const [selected, setSelected] = useState(false);
  return (
    <>
    <DetailsContainer>
      <DetailsImage src={product.image} />
      <Details>
        <Title>{product.name}</Title>
        <Size>
          <TitleSize>Selecionar Tamanho: {selected}</TitleSize>
          <ListButton>
            {product.sizes &&
              product.sizes.length > 0 &&
              product.sizes.map((size) => (
                <SizeButton
                  key={size}
                  selected={selected === size}
                  onClick={() => setSelected(size)}
                >
                  {size}
                </SizeButton>
              ))}
          </ListButton>
        </Size>
        <AddContainer>
          <Price>R${product.price}</Price>
          <Buttons>
            <Link to="/">
              <AddButton onClick={AddProduct}>Adicionar à sacola</AddButton>
            </Link>
            <Link to="/">
              <CancelButton>Cancelar</CancelButton>
            </Link>
          </Buttons>
        </AddContainer>
      </Details>
    </DetailsContainer>
    </>
  );
}

export default ProductDetails;
