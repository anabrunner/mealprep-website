import { Button, Paper, Text, Title } from '@mantine/core';
import Link from 'next/link';
import classes from './ArticleCardImage.module.css';

export interface IArticleCardImage {
  category: string;
  title: string;
  image: string;
}

export function ArticleCardImage({
  category,
  title,
  image,
}: IArticleCardImage) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="z-10">
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        variant="filled"
        color="darkPink"
        className="font-bodyFont opacity-100"
      >
        <Link href="#">View</Link>
      </Button>
    </Paper>
  );
}
