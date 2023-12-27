import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ConversationPage from './pages/ConversationPage.tsx';
import {
  AuthResponse,
  onRefreshToken,
} from './features/authentication/helpers/authentication.service.ts';
import { addCookieToken, removeCookieToken } from './utils/sesstion.ts';

function App() {
  const refreshToken = async () => {
    try {
      // Call your API to refresh the token
      const response: AuthResponse = await onRefreshToken();
      removeCookieToken();
      addCookieToken(response);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  React.useEffect(() => {
    const refreshInterval = setInterval(
      () => {
        refreshToken();
      },
      4 * 60 * 1000
    );

    return () => clearInterval(refreshInterval);
  });

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/chat/:id?" element={<ConversationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
