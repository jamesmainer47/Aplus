export default function Contacts(){
    return(
        <div className="flex   flex-col  px-20 p-5 lg:px-80 sm:flex-col md:flex-col lg:flex-row text-black justify-between" id="Contact">
            <div className="p-5">
                <h1 className="text-4xl font-bold ">Newsletter</h1>
                <p className="text-xl">Subscribe for Air Ticketing and Parcels</p>
            </div>
            <div className="self-center align-middle flex items-center relative">
                <input type="email" placeholder="Write your Email" className="relative p-5 rounded-full border-2 pr-24 aplusBorder aplusColorPH placeholder:text-shadow-lg placeholder:text-green-500  text-blue-400 text-xl"/>
                <button className="absolute aplusBg text-white rounded-full top-2.5 right-2.5 p-4">
                    Submit
                </button>
            </div>
        </div>
    )
}