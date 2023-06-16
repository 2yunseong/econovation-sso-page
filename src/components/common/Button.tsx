import React, { ButtonHTMLAttributes } from 'react';
import * as S from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isValid: boolean;
}

const Button = ({ label, isValid, onClick }: ButtonProps) => {
  return (
    <S.Button isValid={isValid} onClick={onClick}>
      {label}
    </S.Button>
  );
};

export default Button;
