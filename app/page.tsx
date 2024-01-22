"use client";
import { AnimationContextProvider } from "./_store/animationContext";
import MainTitle from "./home/mainTitle";
import MenuItems from "./home/menuItems";

export default function Home() {
  return (
    <AnimationContextProvider>
      <main className="flex justify-center items-center h-screen">
        <MainTitle />
        <MenuItems />
      </main>
    </AnimationContextProvider>
  );
}
