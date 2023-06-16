import { styled } from 'styled-components';
import { LoginButtonProps } from './LoginButton';

export const LoginButton = styled.button<LoginButtonProps>`
  cursor: pointer;
  outline: none;
  width: 576px;
  height: 57px;
  border: 1px solid ${(props) => (props.isValid ? 'black' : '#8f8f8f')};
  background-color: ${(props) => (props.isValid ? 'black' : 'white')};
  color: ${(props) => (props.isValid ? 'white' : '#8f8f8f')};
`;
