import { IProduct } from "./product.interface";

export interface ICartItem {
    id: number;
    product: IProduct;
    quanity: number;
    price: number;
}