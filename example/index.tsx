import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee mug !',
  //img: "coffee-mug.png",
  //increaseValue: 1,
};

const App = () => {
  return (
    <div>
      <ProductCard product={product} initialValues={{}}>
        {({ reset, maxCount, isMaxCountReached, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
