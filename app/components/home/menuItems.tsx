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
          <MenuItem title="About me" gridClassName="col-span-4 row-span-2" />
          <MenuItem title="Experiences" gridClassName="col-span-2 row-span-2" />
          <MenuItem title="Projects" gridClassName="col-span-3 row-span-2" />
          <MenuItem title="Contact" gridClassName="col-span-3 row-span-1" />
          <MenuItem title="Settings" gridClassName="col-span-3 row-span-1" />
        </ol>
      </nav>
    )
  );
}
