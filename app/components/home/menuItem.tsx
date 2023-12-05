import { useCallback, useContext, useEffect, useState } from "react";
import MenuHoverContext from "../../store/menuHoverContext";
import { ANIMATION_MILLISECONDS_NAME } from "@/app/constants/settingsAnimations";

interface MenuItemProps {
  title: string;
  gridClassName: string;
}

export default function MenuItem({ title, gridClassName }: MenuItemProps) {
  const hoveredCtx = useContext(MenuHoverContext);

  const [isPointerEvents, setIsPointerEvents] = useState(false);

  const handleHover = useCallback(() => {
    hoveredCtx?.handleHover(title);
  }, [hoveredCtx, title]);

  const handleHoverOut = useCallback(() => {
    hoveredCtx?.handleHoverOut();
  }, [hoveredCtx]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPointerEvents(true);
    }, ANIMATION_MILLISECONDS_NAME);

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
