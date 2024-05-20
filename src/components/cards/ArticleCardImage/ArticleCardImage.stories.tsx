import { Meta, StoryObj } from '@storybook/react';
import { ArticleCardImage, IArticleCardImage } from './ArticleCardImage';
import { mockArticleCardImageProps } from './ArticleCardImage.mocks';

const meta: Meta<typeof ArticleCardImage> = {
  title: 'cards/ArticleCardImage/ArticleCardImage',
  component: ArticleCardImage,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleCardImage>;

export const ArticleCardImageStory: Story = {
  args: {
    ...(mockArticleCardImageProps.base as IArticleCardImage),
  },
};
