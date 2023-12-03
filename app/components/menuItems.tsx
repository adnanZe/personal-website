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
      <ol className="grid grid-cols-6 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 col-span-4 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("About me")}
          onMouseLeave={() => handleHoverOut()}>
          <span className="text-xl">About me</span>
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 col-span-2 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Experiences")}
          onMouseLeave={() => handleHoverOut()}>
          <span className="text-xl">Experiences</span>
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 col-span-2 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Projects")}
          onMouseLeave={() => handleHoverOut()}>
          <span className="text-xl">Projects</span>
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer col-span-4 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Contact")}
          onMouseLeave={() => handleHoverOut()}>
          <span className="text-xl">Contact</span>
        </li>
        <li
          className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer col-span-4 hover:bg-neutral-950 hover:bg-opacity-60 transition ease-in-out duration-500"
          onMouseEnter={() => handleHover("Settings")}
          onMouseLeave={() => handleHoverOut()}>
          <span className="text-xl">Settings</span>
        </li>
      </ol>
    </nav>
  );
}
