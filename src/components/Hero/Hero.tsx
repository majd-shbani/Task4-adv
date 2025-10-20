import InformationContainer from '../InformationContainer/InformationContainer'
import './Hero.css'

const Hero = () => {
    const cards = [{
        imgSrc:"/assets/icons/location.svg", 
        imgAlt:"Location logo", 
        head:"Location", 
        text:"Ahmedabad, India"
    },{
        imgSrc:"/assets/icons/dollar-circle.svg", 
        imgAlt:"dolar logo", 
        head:"Price", 
        text:"$1000 - $10,000"
    },{
        imgSrc:"/assets/icons/house.svg", 
        imgAlt:"house", 
        head:"Type of Property", 
        text:"Apartment"
    }]
    return (
        <div className="hero">
            <div>
                <h1 className='fW700 colorBlack'>Discover a place you will love to live</h1>
                <p className='fontSize16 fW400 lineHieght colorGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
            </div>
            <div className='container'>
                {cards.map((card , index) => {
                    return(
                        <InformationContainer
                        key={index}
                        imgSrc = {card.imgSrc}
                        imgAlt = {card.imgAlt}
                        head = {card.head}
                        text = {card.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Hero