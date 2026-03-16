import type { Metadata } from "next";
import { Inter, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import { ChromeLayout } from "@/components/ChromeLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oldEnglish = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-old-english",
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Software engineer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oldEnglish.variable} antialiased bg-base-paper text-base-ink`}
      >
        <ChromeLayout>{children}</ChromeLayout>
      </body>
    </html>
  );
}
