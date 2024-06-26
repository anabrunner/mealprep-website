import { ArticleCardSet } from '@/components/cards/ArticleCardSet/ArticleCardSet';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import styles from './styles.module.css';

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <>
      <div className="flex justify-evenly gap-3 text-xl mt-2 mb-3 sm:justify-end">
        <Link href="#myMealPlans" className={styles.links}>
          My meal plans
        </Link>
        <Link href="#myRecipes" className={styles.links}>
          My recipes
        </Link>
        <Link href="#" className={styles.links}>
          My account
        </Link>
      </div>
      <h1 className="font-headingFont text-4xl mb-3">
        Welcome, {user?.firstName ? user?.firstName : user?.username}!
      </h1>
      <div className="flex justify-between mb-2">
        <h2 className="text-xl" id="myMealPlans">
          My meal plans
        </h2>
        <Link href="#" className={styles.links}>
          Start a new plan
        </Link>
      </div>
      <ArticleCardSet />
      <div className="flex justify-between mb-2">
        <h2 className="text-xl" id="myRecipes">
          My recipes
        </h2>
        <Link href="#" className={styles.links}>
          Create new recipe
        </Link>
      </div>
      <ArticleCardSet />
    </>
  );
}
