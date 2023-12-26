import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ConversationPage from './pages/ConversationPage.tsx';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<ConversationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
