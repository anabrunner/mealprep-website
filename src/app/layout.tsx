import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/nav/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { bodyFont, headingFont, subheadingFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'PrepPotato | Your Meal Prep Buddy',
};

const theme = createTheme({
  colors: {
    mainDarkPurple: [
      '#f5f2f7',
      '#e6e3e9',
      '#cac2d3',
      '#aea1bd',
      '#9684aa',
      '#87729f',
      '#80699b',
      '#6e5887',
      '#624e79',
      '#55426c',
    ],
    lighPink: [
      '#ffeff5',
      '#f3dfe5',
      '#debec8',
      '#ca9aa9',
      '#b97c8f',
      '#ae697e',
      '#aa5e76',
      '#964d64',
      '#874359',
      '#78384d',
    ],
    darkPink: [
      '#ffeff3',
      '#f1e0e3',
      '#dbc1c5',
      '#c59ea5',
      '#b38289',
      '#a86f78',
      '#a36570',
      '#8f545f',
      '#814954',
      '#743d47',
    ],
    darkPurple: [
      '#f8f2f5',
      '#e9e3e6',
      '#d4c3cc',
      '#bfa0b0',
      '#ae8398',
      '#a3708a',
      '#9f6783',
      '#8b5670',
      '#7c4b65',
      '#6e3f57',
    ],
  },
});

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
      <head>
        <ColorSchemeScript />
      </head>
      <ClerkProvider>
        <body className="font-bodyFont">
          <MantineProvider theme={theme}>
            <div className="flex flex-col justify-between items-center min-h-screen">
              <Navbar />
              <div className="mt-20 max-w-7xl w-11/12 md:mt-0">{children}</div>
              <Footer />
            </div>
          </MantineProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
