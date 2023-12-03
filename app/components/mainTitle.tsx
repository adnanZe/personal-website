import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FIRST_NAME, LAST_NAME } from "../constants/name";
import { ANIMATION_MILLISECONDS_NAME } from "../constants/settingsAnimations";
import MenuHoverContext from "../store/menuHoverContext";
import { Sofia_Sans_Extra_Condensed } from "next/font/google";

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "1000"],
});

export default function MainTitle() {
  const [isVisible, setIsVisible] = useState(true);

  const hoveredCtx = useContext(MenuHoverContext);
  const hovered = hoveredCtx?.hovered;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, ANIMATION_MILLISECONDS_NAME);
    return () => clearTimeout(timer);
  }, []);

  const renderLetters = useCallback(
    (name: string, isTitle = true) => (
      <div className="overflow-hidden">
        {name.split("").map((letter, index) => {
          if (letter === " ")
            return <span key={index} className="inline-block w-10"></span>;

          return (
            <span
              key={index}
              className={`inline-block 
            translate-y-full
            ${isTitle ? "animate-letterUp" : "animate-letterUpDisappear"}
            ${sofiaSansExtraCondensed.className}`}
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
    ),
    []
  );

  return (
    <div className="xl:text-12xl lg:text-11xl md:text-10xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl font-black tracking-widest text-center">
      {isVisible && (
        <div id="name">
          {renderLetters(FIRST_NAME)}
          {renderLetters(LAST_NAME)}
        </div>
      )}

      {hovered && <div id="hovered-menu">{renderLetters(hovered, false)}</div>}
    </div>
  );
}
