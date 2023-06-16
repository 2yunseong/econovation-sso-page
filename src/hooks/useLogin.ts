import { useEffect } from 'react';
import useInput from './useInput';

const validEmail = (target: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(target);
};

export const useLogin = () => {
  const [email, setEmailValue, setEmailStatus] = useInput();
  const [password, setPasswordValue, setPasswordStatus] = useInput();

  useEffect(() => {
    setEmailStatus(
      email.value.length !== 0 && validEmail(email.value) ? 'VALID' : 'INIT'
    );
    setPasswordStatus(password.value.length !== 0 ? 'VALID' : 'INIT');
  }, [email.value, password.value]);
  const requestLogin = () => {
    if (!validEmail(email.value)) {
      setEmailStatus('ERROR');
      return;
    }
  };

  return { email, setEmailValue, password, setPasswordValue, requestLogin };
};
