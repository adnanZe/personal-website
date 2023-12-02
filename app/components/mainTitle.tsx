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
    <div className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-black tracking-widest text-center">
      <div id="name">
        {renderLetters(firstName)}
        {renderLetters(lastName)}
      </div>
    </div>
  );
}
