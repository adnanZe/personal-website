export default function GridNavigation() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 absolute top-0 left-0 p-5 w-screen h-screen">
      <div className="bg-neutral-800 row-span-2 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur">
        <span>About me</span>
      </div>
      <div className="bg-neutral-800 row-span-2 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur">
        Experiences
      </div>
      <div className="bg-neutral-800 row-span-2 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur">
        Projects
      </div>
      <div className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur">
        Contact
      </div>
      <div className="bg-neutral-800 rounded-lg bg-opacity-60 flex items-end p-5 backdrop-blur">
        Settings
      </div>
    </div>
  );
}
