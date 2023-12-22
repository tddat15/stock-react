import { ChangeEvent, useState } from 'react';
import { loginFields, onLogin } from './helpers';
import { FormAction, FormExtra, Input } from '../../components';

interface FieldState {
  [key: string]: string;
}

const fields = loginFields;
const fieldsState: FieldState = {};
fields.forEach((field) => (fieldsState[field.value] = ''));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onLogin({});
  };

  return (
    <>
      <form className="mt-8 space-y-6"></form>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.name}
            value={loginState[field.name]}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            handleChange={handleChange}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </>
  );
}
