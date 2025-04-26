import type { Person } from '../types';

type PersonsProps = {
  persons: Person[];
};

const Persons = ({ persons }: PersonsProps) => {
  return (
    <ul>
      {persons.map(({ id, name, phone }) => (
        <li key={id}>
          {name} - {phone}
        </li>
      ))}
    </ul>
  );
};

export default Persons;