import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mahreen Choudhry | Portfolio',
  description: 'Software Engineer & Full Stack Developer — Portfolio of Mahreen Choudhry',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
