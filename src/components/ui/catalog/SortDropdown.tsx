import { FC } from 'react';

import { EnumProductSort } from '@/services/product/product.types';

const SortDropdown: FC = () => {
  return (
    <div className='text-right mb-5'>
      <select  className='apperance-none py-1 px-2 bg-white border-gray'>
        {(
          Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
        ).map(key => {
          return (
            // eslint-disable-next-line react/jsx-key
            <option value={EnumProductSort[key]}>{EnumProductSort[key]}</option>
          );
        })}
      </select>
    </div>
  );
};

export default SortDropdown;
