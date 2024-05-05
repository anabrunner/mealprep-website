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
    <html
      lang="en"
      className={`${headingFont.variable} ${subheadingFont.variable} ${bodyFont.variable}`}
    >
      <ClerkProvider>
        <body className="font-bodyFont">
          <div className="flex flex-col justify-between items-center min-h-screen">
            <Navbar />
            <div className="mt-20 md:mt-0">{children}</div>
            <Footer />
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
