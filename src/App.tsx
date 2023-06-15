import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignUpPage from './page/SignUpPage';
import ResetStyle from './style/global/ResetStyle';

function App() {
  return (
    <BrowserRouter>
      <ResetStyle>
        <RecoilRoot>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </RecoilRoot>
      </ResetStyle>
    </BrowserRouter>
  );
}

export default App;
