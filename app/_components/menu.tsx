"use client";
import { usePathname } from "next/navigation";
import React from "react";
import MenuListItem from "./menuListItem";
import { LINKS } from "../_constants/path";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav
      className="bg-white rounded-2xl p-5 shadow-md hover:m-2 transition-all absolute bottom-10 left-0 duration-500 translate-x-10"
      style={{ width: "calc(100% - 100px)" }}>
      <ul className="flex justify-around">
        {LINKS.map((link) => (
          <MenuListItem
            key={link.href}
            {...link}
            isActive={pathname === link.href}
          />
        ))}
      </ul>
    </nav>
  );
}
