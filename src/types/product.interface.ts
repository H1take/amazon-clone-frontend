import { ICategory } from './category.interface';
import { IReview } from './review.interface';

export interface IProduct {
  id: number;
  images: string[];
  description: string;
  name: string;
  price: number;
  createAt: Date;
  slug: string;
  category: ICategory;
  reviews: IReview[];
}

export interface IProductDetails {
  product: IProduct;
}

export type TypeProducts = {
  products: IProduct[];
};

export type TypePaginationProducts = {
  length: number;
  products: IProduct[];
};
