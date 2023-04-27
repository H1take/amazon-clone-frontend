import { IUser } from './user.interface';

export interface IReview {
  id: number;
  user: IUser;
  createAt: Date;
  text: string;
  rating: number;
}
