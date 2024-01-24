import React from "react";

export default function Menu() {
  return (
    <nav className="bg-white rounded-2xl p-5 shadow-md">
      <ul className="flex">
        <li className="list-none inline-block px-8 py-3 m-2 text-lg font-semibold text-gray-700 cursor-pointer relative z-10 transition-colors duration-500 hover:text-white">
          About me
          <span className="after"></span>
        </li>
        <li className="list-none inline-block px-8 py-3 m-2 text-lg font-semibold text-gray-700 cursor-pointer relative z-10 transition-colors duration-500 hover:text-white">
          Experiences
          <span className="after"></span>
        </li>
        <li className="list-none inline-block px-8 py-3 m-2 text-lg font-semibold text-gray-700 cursor-pointer relative z-10 transition-colors duration-500 hover:text-white">
          Projects
          <span className="after"></span>
        </li>
        <li className="list-none inline-block px-8 py-3 m-2 text-lg font-semibold text-gray-700 cursor-pointer relative z-10 transition-colors duration-500 hover:text-white">
          Contact
          <span className="after"></span>
        </li>
        <li className="list-none inline-block px-8 py-3 m-2 text-lg font-semibold text-gray-700 cursor-pointer relative z-10 transition-colors duration-500 hover:text-white">
          Settings
          <span className="after"></span>
        </li>
      </ul>
    </nav>
  );
}
