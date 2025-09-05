
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return (
        <div className="aplusBg2 flex flex-col pt-10 ">
        <div className="flex flex-col sm:flex-col  md:flex-col  lg:flex-row text-black lg:justify-between items-center  lg:px-80 w-full" id="">
            <div className="flex flex-col ">
                <h1 className="headfooter font-bold  text-4xl text-white">Quick Links</h1>
                <ul className="">
                    <li><Link href="/about" className="text-white font-bold text-xl  hover:text-blue-600">About us</Link></li>
                    <li><Link href="/help" className="text-white font-bold text-xl hover:text-blue-600">Help</Link></li>
                </ul>
            </div>
            <div className="flex flex-col ">
                <h1 className="headfooter sm:self-center text-4xl font-bold text-white">Contact Info</h1>
                <ul className="">
                    <li>Off Bagamoyo Rd, Plot 325/43</li>
                    <li>Mwenge Mkono wa Bwana House, 3rd floor</li>
                    <li>P.O.Box 14082, Dar es Salaam</li>
                    <li><Link href="info@aplus.co.tz">info@aplus.co.tz</Link></li>
                </ul>
            </div>
            <div className="flex flex-col sm:self-center ">
                <h1 className="headfooter  sm:self-center font-bold text-4xl text-white">Connect</h1>
                <ul className="flex flex-row gap-10 p-2">
                    <li className="rounded-full bg-black p-2 hover:bg-blue-700"><Link href="https://wa.me/255714235011"><FaWhatsapp size={50} className="text-green-500"/></Link></li>
                    <li className="rounded-full bg-black p-2 hover:bg-green-500"><Link href="https://facebook.com/aplus_navigators"><FaFacebook size={50} className="text-blue-700"/></Link></li>
                    <li className="rounded-full bg-black p-2 hover:bg-blue-700"><Link href="https://instagram.com/aplus_navigators"><FaInstagram size={50} className="text-pink-800"/></Link></li>
                </ul>
            </div>
        </div>  
        <div className="p-5 text-2xl text-white self-center font-bold">
            <h1 className="flex text-sm text-center self-center">Copyright &copy;2025. All rights Reserved | JOMAFA done!!</h1>
        </div>
        </div>
    )
}