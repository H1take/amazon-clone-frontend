import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { IProduct } from '@/types/product.interface';

import Heading from '../Heading';

import ProductItem from './product-item/ProductItem';
import Button from '../button/Button';
import SortDropdown from './SortDropdown';

interface ICatalog {
  products: IProduct[];
  isLoading?: boolean;
  title?: string;
  isPagination?: boolean;
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title, isPagination = false }) => {
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
      {title && <Heading className='mb-5'>{title}</Heading>}
      {/* {isPagination && <SortDropdown />} */}
      {products.length ? (
        <>
        <div className='grid grid-cols-4 gap-10'>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        {isPagination && <Button variant='orange'>Load more...</Button>}
        </>
      ) : (
        <div>There are no products</div>
      )}
    </section>
  );
};

export default Catalog;
