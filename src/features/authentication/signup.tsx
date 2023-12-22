import React, { useState } from 'react';
import { signupFields } from './helpers';
import { FormAction, Input } from '../../components';

interface FieldState {
  [key: string]: string;
}

const fields = signupFields;
const fieldsState: FieldState = {};

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignupState({
      ...signupState,
      [e.target.id]: e.target.value,
    });

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <form className="mt-8 space-y-6">
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            // labelText={field.labelText}
            // labelFor={field.labelFor}
            // id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
