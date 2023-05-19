import { FC } from 'react';

import Heading from '@/ui/Heading';
import Meta from '@/ui/Meta';
import Catalog from '@/ui/catalog/Catalog';
import Layout from '@/ui/layout/Layout';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import {
  TypePaginationProducts,
  TypeProducts,
} from '@/types/product.interface';

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  const { user } = useAuth();
  const { logout } = useActions();

  return (
    <Meta title="Home">
      <Layout>
        {!!user && <button onClick={() => logout()}></button>}
        <Catalog title="Freshed products" products={products || []} />
      </Layout>
    </Meta>
  );
};

export default Home;
