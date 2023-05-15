import axios from 'axios';

import { IReview } from '@/types/review.interface';

import { instance } from '@/api/api.intercepter';

const REVIEWS = '/reviews';

type TypeData = {
  text: string;
  rating: number;
};

export const ReviewService = {
  async getAll() {
    return instance<IReview[]>({
      url: REVIEWS,
      method: 'GET',
    });
  },

  async getAverageByProduct(productId: string | number) {
    return instance<number>({
      url: `${REVIEWS}/average-by-product/${productId}`,
      method: 'GET',
    });
  },

  async leave(productId: string | number, data: TypeData) {
    return instance<IReview>({
      url: `${REVIEWS}/leave/${productId}`,
      method: 'POST',
      data,
    });
  },
};
