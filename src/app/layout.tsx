import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import Providers from '@/Providers';
import { Footer } from '@/components/templates/Footer';
import { Header } from '@/components/templates/Header';

// import { Header } from '@/components/Header';

import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: 'Aiqfome Magalu',
  description: 'Um app de delivery feito com Next.js'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Providers>
          <Header />
          <main className='mx-auto max-w-4xl'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
