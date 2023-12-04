"use client";
import { MenuHoverContextProvider } from "./store/menuHoverContext";
import MainTitle from "./components/home/mainTitle";
import MenuItems from "./components/home/menuItems";

export default function Home() {
  return (
    <MenuHoverContextProvider>
      <main className="flex justify-center items-center h-screen relative">
        <MainTitle />
        <MenuItems />
      </main>
    </MenuHoverContextProvider>
  );
}
