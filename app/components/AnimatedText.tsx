import { CSSProperties } from "react";
import { MAIN_FONT_TITLE } from "@/app/constants/fonts";

interface AnimatedTextProps {
  name: string;
  isTitle?: boolean;
}

export default function AnimatedText({
  name,
  isTitle = false,
}: AnimatedTextProps) {
  return (
    <div className="overflow-hidden">
      {name.split("").map((letter, index) => {
        if (letter === " ")
          return <span key={index} className="inline-block w-10"></span>;

        return (
          <span
            key={index}
            className={`inline-block 
        translate-y-full
        ${isTitle ? "animate-ascendLetters" : "animate-fadeOutLetters"}
        ${MAIN_FONT_TITLE.className}`}
            style={
              {
                "--i": index,
                "--delay": "calc(var(--i) * 100ms)",
              } as CSSProperties
            }>
            {letter}
          </span>
        );
      })}
    </div>
  );
}
