import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IProduct } from '@/types/product.interface';

import { ReviewService } from '@/services/review.service';

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
  const [rating, setRating] = useState(
    Math.round(
      product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    ) || 0
  )

  return (
    <div className='mb-2'>
      <span className='mr-1'>
        <Rating
          readonly
          initialValue={rating}
          SVGstyle={{
            display: 'inline-block',
          }}
          size={34}
          allowFraction
          transition
        />
        <span style={{ color: '#FFBC0D' }}>{rating}</span>
      </span>
      <span>({product.reviews.length} reviews)</span>
    </div>
  );
};

export default ProductRating;
