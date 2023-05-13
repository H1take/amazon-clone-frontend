import { FC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

import { IProduct } from '@/types/product.interface';
import { useProfile } from '@/hooks/useProfile';

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();

  const isExists = items.find(
    (cartItem) => cartItem.product.id === product.id,
  );

  return (
    <div>
      <button
        onClick={() => {
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({
                product,
                quantity: 1,
                price: product.price,
              });
        }}
      >
        {currentElement ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default FavoriteButton;
