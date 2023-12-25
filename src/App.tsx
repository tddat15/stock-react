import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ConversationPage from './pages/ConversationPage.tsx';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<ConversationPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
