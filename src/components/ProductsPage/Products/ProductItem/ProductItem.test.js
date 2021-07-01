import React from 'react';
import { render} from '@testing-library/react';
import ProductItem from './ProductItem';

describe('O componente de item do produto,', () =>{
  it('o snapshot do componente deve permanecer sempre o mesmo', ()=>{
    const {container} = render(
    <ProductItem
    image='/assets/images/c1.webp'
    name='Jaqueta Puffer Juvenil com Capuz Super Mario Branco Tam 10 a 18'
    price='199,90'
    />)
    expect(container.firstChild).toMatchSnapshot();
  })
})