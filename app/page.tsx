import { CSSProperties } from "react";

export default function Home() {
  const classNameGeneralStyle =
    "bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer";
  const classNameHover = "hover:bg-neutral-950 hover:bg-opacity-60";
  const classNameGridItemBig = "row-span-2";

  const classNameConcatOne = `${classNameGeneralStyle} ${classNameHover} ${classNameGridItemBig}`;
  const classNameConcatTwo = `${classNameGeneralStyle} ${classNameHover}`;

  const firstName = "Adnan";
  const lastName = "Zecheria";

  const renderLetters = (name: string) => (
    <div className="overflow-hidden">
      {name.split("").map((letter, index) => (
        <span
          key={index}
          className="inline-block translate-y-full animate-letterUp"
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
  );

  return (
    <main className="flex justify-center items-center h-screen relative">
      <div className="xl:text-12xl lg:text-11xl md:text-10xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl  font-black tracking-widest text-center">
        <div id="name">
          {renderLetters(firstName)}
          {renderLetters(lastName)}
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
        <div className={classNameConcatOne}>About me</div>
        <div className={classNameConcatOne}>Experiences</div>
        <div className={classNameConcatOne}>Projects</div>
        <div className={classNameConcatTwo}>Contact</div>
        <div className={classNameConcatTwo}>Settings</div>
      </div>
    </main>
  );
}
