import Image from "next/image"

export default function PassportsVisa(){
    return (
        <div className="flex flex-col sm:flex-col justify-center items-center  perspective relative p-20" id="Services">
            <h1 className="flex text-black text-4xl lg:text-6xl md:text-4xl pb-5 font-bold t">Passports And Visa</h1>

            <div className="flex flex-col  lg:gap-10 sm:gap-50 gap-20 text-center sm:flex-col md:flex-col lg:flex-row">
                 <div className="rounded-4xl  bg-cyan-400 transform-style-preserve-3d  transition-all ease-in duration-700 hover:rotate-y-180   relative w-100 h-100">
                    <div className="absolute backface-hidden bg-cyan-400  text-white flex w-100 h-130  bg-[url('/pass1.png')] bg-contain rounded-2xl">
                        <h1 className="absolute bottom-0 bg-black w-full p-8 rounded-b-2xl font-bold text-2xl"> PASSPORT</h1>
                    </div>
                    <div className="absolute backface-hidden rounded-shadow  justify-center rounded-2xl rotate-y-180 aplusbg2 text-black  w-100 h-130">
                        <h1 className="text-3xl p-10 font-bold">PASSPORT</h1>
                        <hr />
                        <h2 className="text-left font-bold pl-10">Passport Requirements</h2>
                        <ul className="text-left pl-20 p-5  list-disc ">
                            <li className="p-2">Place of Birth</li>
                            <li className="p-2">Postal Address</li>
                            <li className="p-2">Email</li>
                            <li className="p-2">Residence Address</li>
                            <li className="p-2">Parent Details</li>
                            <li className="p-2">Watu wako wa Karibu</li>
                        </ul>
                        <button className="rounded-2xl bg-blue-400 p-3 hover:bg-white hover:text-blue-400 font-bold">Details</button>
                    </div>
                </div>
                <div className="rounded-4xl bg-cyan-400 mt-30 lg:mt-0 transform-style-preserve-3d  transition-all ease-in duration-700 hover:rotate-y-180 relative w-100 h-130 ">
                    <div className="absolute backface-hidden bg-cyan-400 text-white rounded-2xl flex w-100 h-130 bg-[url('/pass2.png')] bg-contain">
                        <h1 className="absolute bottom-0 bg-black w-full p-8 rounded-b-2xl font-bold text-2xl"> BUSINESS VISA</h1>
                    </div>
                    <div className="absolute aplusbg2 backface-hidden rounded-shadow  justify-center rounded-2xl rotate-y-180 bg-green-300 text-black  w-100 h-130">
                        <h1 className="text-3xl p-10 font-bold">BUSINESS VISA</h1>
                        <hr />
                        <h2 className="text-left font-bold pl-10">Business Visa Requirements</h2>
                        <ul className="text-left pl-20 p-5  list-disc ">
                            <li className="p-2">Visa Details</li>
                            <li className="p-1">Passport Size Picture</li>
                            <li className="p-1">TIN</li>
                            <li className="p-1">Covid Certificate</li>
                            <li className="p-1">Flight Booking</li>
                            <li className="p-1">Bank Statement</li>
                            <li className="p-1">Invitation Letter</li>
                            <li className="p-1">Business License</li>
                        </ul>
                        <button className="rounded-2xl bg-blue-400 p-3 hover:bg-white hover:text-blue-400 font-bold">Details</button>
                    </div>
                </div>
                 <div className="rounded-4xl bg-cyan-400 transform-style-preserve-3d  transition-all ease-in duration-700 hover:rotate-y-180 relative w-100 h-100">
                    <div className="absolute backface-hidden bg-cyan-400 rounded-2xl text-white flex w-100 h-130 bg-[url('/pass2.png')] bg-contain">
                        <h1 className="absolute bottom-0 bg-black w-full p-8 rounded-b-2xl font-bold text-2xl"> TOURIST VISA</h1>
                    </div>
                    <div className="absolute aplusbg2 backface-hidden rounded-shadow  justify-center rounded-2xl rotate-y-180 bg-green-300 text-black  w-100 h-130">
                        <h1 className="text-3xl p-10 font-bold">TOURIST VISA</h1>
                        <hr />
                        <h2 className="text-left font-bold pl-10">Tourist Visa Requirements</h2>
                        <ul className="text-left pl-20 p-5  list-disc ">
                            <li className="p-2">Visa Details</li>
                            <li className="p-2">Passport Size Picture</li>
                            <li className="p-2">Hotel Booking</li>
                            <li className="p-2">Flight Booking</li>
                            <li className="p-2">Current Residence Address</li>
                        </ul>
                        <button className="rounded-2xl bg-blue-400 p-3 hover:bg-white hover:text-blue-400 font-bold">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}