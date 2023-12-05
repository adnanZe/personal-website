import type { Metadata } from "next";
import "./styles/globals.css";
import { MAIN_FONT } from "./constants/fonts";
import { FIRST_NAME, LAST_NAME } from "./constants/name";

export const metadata: Metadata = {
  title: `${FIRST_NAME} ${LAST_NAME} | Frontend Developer`,
  description: "Frontend Developer based in Bucharest, Romania",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={MAIN_FONT.className}>{children}</body>
    </html>
  );
}
