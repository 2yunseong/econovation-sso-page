import React, { InputHTMLAttributes } from 'react';
import ErrorLabel from './ErrorBox';
import { FormInputContainer, FormInputElement, Label } from './FormInput.style';

export interface FormInputProps {
  value: string;
  setValue: (value: string) => void;
  label: string;
  isError: boolean;
  errorMessage: string;
}

const FormInput = ({
  value,
  setValue,
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
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        isError={isError}
        type={type}
        placeholder={placeholder}
      />
      {isError && <ErrorLabel errorMessage={errorMessage} />}
    </FormInputContainer>
  );
};

export default FormInput;
