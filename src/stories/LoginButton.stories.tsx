import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from '../components/Login/LoginButton';
const meta: Meta<typeof LoginButton> = {
  title: 'COMMON/LoginButton',
  component: LoginButton,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LoginButton>;

export const enabled: Story = {
  args: {
    isValid: true,
  },
};

export const disabled: Story = {
  args: {
    isValid: false,
  },
};
