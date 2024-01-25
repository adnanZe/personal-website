import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  text: string;
  isActive: boolean;
}

export default function MenuListItem({ href, text, isActive }: Props) {
  return (
    <li
      className={`list-none rounded-2xl inline-block px-8 py-3 m-2 text-lg font-semibold text-gray-700 cursor-pointer relative z-10 transition-colors duration-500 hover:text-white hover:bg-slate-950 ${
        isActive ? "bg-gray-800 text-white" : ""
      }`}>
      <Link href={href}>{text}</Link>
      <span className="after"></span>
    </li>
  );
}
