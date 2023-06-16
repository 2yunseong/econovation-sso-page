import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignUpPage from './page/SignUpPage';
import ResetStyle from './style/global/ResetStyle';
import LoginPage from './page/LoginPage';
import FindIdPage from './page/FindIdPage';
import FindPasswordPage from './page/FindPasswordPage';

function App() {
  return (
    <RecoilRoot>
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/findid" element={<FindIdPage />} />
          <Route path="/findpassword" element={<FindPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
