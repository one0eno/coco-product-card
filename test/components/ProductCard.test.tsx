// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product } from '../data/products';

const { act } = renderer;

describe('ProductTitle', () => {
  test('Debe de mostrar el componente Con sus childs', () => {
    //config
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <h1>Product card</h1>}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
    //result
  });

  test('Debe de incrementar el contador', () => {
    //config
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>pulsa</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    //console.log(tree);
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
    //result
  });
});
