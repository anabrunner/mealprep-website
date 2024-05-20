import { Meta, StoryObj } from '@storybook/react';
import { ArticleCardSet, IArticleCardSet } from './ArticleCardSet';
import { mockArticleCardSetProps } from './ArticleCardSet.mocks';

const meta: Meta<typeof ArticleCardSet> = {};

export default meta;

type Story = StoryObj<typeof ArticleCardSet>;

export const ArticleCardSetStory: Story = {
  args: {
    ...(mockArticleCardSetProps.base as IArticleCardSet),
  },
};
