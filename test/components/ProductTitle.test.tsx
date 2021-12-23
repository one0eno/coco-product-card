// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente con el titulo personalizado', () => {
    //config
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
    //result
  });

  test('Debe mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {//
        () => <ProductTitle />
        //
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
