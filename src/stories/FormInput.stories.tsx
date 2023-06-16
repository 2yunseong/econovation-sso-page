import type { Meta, StoryObj } from '@storybook/react';
import FormInput from '../components/common/FormInput';
const meta: Meta<typeof FormInput> = {
  title: 'Example/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const NameInputForm: Story = {
  args: {
    label: 'NAME',
    isError: false,
    errorMessage: '이름이 잘못되었습니다.',
    placeholder: '이름을 입력하세요.',
  },
};
