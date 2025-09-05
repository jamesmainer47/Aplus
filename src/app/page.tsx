"use client";
import Chatbot from "@/components/AplusAssistant";
import Header from "@/components/Header";
import Home from "@/components/Home";
import SectionTwo from "@/components/sectionTwo";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa"
import { useState } from "react";
import Image from "next/image";

export default function App(){
    const [ishovered, sethovered] = useState();
    return(
      <div className="flex flex-col flex-wrap relative ">
        <Home />
        
        <SectionTwo/>
        <div className={`ml-10 p-5 bottom-10 flex flex-row transition-all  ease duration-3000  fixed text-shadow-lg text-shadow-green-800  `} >
          <Link href="https://wa.me/255714235011" className="relative" onMouseEnter={() => sethovered(!ishovered)}><FaWhatsapp size={50} className={`updowntext-green-500 text-shadow-lg ${ishovered? "hidden": "absolute watsapie"} bg-black rounded-full text-green-400`} /><Image src="/watsap.png" width={300} height={100} alt="Whatsapp Logo" className={`${ishovered? "relative watsapiestop": "hidden"}`}/></Link>
        </div>
      </div>
    )
}