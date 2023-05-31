import { Dispatch, FC, SetStateAction } from 'react';

import { EnumProductSort } from '@/services/product/product.types';

interface ISortType {
  sortType: EnumProductSort;
  setSortType: Dispatch<SetStateAction<EnumProductSort>>;
}

const SortDropdown: FC<ISortType> = ({ sortType, setSortType }) => {
  return (
    <div className="text-right mb-5">
      <select
        value={sortType}
        onChange={(e) => setSortType((e.target.value) as any)}
        className="apperance-none py-1 px-2 bg-white border-gray"
      >
        {(
          Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
        ).map((key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <option
              key={key}
              value={EnumProductSort[key]}
            >
              {EnumProductSort[key]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortDropdown;
