import { styled } from 'styled-components';

export const Label = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

export const FormInputContainer = styled.div``;

interface FormInputElementProps {
  isError: boolean;
}
export const FormInputElement = styled.input<FormInputElementProps>`
  width: 576px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.isError ? '#dc0000' : 'black')};
  padding: 13px 0;
  &:focus {
    outline: 0;
  }
`;
