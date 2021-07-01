import React from 'react';
import { render} from '@testing-library/react';
import FilterItem from './FilterItem';

describe('O componente de item do Filter,', () =>{
  it('o snapshot do componente deve permanecer sempre o mesmo', ()=>{
    const {container} = render(
    <FilterItem
    img= '/assets/images/filter.svg'
    />)
    expect(container.firstChild).toMatchSnapshot();
  })
})