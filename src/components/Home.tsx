"use client";
import Link from "next/link"
import Header from "./Header";
import { FaPlaneDeparture, FaBed, FaPlaneArrival, FaPlane } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Home(){
    const tripType = [
    "Return",
    "One way",
    "Multi-city"    
    ]

    
    const backgrounds = ["/bg.jpg", "/bg1.jpg", "/bg2.jpg", "/bg4.jpg", "/bg5.jpg"]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length); 
        }, 5000);
        return () => clearInterval(interval);       // Clean up on unmount 
    }, []);


    return (
        <div className="flex flex-col relative  text-center w-dvw h-dvh shadow-2xs shadow-blue-100 bg-cover sticky top-0 " id="Home" style={{
            backgroundImage: `url('${backgrounds[currentIndex]}')`,
        }}>
            <Header/>
            <div className="max-w-250 pt-50 flex justify-center flex-col pl-10 sm:pl-20 pt-10 lg:pl-110">
            <h1 className="aplusColor text-4xl sm:text-6xl lg:text-9xl largerText md:text-4xl aplusColor font-bold flex ">FLIGHTS  <em className="text-white pl-7">&</em></h1> 
            <h1 className="text-yellow-300 text-5xl italic lg:text-9xl sm:text-6xl largerText md:text-5xl font-bold  flex ">PARCELS</h1>
            <p className="text-black text-white text-3xl text-center lg:text-4xl flex  pt-10  ">Book your Flight or Parcel now</p>
            <p className="text-black text-white text-3xl text-center lg:text-4xl flex pb-10 ">Price is same as Online</p>
            </div>
            <div className="flex justify-center p-5  lg:p-10 sm:p-5 hidden">
                 <div className="aplusBg2 sm:items-center rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[10px] rounded-br-[10px] p-8 flex flex-col  w-auto">
                <div className="flex sm:items-center">
                    <ul className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5 p-5 sm:justify-center sm:items-center">
                        <li className="relative flex gap-2"><FaPlaneDeparture className=""/>Flights </li>
                        <li className="relative flex gap-2"><FaBed/>Holidays</li>
                        
                    </ul>
                </div>
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row sm:items-center">
                    <div className="relative flex ">
                        <div className="">
                            <p>Trip Type</p>
                            <select title="mp" name="" id="">
                                {tripType.map((src) => (
                                    <option key={src}>{src}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex relative flex-col sm:flex-col md:flex-col lg:flex-row rounded-full border-0 lg:border-2 sm:border-0 ">
                        <input type="text" className="relative placeholder:text-blue-600 font-bold p-5 lg:border-r-2 border-0 pl-15 m-0" placeholder="Where from?" />
                        <FaPlane className="absolute lg:top-7 lg:left-5 sm:left-5 sm:top-5" />
                        <input type="text" className="relative placeholder:text-blue-600 p-5  font-bold  border-transparent focus:border-transparent pl-15" placeholder="Where To" />
                        <FaPlaneArrival className="absolute lg:top-7 lg:left-75 sm:left-5 sm:top-22"/>
                    </div>
                </div>
            </div>
            </div>
            {/* Custom CSS animation */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    )
}