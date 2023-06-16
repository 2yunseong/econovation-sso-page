import { useState } from 'react';
import { InputInfo, InputStatus } from '../types/type';

const initInputValue: InputInfo = {
  status: 'INIT',
  value: '',
};

const useInput = (initValue = '') => {
  const [input, setInput] = useState(initInputValue);
  const setValue = (value: string) => {
    setInput({ ...input, value });
  };

  const setStatus = (status: InputStatus) => {
    setInput({ ...input, status });
  };

  return [input, setValue, setStatus] as const;
};

export default useInput;
