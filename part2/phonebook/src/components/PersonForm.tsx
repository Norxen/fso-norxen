import type { ChangeEvent, FormEvent } from 'react';

type PersonFormProps = {
  newName: string;
  newPhone: string;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const PersonForm = ({
  newName,
  newPhone,
  onNameChange,
  onPhoneChange,
  onSubmit,
}: PersonFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{' '}
        <input
          type="text"
          value={newName}
          onChange={onNameChange}
          placeholder="Enter a name"
        />
      </div>
      <div>
        phone:{' '}
        <input
          type="text"
          value={newPhone}
          onChange={onPhoneChange}
          placeholder="Enter a phone number"
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;