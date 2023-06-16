import { keyframes, styled } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Label = styled.p`
  font-size: 20px;
  color: #dc0000;
  animation: ${slideIn} 0.4s ease-out;
`;
