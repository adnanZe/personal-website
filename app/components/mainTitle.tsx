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

export default function MainTitle() {
  const [isVisible, setIsVisible] = useState(true);

  const hoveredCtx = useContext(MenuHoverContext);
  const hovered = hoveredCtx?.hovered;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, ANIMATION_MILLISECONDS_NAME);
    return () => clearTimeout(timer); // This will clear the timer if the component is unmounted before the 3 seconds.
  }, []);

  const renderLetters = useCallback(
    (name: string, isTitle = true) => (
      <div className="overflow-hidden">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block translate-y-full ${
              isTitle ? "animate-letterUp" : "animate-letterUpDisappear"
            }`}
            style={
              {
                "--i": index,
                "--delay": "calc(var(--i) * 100ms)",
              } as CSSProperties
            }>
            {letter}
          </span>
        ))}
      </div>
    ),
    []
  );
  return (
    <div>
      {isVisible && (
        <div
          id="name"
          className="xl:text-12xl lg:text-11xl md:text-10xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl  font-black tracking-widest text-center">
          {renderLetters(FIRST_NAME)}
          {renderLetters(LAST_NAME)}
        </div>
      )}

      {hovered && (
        <div
          id="hovered-menu"
          className="xl:text-10xl lg:text-9xl md:text-8xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl  font-black tracking-widest text-center">
          {renderLetters(hovered, false)}
        </div>
      )}
    </div>
  );
}
