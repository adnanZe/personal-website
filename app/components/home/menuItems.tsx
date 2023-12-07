import { useContext } from "react";
import AnimationContext from "../../store/animationContext";
import MenuItem from "./menuItem";

export default function MenuItems() {
  const isVisibleMenu = useContext(AnimationContext).isVisibleMenu;

  return (
    isVisibleMenu && (
      <nav>
        <ol className="grid grid-cols-1 sm:grid-cols-6 grid-rows-8 sm:grid-rows-4 gap-5 absolute top-0 left-0 p-5 w-screen h-screen">
          <MenuItem title="About me" gridClassName="sm:col-span-4 row-span-2" />
          <MenuItem
            title="Experiences"
            gridClassName="sm:col-span-2 row-span-2"
          />
          <MenuItem title="Projects" gridClassName="sm:col-span-3 row-span-2" />
          <MenuItem title="Contact" gridClassName="sm:col-span-3 row-span-1" />
          <MenuItem title="Settings" gridClassName="sm:col-span-3 row-span-1" />
        </ol>
      </nav>
    )
  );
}
