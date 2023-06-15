import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignUpPage from './page/SignUpPage';
import ResetStyle from './style/global/ResetStyle';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <RecoilRoot>
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
