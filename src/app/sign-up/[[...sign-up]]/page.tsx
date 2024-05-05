import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          card: 'border-[--mainDarkPurple]',
          formButtonPrimary: 'bg-[--mainDarkPurple] hover:bg-[--darkPink]',
        },
      }}
      path="/sign-up"
    />
  );
}
