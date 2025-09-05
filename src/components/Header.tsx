"use client";

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
const navs = [
    "Home",
    "Services",
    "Destinations",
    "Contact"
]
export default function Header(){
    const [seenavs, setnavs] = useState(false);
    return (
        <div className="mt-0 lg:mt-20">
            <nav className="flex sm:rounded-none md:rounded-full flex-row mx-auto sm:max-w-100 md:max-w-150  lg:max-w-250 pl-10 pr-10 justify-between relative lg:rounded-full bg-white  text-black items-center align-middle text-center self-center ">
                <div className="flex items-center   p-5 flex-row ">
                    <Link href="/" className="flex">
                   <Image alt="A PLUS LOGO" src="/favicon.png" width={50} height={50}/>
                    <h1 className="text-4xl lg:text-4xl sm:text-4xl font-bold self-center hover:border-b-2 to-100% border-b-yellow-400 aplusColor">PLUS</h1>
                    </Link>
                </div>
                <ul className="gap-10 p-5 sm:hidden md:hidden hidden lg:flex">
  {navs.map((item) => (
    <li
      key={item}
      className="relative flex font-bold p-3  transition-all duration-300 ease-in-out hover:text-blue-600"
    >
      <Link
        href={`#${item}`}
        className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        {item}
      </Link>
    </li>
  ))}
</ul>

                <div className={`flex lg:hidden sm:flex-col flex-col p-5 hover:bg-yellow-200 rounded-full m-1`} onClick={() => setnavs(has => !has)}>
                    <div className="h-1 border-2 w-4 mt-0.5"></div>
                    <div className="h-1 border-2 w-4 mt-0.5"></div>
                    <div className="h-1 border-2 w-4 mt-0.5"></div>
                </div>
                <div className={`absolute top-25 right-5 text-left bg-black text-white p-10 rounded-2xl ${seenavs? "flex" : "hidden"}`}>
                    <ul>
                        {navs.map((item) => (
                        <li key={item} className="hover:bg-blue-700  p-2 hover:text-white rounded-xl m-5"> <Link href={`#${item}`}>{item}</Link></li>
                    ))}
                    </ul>
                    <div className="absolute top-8 right-2 hover:bg-yellow-500 rounded-4xl p-4 " onClick={() => setnavs(has => !has)}>
                        <div className="bg-white w-5 h-0.5 rotate-45 "></div>
                        <div className="bg-white w-5 h-0.5 rotate-120 "></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}