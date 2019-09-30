import React, {useState} from 'react';
import {Field} from './Field';
import {TextInput} from '@salad-ui/text-input';

export default {
  title: 'components/Field',
};

export const normal = () => (
  <>
    <Field
      id="username"
      label="Username"
      help="Choose a unique handle to go by."
    >
      <TextInput id="username" />
    </Field>
  </>
);

export const error = () => {
  const [username, setUsername] = useState('john.smith');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  return (
    <>
      <Field
        id="username"
        label="Username"
        help="Choose a unique handle to go by."
        error={username && `"${username}" is already taken.`}
      >
        <TextInput id="username" value={username} onChange={handleChange} />
      </Field>
    </>
  );
};
