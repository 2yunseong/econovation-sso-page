import React from 'react';
import { Layout, SubTitle, Title } from '../style/common/Layout';
import Spacing from '../style/common/Spacing';
import FormInput from '../components/common/FormInput';
import { INVALID_INPUT_MESSAGE } from '../constant/constant';
import useInput from '../hooks/useInput';
import Button from '../components/common/Button';

const FindIdPage = () => {
  const [semester, setSemesterValue, setSemesterStatus] = useInput();
  const [name, setNameValue, setNameStatus] = useInput();
  return (
    <Layout>
      <Title>아이디 찾기</Title>
      <SubTitle>기수, 이름으로 찾기</SubTitle>
      <Spacing size={83} />
      <FormInput
        value={semester.value}
        setValue={setSemesterValue}
        label="SEMESTER"
        type="text"
        placeholder="기수(숫자만 입력)"
        isError={semester.status === 'ERROR'}
        errorMessage={INVALID_INPUT_MESSAGE.SEMESTER}
      />
      <Spacing size={30} />
      <FormInput
        value={name.value}
        setValue={setNameValue}
        label="NAME"
        type="text"
        placeholder="이름(실명)"
        isError={name.status === 'ERROR'}
        errorMessage={INVALID_INPUT_MESSAGE.EMAIL}
      />
      <Spacing size={74} />
      <Button onClick={() => {}} isValid={false} label="아이디 찾기" />
    </Layout>
  );
};

export default FindIdPage;
