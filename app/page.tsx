"use client";
import { AnimationContextProvider } from "./store/animationContext";
import MainTitle from "./components/home/mainTitle";
import MenuItems from "./components/home/menuItems";

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
