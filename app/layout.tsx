import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nano Banana Pro - AI Image Generator & Editor',
  description: 'Turn simple prompts and reference images into finished visuals with Nano Banana Pro.',
  keywords: ['AI Image Generator', 'AI Image Editor', 'Nano Banana Pro', 'AI Art', 'Image Generation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
