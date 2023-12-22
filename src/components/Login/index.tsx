import { loginFields } from '../../constants/formFields.ts';
import Input from '../Input';
import { ChangeEvent, useState } from 'react';
import FormExtra from '../FormExtra';
import FormAction from '../FormAction';
import { AuthApi } from '../../api';
import { useNavigate } from 'react-router-dom';

interface FieldState {
  [key: string]: string;
}

const fields = loginFields;
const fieldsState: FieldState = {};
fields.forEach((field) => (fieldsState[field.value] = ''));

export default function Login() {
  const authApi = new AuthApi();
  const navigate = useNavigate();

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
    try {
      const { email, password } = loginState;

      const response = await authApi.loginApi({
        email,
        password,
      });

      document.cookie = `accessToken=${response.data.credentials.accessToken}; path=/`;

      console.log('Log', response);

      if (response.status === 200) {
        // Redirect to /home
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
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
