import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full">
      <Link href="/">
        <img
          src="/icons/logo.svg"
          alt=""
          className="w-12 h-12 object-contain"
        />
      </Link>

      <Link href="/" className="ml-2">
        <h3 className="font-poppins font-bold text-xl text-accent tracking-wide">
          mvinorian
        </h3>
      </Link>

      <ul className="list-none flex-1 sm:flex hidden justify-end items-center">
        {navLinks.map((navLink) => (
          <li key={navLink.id} className="ml-4">
            <Link
              href={navLink.link}
              className="font-poppins text-accent hover:text-secondary"
            >
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex-1 sm:hidden flex flex-col justify-center items-end">
        <img
          src={toggle ? "/icons/close.svg" : "/icons/menu.svg"}
          alt=""
          className="cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <ul
          className={`list-none ${
            toggle ? "flex" : "hidden"
          } flex-col justify-end items-end absolute top-16 px-2 py-2 rounded-sm bg-primary outline outline-2 outline-secondary`}
        >
          {navLinks.map((navLink, index) => (
            <li key={navLink.id} className={index === 0 ? "mt-0" : "mt-2"}>
              <Link
                href={navLink.link}
                className="font-poppins text-accent hover:text-secondary"
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
