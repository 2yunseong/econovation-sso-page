import React from 'react';
import { Option } from '../../types/type';
import { Label } from '../../style/common/Layout';
import { Container, RadioButtonContainer } from './FormCheck.style';

interface FormCheckProps {
  isError: boolean;
  name: string;
  options: Option[];
  setValue: (param: string) => void;
}

const FormCheck = ({ isError, name, options, setValue }: FormCheckProps) => {
  return (
    <Container>
      <Label>MEMBER</Label>
      <RadioButtonContainer>
        {options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              name={name}
              value={option.value}
              id={option.id}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value);
              }}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </RadioButtonContainer>
    </Container>
  );
};

export default FormCheck;
