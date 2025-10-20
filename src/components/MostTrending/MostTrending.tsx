
import MostTrendingCard from "../MostTrendingCard/MostTrendingCard"
import SectionsHead from "../SectionsHead/SectionsHead"
import './MostTrending.css'

const MostTrending = () => {
    const cards = [{
        imgSrc : "/assets/images/house.png" ,
        imgAlt : "house picture" ,
    },{
        imgSrc : "/assets/images/room1.png" ,
        imgAlt : "room" ,
    },{
        imgSrc : "/assets/images/room2.png" ,
        imgAlt : "room" ,
    },{
        imgSrc : "/assets/images/room3.png" ,
        imgAlt : "room" ,
    },{
        imgSrc : "/assets/images/room4.png" ,
        imgAlt : "room" ,
    },{
        imgSrc : "/assets/images/room5.png" ,
        imgAlt : "room" ,
    }]
    return (
        <div className="mostTrending whiteSpacing">
            <SectionsHead
            head="Most Trending" 
            paraghraf="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
            />
            <div className="cardsContainer">
                {cards.map((card , index) => {
                    return (
                        <MostTrendingCard
                        key={index}
                        imgSrc={card.imgSrc}
                        imgAlt={card.imgAlt}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MostTrending
