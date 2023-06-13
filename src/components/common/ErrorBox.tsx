import React from 'react';
import { Label } from './ErrorBox.style';

interface ErrorLabelProps {
  errorMessage: string;
}
const ErrorLabel = ({ errorMessage }: ErrorLabelProps) => {
  return <Label>{errorMessage}</Label>;
};

export default ErrorLabel;
