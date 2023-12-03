"use client";
import { CSSProperties, useCallback, useEffect, useState } from "react";

export default function Home() {
  const firstName = "Adnan";
  const lastName = "Zecheria";

  const [isVisible, setIsVisible] = useState(true);

  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // This will clear the timer if the component is unmounted before the 3 seconds.
  }, []);

  const renderLetters = useCallback(
    (name: string, isTitle: boolean) => (
      <div className="overflow-hidden">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block translate-y-full ${
              isTitle ? "animate-letterUp" : "animate-letterUpDisappear"
            }`}
            style={
              {
                "--i": index,
                "--delay": "calc(var(--i) * 100ms)",
              } as CSSProperties
            }>
            {letter}
          </span>
        ))}
      </div>
    ),
    []
  );

  const handleHover = useCallback((item: string) => {
    setHovered(item);
  }, []);

  const handleHoverOut = useCallback(() => {
    setHovered(null);
  }, []);

  return (
    <main className="flex justify-center items-center h-screen relative">
      <div>
        {isVisible && (
          <div
            id="name"
            className="xl:text-12xl lg:text-11xl md:text-10xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl  font-black tracking-widest text-center">
            {renderLetters(firstName, true)}
            {renderLetters(lastName, true)}
          </div>
        )}

        {hovered && (
          <div
            id="hovered-menu"
            className="xl:text-10xl lg:text-9xl md:text-8xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl  font-black tracking-widest text-center">
            {renderLetters(hovered, false)}
          </div>
        )}
      </div>

      <nav>
        <ol className="grid grid-cols-2 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
          <li
            className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 hover:bg-neutral-950 hover:bg-opacity-60"
            onMouseEnter={() => handleHover("About me")}
            onMouseLeave={() => handleHoverOut()}>
            About me
          </li>
          <li
            className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 hover:bg-neutral-950 hover:bg-opacity-60"
            onMouseEnter={() => handleHover("Experiences")}
            onMouseLeave={() => handleHoverOut()}>
            Experiences
          </li>
          <li
            className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer row-span-2 hover:bg-neutral-950 hover:bg-opacity-60"
            onMouseEnter={() => handleHover("Projects")}
            onMouseLeave={() => handleHoverOut()}>
            Projects
          </li>
          <li
            className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer hover:bg-neutral-950 hover:bg-opacity-60"
            onMouseEnter={() => handleHover("Contact")}
            onMouseLeave={() => handleHoverOut()}>
            Contact
          </li>
          <li
            className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer hover:bg-neutral-950 hover:bg-opacity-60"
            onMouseEnter={() => handleHover("Settings")}
            onMouseLeave={() => handleHoverOut()}>
            Settings
          </li>
        </ol>
      </nav>
    </main>
  );
}
