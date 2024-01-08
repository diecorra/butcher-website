import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['300'],
});

export const metadata: Metadata = {
  title: 'Carni Scelte | Macelleria',
  description:
    'Assapora la qualità: carne senza glutine. Visita la nostra macelleria per consulenze esperte.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <meta property="og:image" content="<generated>" />
      <body className={`${oswald.variable} font-oswald`}>{children}</body>
    </html>
  );
}
