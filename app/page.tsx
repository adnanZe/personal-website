"use client";
import { AnimationContextProvider } from "./_store/animationContext";
import HomeComponents from "./home/HomeComponents";

export default function Home() {
  return (
    <AnimationContextProvider>
      <main className="flex justify-center items-center h-screen">
        <HomeComponents />
      </main>
    </AnimationContextProvider>
  );
}
