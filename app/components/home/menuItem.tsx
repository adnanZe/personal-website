import { useCallback, useContext } from "react";
import AnimationContext from "../../store/animationContext";
import AnimatedText from "../animatedText";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  gridClassName: string;
  href: string;
}

export default function MenuItem({
  title,
  gridClassName,
  href,
}: MenuItemProps) {
  const animationCtx = useContext(AnimationContext);

  const isTitleAnimationComplete = animationCtx.isTitleAnimationComplete;
  const isMenuItemHovered = animationCtx.menuItemHovered === title;
  const isMenuItemFinishedAnimation = animationCtx.isMenuItemFinishedAnimation;

  const handleHover = useCallback(() => {
    animationCtx.handleMenuItemHover(title);
  }, [animationCtx, title]);

  const handleHoverOut = useCallback(() => {
    animationCtx.handleMenuItemHoverOut();
  }, [animationCtx]);

  return (
    <li
      className={
        gridClassName +
        `${
          isTitleAnimationComplete ? " cursor-pointer" : " pointer-events-none"
        }`
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}>
      <div className="h-full w-full animate-elevateContainer">
        <Link href={`/${href}`} passHref>
          <div className="h-full w-full bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-2 sm:p-5 backdrop-blur hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500">
            <span
              className={`text-base absolute sm:relative sm:text-lg lg:text-xl ${
                isTitleAnimationComplete ? "inline-block" : "hidden"
              }`}>
              {isMenuItemHovered || isMenuItemFinishedAnimation ? (
                <AnimatedText name={title} isMenuItemHovered />
              ) : (
                title
              )}
            </span>
          </div>
        </Link>
      </div>
    </li>
  );
}
