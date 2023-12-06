import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FIRST_NAME, LAST_NAME } from "../../constants/name";
import {
  ANIMATE_MS_HOVER_MENU_DELAY,
  ANIMATE_MS_MENU,
  ANIMATE_MS_NAME,
} from "../../constants/animationSettings";
import AnimationContext from "../../store/animationContext";
import { MAIN_FONT_TITLE } from "@/app/constants/fonts";

export default function MainTitle() {
  const [canShowHovered, setCanShowHovered] = useState(false);

  const animationCtx = useContext(AnimationContext);
  const hovered = animationCtx?.menuItemHovered;

  useEffect(() => {
    const timer = setTimeout(() => {
      animationCtx?.setIsVisibleMenu(true);
    }, ANIMATE_MS_MENU);
    return () => clearTimeout(timer);
  }, [animationCtx]);

  useEffect(() => {
    let timer: null | ReturnType<typeof setTimeout> = null;
    if (hovered) {
      timer = setTimeout(() => {
        setCanShowHovered(true);
      }, ANIMATE_MS_HOVER_MENU_DELAY);
    } else {
      setCanShowHovered(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [hovered]);

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
    ),
    []
  );

  return (
    <div className="xl:text-ResXl lg:text-ResLg md:text-ResMd sm:text-ResSm min-[525px]:text-ResXsm min-[425px]:text-ResXXsm min-[325px]:text-ResXXXsm text-TitleResXXsm font-bold tracking-normal text-center">
      {!animationCtx?.isTitleAnimationComplete && (
        <div id="name" className="leading-none">
          {renderLetters(FIRST_NAME)}
          {renderLetters(LAST_NAME)}
        </div>
      )}

      {hovered && canShowHovered && (
        <div id="hovered-menu">{renderLetters(hovered, false)}</div>
      )}
    </div>
  );
}
