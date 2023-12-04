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
  weight: ["400", "700"],
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

  useEffect(() => {
    const timer = setTimeout(() => {
      hoveredCtx?.setIsVisibleMenu(true);
    }, ANIMATION_MILLISECONDS_NAME / 2);
    return () => clearTimeout(timer);
  }, [hoveredCtx]);

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
    <div className="xl:text-ResXl lg:text-ResLg md:text-ResMd sm:text-ResSm min-[525px]:text-ResXsm min-[425px]:text-ResXXsm min-[325px]:text-ResXXXsm text-TitleResXXsm font-bold tracking-normal text-center">
      {isVisible && (
        <div id="name" className="leading-none">
          {renderLetters(FIRST_NAME)}
          {renderLetters(LAST_NAME)}
        </div>
      )}

      {hovered && <div id="hovered-menu">{renderLetters(hovered, false)}</div>}
    </div>
  );
}
