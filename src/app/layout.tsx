import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const interRegular = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
