import React, { ButtonHTMLAttributes } from 'react';
import * as S from './LoginButton.style';

export interface LoginButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
}

const LoginButton = ({ isValid, onClick }: LoginButtonProps) => {
  return (
    <S.LoginButton isValid={isValid} onClick={onClick}>
      로그인
    </S.LoginButton>
  );
};

export default LoginButton;
