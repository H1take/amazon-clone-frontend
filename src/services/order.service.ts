import { instance } from '@/api/api.intercepter';

import { IOrder } from '@/types/order.interface';

const ORDERS = '/reviews';

export const OrderService = {
  async getAll() {
    return instance<IOrder[]>({
      url: ORDERS,
      method: 'GET',
    });
  }
};
