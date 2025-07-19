// app/layout.jsx
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/layout';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nijam Hossen | Front-end Developer',
  description: 'Front End Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={`${inter.className} bg-gray-900 text-white `}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

