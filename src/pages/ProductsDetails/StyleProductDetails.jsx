import styled, { css } from "styled-components";

export const DetailsContainer = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;
  display: flex;
  justify-content: space-around;
`;

export const DetailsImage = styled.img`
  width: 45%;
  max-height: 550px;
`;

export const Details = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const Size = styled.li`
    display: flex;
    flex-direction: column;
    `;

export const TitleSize = styled.h6`
color: #261E1E;
font-size: 0.9375rem;
margin-bottom: 16px;
`;

export const ListButton = styled.li`
  list-style: none;
  width:250px;
  display: flex;
  gap: 10px;
`;

export const SizeButton = styled.button`
    border: 1px solid #BBB;
    height: 36px;
    min-width: 40px;
    align-items: center;
    border-radius: 4px;
    text-transform: uppercase;
    justify-content: center;
    cursor:pointer;
    background: ${({selected}) => selected ? 'black': 'white'};
    color: ${({selected}) => selected ? 'white': 'black'};
    `;

export const AddContainer = styled.div`
  height: 40%;
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-around;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 
  0px 8px 10px 1px rgb(0 0 0 / 14%), 
  0px 3px 14px 2px rgb(0 0 0 / 12%);
`;

export const Price = styled.p`
  text-align: center;
  color: red;
  font-size: 30px;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddButton = styled.button`
height: 40px;
background-color: green;
border:none;
color: white;
text-transform: uppercase;
border-radius: 4px;
width:100%;
cursor:pointer;
`;

export const CancelButton = styled.button`
  background-color: red;
  height: 40px;
  border:none;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  width:100%;
  cursor:pointer;
`;
