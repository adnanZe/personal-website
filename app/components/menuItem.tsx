import { useCallback, useContext } from "react";
import MenuHoverContext from "../store/menuHoverContext";

interface MenuItemProps {
  title: string;
  rowSpan: number;
  colSpan: number;
}

export default function MenuItem({ title, rowSpan, colSpan }: MenuItemProps) {
  const hoveredCtx = useContext(MenuHoverContext);

  const handleHover = useCallback(() => {
    hoveredCtx?.handleHover(title);
  }, [hoveredCtx, title]);

  const handleHoverOut = useCallback(() => {
    hoveredCtx?.handleHoverOut();
  }, [hoveredCtx]);

  return (
    <li
      className={`row-span-${rowSpan} col-span-${colSpan}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}>
      <div className="h-full w-full cursor-pointer animate-containerUp">
        <div className="h-full w-full bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500">
          <span className="text-xl">{title}</span>
        </div>
      </div>
    </li>
  );
}
