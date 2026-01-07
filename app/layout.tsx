import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from "@/components/Navbar";

const avantt = localFont({
  src: [
    {
      path: '../public/font/Avantt-Thin.otf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/font/Avantt-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/font/Avantt-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/Avantt-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/font/Avantt-SemiBold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/font/Avantt-Bold.otf',
      weight: '700',
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: "WJ You",
  description: "A remake of won j you studio portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avantt.className} antialiased`}
      >
        <main>
          <Navbar/>
        {children}
        </main>
      </body>
    </html>
  );
}
