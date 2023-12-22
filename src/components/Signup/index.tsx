import { signupFields } from '../../constants/formFields.ts';
import React, { useState } from 'react';
import FormAction from '../FormAction';
import Input from '../Input';

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
  const createAccount = async () => {
    //TODO
    const { email = 'dat_thai@gmail.com', password = 'quang123' } = signupState;

    const response = await fetch('http://localhost:8989/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });

    console.log('Log', response);
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            value={signupState[field.id]}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            handleChange={handleChange}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
