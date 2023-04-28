import axios from 'axios';

import { instance } from '@/api/api.intercepter';
import { IReview } from '@/types/review.interface';

const STATISTICS = '/reviews';

// TODO переделать это плохо!!!!
// вынести в отдельные интерфейсы
export type TypeStatisticsResponse = {
  name: string,
  value: number
}[];

export const StatisticsService = {
  async getMain() {
    return instance<TypeStatisticsResponse>({
      url: `${STATISTICS}/main`,
      method: 'GET',
    });
  }
};
