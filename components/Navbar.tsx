import React from "react";
import dropdownImg from "public/images/dropdown.png";
import adonisgold from "public/images/adonisgold.png";
import Image from "next/image";
import Link from "next/link";

// import Title from "./Title"

export default function Navbar(props: any) {
  return (
    <div className=" flex flex-row justify-between text-3xl p-4 bg-primary">
      <div className="font-bold">
        <Image src={adonisgold} className="inline-flex mr-4" alt="gigachad" width={50} height={50} />
        <span className="text-red-500">Jeffrey</span><span className="text-yellow-500"> VS. </span>
        <span className="text-green-500">Adoniss</span> 
      </div>
      <div className="flex gap-4 mr-8 ">
        <NavLink name="Home" href="/#" />
        <NavLink name="Progress" href="/#" />
        <NavLink name="Progress" href="/#" />
        <NavLink name="Planner" href="/#" />
        <NavLink name="Journal" href="/#" />
      </div>
    </div>
  );
}

function NavLink({name, href}: any) {
  return (
    <Link href={href} className="text-white hover:text-gray-300">
      <span className="text-lg underline">{name}</span>
    </Link>
  );
}