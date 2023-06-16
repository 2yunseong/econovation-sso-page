import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/common/Button';
const meta: Meta<typeof Button> = {
  title: 'COMMON/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Enabled: Story = {
  args: {
    isValid: true,
    label: '로그인',
  },
};

export const Disabled: Story = {
  args: {
    isValid: false,
    label: '로그인',
  },
};
