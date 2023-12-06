import { useContext } from "react";
import AnimationContext from "../../store/animationContext";
import MenuItem from "./menuItem";

export default function MenuItems() {
  const animationCtx = useContext(AnimationContext);

  return (
    animationCtx &&
    animationCtx?.isVisibleMenu && (
      <nav>
        <ol className="grid grid-cols-6 grid-rows-4 gap-5 absolute top-0 left-0 p-5 w-screen h-screen">
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
