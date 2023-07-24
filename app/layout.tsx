import './globals.css';
import 'normalize.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'primereact/resources/primereact.min.css';

import { Inter } from 'next/font/google';

import Header from '@/components/common/layout/header';
import Sidebar from '@/components/common/layout/sidebar';
import Footer from '@/components/common/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Coinsgem',
  description: 'Crypto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
