import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "../components/NavBar/page";
import Header from "@/components/menuHeader/page";

export const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
    variable: "--font-roboto",
  })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunar",
  description: "An Italian restraunt website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.variable}`}
      >
          <Nav />
          <Header />

        {children}
      </body>
    </html>
  );
}
