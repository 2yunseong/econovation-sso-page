import React, { InputHTMLAttributes } from 'react';
import ErrorLabel from './ErrorBox';
import { FormInputContainer, FormInputElement, Label } from './FormInput.style';

export interface FormInputProps {
  label: string;
  isError: boolean;
  errorMessage: string;
}

const FormInput = ({
  label,
  isError,
  errorMessage,
  type,
  placeholder,
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <FormInputContainer>
      <Label>{label}</Label>
      <FormInputElement
        isError={isError}
        type={type}
        placeholder={placeholder}
      />
      {isError && <ErrorLabel errorMessage={errorMessage} />}
    </FormInputContainer>
  );
};

export default FormInput;
