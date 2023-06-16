import React from 'react';
import { Layout, SubTitle, Title } from '../style/common/Layout';
import FormInput from '../components/common/FormInput';
import { INVALID_INPUT_MESSAGE } from '../constant/constant';
import { useLogin } from '../hooks/useLogin';
import LoginButton from '../components/Login/LoginButton';
import Spacing from '../style/common/Spacing';

const LoginPage = () => {
  const { email, setEmailValue, password, setPasswordValue, requestLogin } =
    useLogin();
  return (
    <Layout>
      <Title>LOGIN</Title>
      <SubTitle>로그인</SubTitle>
      <Spacing size={83} />
      <FormInput
        value={email.value}
        setValue={setEmailValue}
        label="E-MAIL"
        type="text"
        placeholder="이메일 입력"
        isError={email.status === 'ERROR'}
        errorMessage={INVALID_INPUT_MESSAGE.EMAIL}
      />
      <Spacing size={30} />
      <FormInput
        value={password.value}
        setValue={setPasswordValue}
        label="PASSWORD"
        type="password"
        placeholder="비밀번호 입력"
        isError={password.status === 'ERROR'}
        errorMessage={INVALID_INPUT_MESSAGE.PASSWORD}
      />
      <Spacing size={74} />
      <LoginButton
        onClick={requestLogin}
        isValid={email.status === 'VALID' && password.status === 'VALID'}
      />
    </Layout>
  );
};

export default LoginPage;
