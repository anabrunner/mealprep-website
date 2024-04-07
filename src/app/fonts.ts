import { Comfortaa, Dosis, Shantell_Sans } from 'next/font/google';

export const headingFont = Shantell_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--headingFont',
});

export const subheadingFont = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--subheadingFont',
});

export const bodyFont = Dosis({
  subsets: ['latin'],
  display: 'swap',
  variable: '--bodyFont',
});
