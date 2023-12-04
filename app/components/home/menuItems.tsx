import { useContext } from "react";
import MenuHoverContext from "../../store/menuHoverContext";
import MenuItem from "./menuItem";

export default function MenuItems() {
  const hoveredCtx = useContext(MenuHoverContext);

  return (
    hoveredCtx &&
    hoveredCtx?.isVisibleMenu && (
      <nav>
        <ol className="grid grid-cols-6 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
          <MenuItem title="About me" rowSpan={2} colSpan={4} />
          <MenuItem title="Experiences" rowSpan={2} colSpan={2} />
          <MenuItem title="Projects" rowSpan={2} colSpan={3} />
          <MenuItem title="Contact" rowSpan={1} colSpan={3} />
          <MenuItem title="Settings" rowSpan={1} colSpan={3} />
        </ol>
      </nav>
    )
  );
}
