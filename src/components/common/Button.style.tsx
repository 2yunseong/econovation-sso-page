import { styled } from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button<Pick<ButtonProps, 'isValid'>>`
  cursor: pointer;
  outline: none;
  width: 576px;
  height: 57px;
  font-size: 2.4rem;
  border: 1px solid ${(props) => (props.isValid ? 'black' : '#8f8f8f')};
  background-color: ${(props) => (props.isValid ? 'black' : 'white')};
  color: ${(props) => (props.isValid ? 'white' : '#8f8f8f')};
`;
