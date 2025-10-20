import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard"
import SectionsHead from "../SectionsHead/SectionsHead"
import './HowItWorks.css'
import IconHover from "../IconHover/IconHover"
import { BsHandIndexThumb} from "react-icons/bs"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"


const HowItWorks = () => {
    const cards = [{
        img : <IconHover img={<HiOutlineMagnifyingGlass style={{fontSize : `24px` , color : `#025595` , transform :`translate(-31px , -3px) ` }} />} /> ,
        head: "Search Apartment" , 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },{
        img : <IconHover img={<BsHandIndexThumb  style={{fontSize : `20px` , color : `#025595` , transform :`translate(-31px , -6px) ` }} />}/> ,
        head: "Select Apartment" , 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },{
        img : <IconHover img={<IoMdCheckmarkCircleOutline style={{fontSize : `22px` , color : `#025595`  , transform :`translate(-31px , -5px) ` }} />} /> ,
        head: "Confirm Apartment" , 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    }]
    return (
        <div className="howItWorks whiteSpacing">
            <SectionsHead
            head="How it Works" 
            paraghraf="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
            />
            <div className="cardsContainer">
                {cards.map((card , index) => {
                    return (
                        <HowItWorksCard
                        key = {index}
                        img = {card.img}
                        head = {card.head}
                        text = {card.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HowItWorks
