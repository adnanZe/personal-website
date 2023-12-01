interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  const titleArray = title.split("");
  let spaceCount = 0;

  return (
    <p className="text-9xl font-black tracking-widest text-center">
      {titleArray.map((letter, index) => {
        return letter === " " ? (
          <br key={index} />
        ) : (
          <span className="letter-wave" key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}
