import { useCallback, useContext } from "react";
import AnimationContext from "../../store/animationContext";
import AnimatedText from "../animatedText";

interface MenuItemProps {
  title: string;
  gridClassName: string;
}

export default function MenuItem({ title, gridClassName }: MenuItemProps) {
  const animationCtx = useContext(AnimationContext);

  const isTitleAnimationComplete = animationCtx.isTitleAnimationComplete;
  const isMenuItemHovered = animationCtx.menuItemHovered === title;

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
        <div className="h-full w-full bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500">
          <span className="text-xl">
            {isMenuItemHovered ? (
              <AnimatedText name={title} isMenuItemHovered />
            ) : (
              title
            )}
          </span>
        </div>
      </div>
    </li>
  );
}
