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
import { useParams, Link, useHistory } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-ui/core";
import  Alert from '@material-ui/lab/Alert';

function ProductDetails() {
  const history = useHistory();
  const [product, setProduct] = useState({});
  const products = useContext(FilterContext);
  const { id } = useParams();
  const [selected, setSelected] = useState(false);
  const [alert, setAlert] = useState(false);
  
  useEffect(() => {
    if (products) {
      setProduct(products.products[id]);
    }
  }, [products]);

  function AddProduct(){
    setAlert(true);
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }
  
  return (
    <>
    <Breadcrumbs>
    <Link to='/' color='inherit'>
      Home
    </Link>
    <Typography color='textPrimary'>{product.name}</Typography>
    </Breadcrumbs>
    {
      alert && <Alert variant="filled" severity="success">
      Produto adicionado á sacola
     </Alert>
    }
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
              <AddButton onClick={AddProduct}>Adicionar à sacola</AddButton>
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
