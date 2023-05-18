import { GetStaticProps, NextPage } from 'next';

import { IProduct, TypePaginationProducts, TypeProducts } from '@/types/product.interface';

import Home from '@/screens/home/Home';
import { ProductService } from '@/services/product/product.service';
import { TypeProductData } from '@/services/product/product.types';

const HomePage: NextPage<TypePaginationProducts> = ({ products, length }) => {
  return <Home products={products} length={length} />;
};

export const getStaticProps: GetStaticProps<TypePaginationProducts> = async () => {
  const { data } = await ProductService.getAll({
    page: 1,
    perPage: 4,
  });

  return {
    props: data
  };
};

export default HomePage;
