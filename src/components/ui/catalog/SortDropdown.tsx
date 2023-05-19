import { FC } from 'react';

const SortDropdown: FC = () => {
  return <select id="categoryFilter">
  <option value="all">ALL</option>
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
  <option value="d">D</option>
</select>
};

export default SortDropdown;
