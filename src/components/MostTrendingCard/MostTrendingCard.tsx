
import './MostTrendingCard.css'
interface InformationInterface {imgSrc:string; imgAlt:string;}

const MostTrendingCard = ({imgSrc , imgAlt} : InformationInterface) => {
    return (
        <div className="mostTrendingCard">
            <div className="headContainer">
                <img src={imgSrc} alt={imgAlt} />
                <span className='fW600'>300000</span>
                <p className='fW600 colorBlack lineHieght'>Luxury Apartment in California</p>
            </div>
            <div className="locationContainer">
                <img src="/assets/icons/locationgray.svg" alt="location logo" />
                <p className='fW400 colorBlack'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            </div>
        </div>
    )
}

export default MostTrendingCard
