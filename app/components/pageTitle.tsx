export default function PageTitle() {
  const titlePage = "adnan zecheria";
  const hoverPageList = ["about", "projects", "contact"];
  return (
    <div className="text-9xl font-black tracking-widest text-center">
      <h1>
        {titlePage.split("").map((letter, index) => {
          if (letter === " ") return <br key={index} />;
          return (
            <span
              className={`inline-block letter-wave delay-${index}00ms`}
              key={index}>
              {letter}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
