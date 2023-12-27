import { ChangeEvent, useState } from 'react';
import { loginFields, onLogin } from './helpers';
import { FormAction, FormExtra, Input } from '../../components';
import { AuthResponse } from './helpers/authentication.service.ts';
import { addCookieToken } from '../../utils/sesstion.ts';
import { useNavigate } from 'react-router-dom';

interface FieldState {
  [key: string]: string;
}

const fields = loginFields;
const fieldsState: FieldState = {};
fields.forEach((field) => (fieldsState[field.value] = ''));

export default function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response: AuthResponse = await onLogin({
        email: loginState.email,
        password: loginState.password,
      });

      addCookieToken(response);

      navigate('/home');
    } catch (err) {
      console.log('Login Failed!');
    }
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
