import { currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <h1>Welcome, {user?.firstName ? user?.firstName : user?.username}!</h1>
  );
}
