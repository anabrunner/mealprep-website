import { Meta, StoryObj } from '@storybook/react';
import { Footer, IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

const meta: Meta<typeof Footer> = {
  title: 'footer/Footer',
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const FooterStory: Story = {
  args: {
    ...(mockFooterProps.base as IFooter),
  },
};
