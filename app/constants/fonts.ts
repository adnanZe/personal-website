import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";

export const MAIN_FONT_TITLE = Sofia_Sans_Extra_Condensed({
    subsets: ["latin"],
    weight: ["400", "700"],
    fallback: ["sans-serif"],
});

export const MAIN_FONT = Sofia_Sans({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    fallback: ["sans-serif"],
});