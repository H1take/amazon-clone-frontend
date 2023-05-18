import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { IProduct } from '@/types/product.interface';

import ProductItem from './product-item/ProductItem';
import Heading from '../Heading';

interface ICatalog {
  products: IProduct[];
  isLoading?: boolean;
  title?: string;
}

const Catalog: FC<ICatalog> = ({
  products,
  isLoading,
  title
}) => {
  if (isLoading)
    return (
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );

  return (
    <section>
      {title && <Heading>{title}</Heading>}
      {products.length ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div>There are no products</div>
      )}
    </section>
  );
};

export default Catalog;
