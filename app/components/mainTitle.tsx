export default function MainTitle() {
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
            } as React.CSSProperties
          }>
          {letter}
        </span>
      ))}
    </div>
  );

  return (
    <div className="xl:text-12xl lg:text-11xl md:text-10xl max-[570px]:text-6xl max-[378px]:text-5xl text-8xl  font-black tracking-widest text-center">
      <div id="name">
        {renderLetters(firstName)}
        {renderLetters(lastName)}
      </div>
    </div>
  );
}
