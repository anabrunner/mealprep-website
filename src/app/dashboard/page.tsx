import { ArticleCardSet } from '@/components/cards/ArticleCardSet/ArticleCardSet';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <>
      <Link href="#" className="flex justify-end text-xl">
        My account
      </Link>
      <h1 className="font-headingFont text-4xl">
        Welcome, {user?.firstName ? user?.firstName : user?.username}!
      </h1>
      <div className="flex justify-between">
        <h2 className="text-xl">My meal plans</h2>
        <Link href="#" className="text-xl">
          Start a new plan
        </Link>
      </div>
      <ArticleCardSet />
      <div className="flex justify-between">
        <h2 className="text-xl">My recipes</h2>
        <Link href="#" className="text-xl">
          Create new recipe
        </Link>
      </div>
      <ArticleCardSet />
    </>
  );
}
