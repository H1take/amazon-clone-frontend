import axios from 'axios';
import Cookies from 'js-cookie';

import { getContentType } from '@/api/api.helper';
import { instance } from '@/api/api.intercepter';
import { IFullUser, IUser } from '@/types/user.interface';

const USERS = '/users';

type TypeData = {
    email: string,
    password?: string,
    avatarPath?: string,
    phone?: string,
    name?: string
}

export const UserService = {
  async getProfile() {
    return instance<IFullUser>({
      url: `${USERS}/profile`,
      method: 'GET',
    });
  },

  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `${USERS}/profile`,
      method: 'PUT',
      data
    });
  },

  async toggleFavorite(productId: string | number) {
    return instance<IUser>({
      url: `${USERS}/profile/favorites/${productId}`,
      method: 'PATCH',
    });
  },
};
