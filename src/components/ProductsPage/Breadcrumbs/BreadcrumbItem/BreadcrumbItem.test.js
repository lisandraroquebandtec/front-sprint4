import React from 'react';
import { render} from '@testing-library/react';
import BreadcrumbItem from './BreadcrumbItem';

describe('O componente de item do breadcrumbs,', () =>{
  it('o snapshot do componente deve permanecer sempre o mesmo', ()=>{
    const {container} = render(
    <BreadcrumbItem
        link='/home' name='home'
    />)
    expect(container.firstChild).toMatchSnapshot();
  })
})