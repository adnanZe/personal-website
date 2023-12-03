export default function GridNavigation() {
  const classNameGeneralStyle =
    "bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur cursor-pointer";
  const classNameHover = "hover:bg-neutral-950 hover:bg-opacity-60";
  const classNameGridItemBig = "row-span-2";

  const classNameConcatOne = `${classNameGeneralStyle} ${classNameHover} ${classNameGridItemBig}`;
  const classNameConcatTwo = `${classNameGeneralStyle} ${classNameHover}`;

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
      <div className={classNameConcatOne}>About me</div>
      <div className={classNameConcatOne}>Experiences</div>
      <div className={classNameConcatOne}>Projects</div>
      <div className={classNameConcatTwo}>Contact</div>
      <div className={classNameConcatTwo}>Settings</div>
    </div>
  );
}
