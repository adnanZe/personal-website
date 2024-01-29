import type { Metadata } from "next";
import "./_styles/globals.css";
import { MAIN_FONT } from "./_constants/fonts";
import { FIRST_NAME, LAST_NAME } from "./_constants/name";
import Menu from "./_components/menu";
import { ReactNode, isValidElement } from "react";

export const metadata: Metadata = {
  title: `${FIRST_NAME} ${LAST_NAME} | Frontend Developer`,
  description: "Frontend Developer based in Bucharest, Romania",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isRoot =
    isValidElement(children) && children.props.childPropSegment === "__PAGE__";

  return (
    <html lang="en">
      <body className={MAIN_FONT.className}>
        {children}
        {!isRoot && <Menu />}
      </body>
    </html>
  );
}
