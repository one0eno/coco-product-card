# coco-product-card

Este es un paquete de pruebas de despliegue de product card.

### Ejemplo de uso

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'coco-product-card';
```

```
 <ProductCard key={product.id} product={product} initialValues={{}}>
          {({ reset, maxCount, isMaxCountReached, increaseBy, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
```
