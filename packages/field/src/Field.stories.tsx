import React, {useState} from 'react';
import {Field} from './Field';
import {TextInput} from '@salad-ui/text-input';

export default {
  title: 'components/Field',
};

const label = 'Username';
const help = 'Choose a unique handle to go by.';
const error = 'Username already taken.';

export const Minimal = () => (
  <>
    <Field label={label}>
      <TextInput />
    </Field>
  </>
);

export const WithHelp = () => (
  <>
    <Field label={label} help={help}>
      <TextInput />
    </Field>
  </>
);

export const WithError: React.FC = () => {
  const [username, setUsername] = useState('john.smith');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  return (
    <>
      <Field label={label} help={help} error={username && error}>
        <TextInput value={username} onChange={handleChange} />
      </Field>
    </>
  );
};
