// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el url de la imagen ', () => {
    //config
    const wrapper = renderer.create(
      <ProductImage img="https://hola.jpb" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
    //result
  });

  test('Debe mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
