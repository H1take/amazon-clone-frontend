import cn from 'classNames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import Button from '@/ui/button/Button';
import SquareButton from '@/ui/button/SquareButton';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';

import { convertPrice } from '@/utils/convertPrice';
import CartItem from './cart-item/CartItem';

const HeaderCart: FC = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  const { items, total } = useCart();

  const { push } = useRouter();

  return (
    <div className="relative" ref={ref}>
      <SquareButton
        Icon={RiShoppingCartLine}
        onClick={() => {
          setIsShow(!isShow);
        }}
        number={items.length}
      />
      <div
        className={cn(
          'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
          isShow ? 'open-menu' : 'close-menu',
        )}
      >
        <div className="font-normal text-lg mb-5">My cart</div>

        {/* <div className={styles.cart}> */}
        <div>
          {items.length ? (
            items.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div className="font-light">Cart is empty!</div>
          )}
        </div>

          <div>
        {/* <div className={styles.footer}> */}
          <div>Total:</div>
          <div>{convertPrice(total)}</div>
        </div>
        <div className="text-center">
          <Button variant="white" size="sm" className="btn-link mt-5 mb-2">
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;