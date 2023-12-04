import { useCallback, useContext } from "react";
import MenuHoverContext from "../../store/menuHoverContext";

interface MenuItemProps {
  title: string;
  gridClassName: string;
}

export default function MenuItem({ title, gridClassName }: MenuItemProps) {
  const hoveredCtx = useContext(MenuHoverContext);

  const handleHover = useCallback(() => {
    hoveredCtx?.handleHover(title);
  }, [hoveredCtx, title]);

  const handleHoverOut = useCallback(() => {
    hoveredCtx?.handleHoverOut();
  }, [hoveredCtx]);

  return (
    <li
      className={gridClassName}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}>
      <div className="h-0 w-full cursor-pointer animate-containerUp flex justify-center items-end overflow-hidden">
        <div className="h-full w-full bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500">
          <span className="text-xl">{title}</span>
        </div>
      </div>
    </li>
  );
}
