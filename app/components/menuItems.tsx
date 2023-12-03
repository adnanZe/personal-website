import { useCallback, useContext, useState } from "react";
import MenuHoverContext from "../store/menuHoverContext";

export default function MenuItems() {
  const hoveredCtx = useContext(MenuHoverContext);

  const handleHover = useCallback(
    (item: string) => {
      hoveredCtx?.handleHover(item);
    },
    [hoveredCtx]
  );

  const handleHoverOut = useCallback(() => {
    hoveredCtx?.handleHoverOut();
  }, [hoveredCtx]);
  return (
    <nav>
      <ol className="grid grid-cols-2 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("About me")}
          onMouseLeave={() => handleHoverOut()}>
          About me
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Experiences")}
          onMouseLeave={() => handleHoverOut()}>
          Experiences
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Projects")}
          onMouseLeave={() => handleHoverOut()}>
          Projects
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Contact")}
          onMouseLeave={() => handleHoverOut()}>
          Contact
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Settings")}
          onMouseLeave={() => handleHoverOut()}>
          Settings
        </li>
      </ol>
    </nav>
  );
}
