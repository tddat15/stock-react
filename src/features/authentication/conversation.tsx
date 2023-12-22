import React, { useState } from 'react';
import { signupFields } from './helpers';
import { FormAction, Input } from '../../components';
import { AuthResponse, onSignup } from './helpers/authentication.service.ts';
import { setCookie } from '../../utils/sesstion.ts';
import { useNavigate } from 'react-router-dom';

interface FieldState {
  [key: string]: string;
}

const fields = signupFields;
const fieldsState: FieldState = {};

export default function Signup() {
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignupState({
      ...signupState,
      [e.target.id]: e.target.value,
    });

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //TODO: Toast for validate password
    signupState.password !== signupState.confirm_password
      ? console.log('Passwords is not matching')
      : undefined;

    try {
      const response: AuthResponse = await onSignup({
        email: signupState.email,
        password: signupState.password,
        username: signupState.username,
      });

      setCookie('accessToken', response.credentials.accessToken);
      navigate('/');
    } catch (err) {
      console.log('Signup Failed!');
    }
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.name}
            value={signupState[field.name]}
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
