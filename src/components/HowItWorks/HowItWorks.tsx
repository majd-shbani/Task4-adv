
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard"
import SectionsHead from "../SectionsHead/SectionsHead"
import './HowItWorks.css'
import Confirm from "./Confirm"
import Select from "./select"
import Search from "./search"


const HowItWorks = () => {
    const cards = [{
        img : <Search /> ,
        head: "Search Apartment" , 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },{
        img : <Select /> ,
        head: "Select Apartment" , 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },{
        img : <Confirm /> ,
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
