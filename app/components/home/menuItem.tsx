import { useCallback, useContext } from "react";
import MenuHoverContext from "../../store/menuHoverContext";

interface MenuItemProps {
  title: string;
  rowSpan?: number;
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
      className={`bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer ${
        rowSpan ? `row-span-${rowSpan}` : ""
      } col-span-${colSpan} hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500 animate-containerUp h-0`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}>
      <span className="text-xl">{title}</span>
    </li>
  );
}
