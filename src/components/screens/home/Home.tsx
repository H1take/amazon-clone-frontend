import { FC } from 'react';

import Heading from '@/ui/Heading';
import Meta from '@/ui/Meta';
import Catalog from '@/ui/catalog/Catalog';

import { TypeProducts } from '@/types/product.interface';

const Home: FC<TypeProducts> = ({ products }) => {
  return (
    <Meta title="Home">
      <Heading>Hello world!</Heading>
      <Catalog products={products} />
    </Meta>
  );
};

export default Home;
