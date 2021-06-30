import styled from "styled-components";

export const ProductsCard = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 8px;
  max-width: 250px;
`;

export const CardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CardDescription = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;
