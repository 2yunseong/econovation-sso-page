import React from 'react';
import { Layout, SubTitle, Title } from '../style/common/Layout';
import Spacing from '../style/common/Spacing';
import FormInput from '../components/common/FormInput';
import { INVALID_INPUT_MESSAGE } from '../constant/constant';
import useInput from '../hooks/useInput';
import Button from '../components/common/Button';

const FindPasswordPage = () => {
  const [name, setNameValue, setNameStatus] = useInput();
  const [email, setEmailValue, setEmailStatus] = useInput();

  return (
    <Layout>
      <Title>비밀번호 재설정</Title>
      <SubTitle>이메일로 찾기</SubTitle>
      <Spacing size={83} />
      <FormInput
        value={name.value}
        setValue={setNameValue}
        label="NAME"
        type="text"
        placeholder="이름(실명)"
        isError={name.status === 'ERROR'}
        errorMessage={INVALID_INPUT_MESSAGE.NAME}
      />
      <Spacing size={30} />
      <FormInput
        value={email.value}
        setValue={setEmailValue}
        label="EMAIL"
        type="text"
        placeholder="이메일"
        isError={name.status === 'ERROR'}
        errorMessage={INVALID_INPUT_MESSAGE.EMAIL}
      />
      <Spacing size={74} />
      <Button onClick={() => {}} isValid={false} label="초기화 링크 보내기" />
    </Layout>
  );
};

export default FindPasswordPage;
