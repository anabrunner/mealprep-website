import Link from 'next/link';
import { ArticleCardImage } from '../ArticleCardImage/ArticleCardImage';
import { CardViewMore } from '../CardViewMore/CardViewMore';

export interface IArticleCardSet {}
// eslint-disable-next-line no-empty-pattern
export function ArticleCardSet({}: IArticleCardSet) {
  const image =
    'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg';
  return (
    <div className="grid grid-cols-1 gap-3 mt-1 mb-4 sm:grid-cols-2 md:grid-cols-4">
      <ArticleCardImage category="test 1" title="title 1" image={image} />
      <ArticleCardImage category="test 2" title="title 2" image={image} />
      <ArticleCardImage
        category="test 3"
        title="week of may 13 and and anad adna dadadad"
        image={image}
      />
      <Link href="#">
        <CardViewMore />
      </Link>
    </div>
  );
}
