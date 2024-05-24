import { Meta, StoryObj } from '@storybook/react';
import { CardViewMore, ICardViewMore } from './CardViewMore';
import { mockCardViewMoreProps } from './CardViewMore.mocks';

const meta: Meta<typeof CardViewMore> = {
  title: 'cards/CardViewMore/CardViewMore',
  component: CardViewMore,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CardViewMore>;

export const CardViewMoreStory: Story = {
  args: {
    ...(mockCardViewMoreProps.base as ICardViewMore),
  },
};
