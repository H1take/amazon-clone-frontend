import Image from 'next/image';
import { FC } from 'react';

import { IProduct } from '@/types/product.interface';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <div>
        <FavoriteButton productId={product.id} />
        <AddToCartButton product={product} />
        <Image
          width={300}
          height={300}
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <h3>{product.name}</h3>
      <div>{product.category.name}</div>
      <ProductRating rating={product.rating} />
    </div>
  );
};

export default ProductItem;
