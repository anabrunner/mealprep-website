import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          card: 'border-[--mainDarkPurple]',
          formButtonPrimary: 'bg-[--mainDarkPurple] hover:bg-[--darkPink]',
        },
      }}
      path="/sign-in"
    />
  );
}
