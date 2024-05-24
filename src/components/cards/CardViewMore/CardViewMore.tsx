import { Paper, Title } from '@mantine/core';
import classes from './CardViewMore.module.css';

export interface ICardViewMore {}
// eslint-disable-next-line no-empty-pattern
export function CardViewMore({}: ICardViewMore) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div className="flex flex-col justify-center z-10">
        <Title order={3} className={classes.title}>
          view more +
        </Title>
      </div>
    </Paper>
  );
}
