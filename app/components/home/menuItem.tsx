import { useCallback, useContext, useEffect, useState } from "react";
import AnimationContext from "../../store/animationContext";
import { ANIMATE_MS_NAME } from "@/app/constants/animationSettings";

interface MenuItemProps {
  title: string;
  gridClassName: string;
}

export default function MenuItem({ title, gridClassName }: MenuItemProps) {
  const animationCtx = useContext(AnimationContext);

  const [isPointerEvents, setIsPointerEvents] = useState(false);

  const handleHover = useCallback(() => {
    animationCtx?.handleMenuItemHover(title);
  }, [animationCtx, title]);

  const handleHoverOut = useCallback(() => {
    animationCtx?.handleMenuItemHoverOut();
  }, [animationCtx]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPointerEvents(true);
    }, ANIMATE_MS_NAME);

    return () => clearTimeout(timer);
  }, []);

  return (
    <li
      className={
        gridClassName +
        `${isPointerEvents ? " cursor-pointer" : " pointer-events-none"}`
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}>
      <div className="h-full w-full animate-elevateContainer">
        <div className="h-full w-full bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500">
          <span className="text-xl">{title}</span>
        </div>
      </div>
    </li>
  );
}
