import Image from "next/image"

export default function PopularDestinations(){
    return (
        <div className="flex flex-col justify-center items-center p-30" id="Destinations">
            <h1 className="text-black text-4xl lg:text-6xl md:text-4xl sm:text-4xl font-bold pb-10">Popular Destinations</h1>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  gap-10 flex-wrap overflow-hidden justify-center">
                <div className="bg-[url('/second.jpg')] bg-cover h-130 w-100 hover:scale-102 rounded-2xl relative">
                    <div className="absolute bottom-5 left-5">
                        <h1 className="text-3xl font-bold">Petronas Tower</h1>
                        <p className="text-2xl">MALAYSIA</p>
                    </div>
                </div>
                <div className="bg-[url('/second1.jpg')] bg-cover h-130 w-100 hover:scale-102 rounded-2xl relative">
                    <div className="absolute bottom-5 left-5">
                        <h1 className="text-3xl font-bold">Mumbai</h1>
                        <p className="text-2xl">INDIA</p>
                    </div>
                </div>
                <div className="bg-[url('/second6.jpg')] bg-cover h-130 w-100 hover:scale-102 rounded-2xl relative">
                    <div className="absolute bottom-5 left-5">
                        <h1 className="text-3xl font-bold">Kampung</h1>
                        <p className="text-2xl">MALAYSIA</p>
                    </div>
                </div>
                <div className="bg-[url('/second3.jpg')] bg-cover h-130 w-100 hover:scale-102 rounded-2xl relative">
                    <div className="absolute bottom-5 left-5">
                        <h1 className="text-3xl">Sharjah</h1>
                        <p className="text-2xl">DUBAI</p>
                    </div>
                </div>
                <div className="bg-[url('/second4.jpg')] bg-cover h-130 w-100 hover:scale-102 rounded-2xl relative">
                    <div className="absolute bottom-5 left-5">
                        <h1 className="text-3xl font-bold">Kampung</h1>
                        <p className="text-2xl">MALAYSIA</p>
                    </div>
                </div>
                <div className="bg-[url('/second5.jpg')] bg-cover h-130 w-100 hover:scale-102 rounded-2xl relative">
                    <div className="absolute bottom-5 left-5">
                        <h1 className="text-3xl">Airport</h1>
                        <p className="text-3xl">DUBAI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}