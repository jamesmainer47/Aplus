import Contacts from "./Contacts";
import PassportsVisa from "./PassportsVisa";
import PopularDestinations from "./PopularDestinations";
export default function SectionTwo(){
    return (
        <div className="aplusbgg flex flex-col relative w-dvw ">
            <PassportsVisa/>
            <PopularDestinations/>
            <Contacts/>  
        </div>
    )
}