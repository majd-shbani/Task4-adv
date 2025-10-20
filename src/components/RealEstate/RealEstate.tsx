import { useState } from 'react'
import RealEstateCard from '../RealEstateCard/RealEstateCard'
import SectionsHead from '../SectionsHead/SectionsHead'
import './RealEstate.css'

const RealEstate = () => {
    const [activeCategory, setActiveCategory] = useState('Residential Property')
    const Cards = [{
        items: ["/assets/images/house1.jpg" ," /assets/images/house2.jpg" , "/assets/images/house3.jpg"],
        imgAlt: "house picture",
        category:"Residential Property"
    },{
        items: ["/assets/images/house.png" ," /assets/images/room1.png" , "/assets/images/room2.png"],
        imgAlt: "house picture",
        category:"Commercial Property"
    },{
        items: ["/assets/images/room3.png" ," /assets/images/room4.png" , "/assets/images/room5.png"],
        imgAlt: "house picture",
        category:"Agriculture Property"
    },{
        items: ["/assets/images/house.png" ," /assets/images/room1.png" , "/assets/images/house3.jpg"],
        imgAlt: "house picture",
        category:"Industrial Property"
    }]
    const categories = ['Residential Property', 'Commercial Property', 'Agriculture Property', 'Industrial Property']
    return (
        <div className="realEstate whiteSpacing">
            <SectionsHead
            head="Best Real Estate Deals" 
            paraghraf="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
            />
            <div className="MenuContainer">
                {categories.map((category, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className={ activeCategory === category? 'active' : '' }>
                        {category}
                    </button>
                    ))} 
            </div>
            <div className='cardsContainer'>
                {Cards.filter(card => card.category === activeCategory).map((card , index) => {
                    return (
                        <RealEstateCard
                        key={index}
                        items={card.items}
                        imgAlt={card.imgAlt}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default RealEstate
