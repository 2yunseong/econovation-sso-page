import React, { PropsWithChildren } from 'react';
import { FormItemContainer, Label } from './FormItem.style';
import ErrorLabel from './ErrorBox';

interface FormItemProps {
  label: string;
  isError: boolean;
  errorMessage: string;
}

const FormItem = ({
  isError,
  label,
  errorMessage,
  children,
}: FormItemProps & PropsWithChildren) => {
  return (
    <FormItemContainer>
      <Label>{label}</Label>
      {children}
      {isError && <ErrorLabel errorMessage={errorMessage} />}
    </FormItemContainer>
  );
};

export default FormItem;
