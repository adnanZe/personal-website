import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./styles/globals.css";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sofiaSans.className}>{children}</body>
    </html>
  );
}
