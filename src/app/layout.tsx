import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/nav/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { bodyFont, headingFont, subheadingFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'PrepPotato | Your Meal Prep Buddy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${headingFont.variable} ${subheadingFont.variable} ${bodyFont.variable}`}
      >
        <body className="font-bodyFont">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
