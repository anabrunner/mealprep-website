import { Meta, StoryObj } from '@storybook/react';
import { INavbar, Navbar } from './Navbar';
import { mockNavbarProps } from './Navbar.mocks';

const meta: Meta<typeof Navbar> = {
  title: 'nav/Navbar',
  component: Navbar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const NavbarStory: Story = {
  args: {
    ...(mockNavbarProps.base as INavbar),
  },
};
