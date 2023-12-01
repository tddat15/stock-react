import { loginFields } from '../../constants/formFields.ts';
import Input from '../Input';
import { ChangeEvent, useState } from 'react';
import FormExtra from '../FormExtra';
import FormAction from '../FormAction';

interface FieldState {
  [key: string]: string;
}

const fields = loginFields;
const fieldsState: FieldState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

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
    authenticateUser();
  };

  const authenticateUser = () => {
    //Todo
  };

  return (
    <>
      <form className="mt-8 space-y-6"></form>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </>
  );
}
