import { Meta, StoryObj } from '@storybook/react';
import { BaseTemplate, IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta: Meta<typeof BaseTemplate> = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BaseTemplate>;

export const Template: Story = {
  args: {
    ...(mockBaseTemplateProps.base as IBaseTemplate),
  },
};
