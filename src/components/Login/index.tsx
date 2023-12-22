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
    authenticateUser();
  };

  const authenticateUser = async () => {
    const { email = 'dat_thai@gmail.com', password = 'quang123' } = loginState;

    const response = await fetch('http://localhost:8989/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }, // mode: 'no-cors',
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
