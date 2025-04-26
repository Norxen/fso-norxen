import { useState, type ChangeEvent, type FormEvent } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import type { Person } from './types';

const App = () => {
  const [persons, setPersons] = useState<Person[]>([
    { id: 1, name: 'Arto Hellas', phone: '123456789' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhone(e.target.value);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  };

  const addPerson = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = newName.trim();
    const phone = newPhone.trim();
    if (!name || !phone) return;

    if (persons.some((p) => p.name === name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    const id = Math.max(0, ...persons.map((p) => p.id)) + 1;
    setPersons([...persons, { id, name, phone }]);
    setNewName('');
    setNewPhone('');
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filterTerm} onChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
        onSubmit={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;