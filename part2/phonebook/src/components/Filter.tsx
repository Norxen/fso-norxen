import type { ChangeEvent } from 'react';

type FilterProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({ value, onChange }: FilterProps) => {
  return (
    <div>
      filter shown with{' '}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;