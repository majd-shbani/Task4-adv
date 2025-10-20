

interface RealCardInterface {items:string[]; imgAlt:string;}
import './RealEstateCard.css'


const RealEstateCard = ({items , imgAlt}:RealCardInterface) => {
    return (
        <div className="realEstateCard">
            {items?.map((item , index) => {
                return(
                    <div className='imageContainer' key={index}>
                        <img src={item} alt={imgAlt}  />
                        <div className="textContainer">
                            <p className="fW400">Featured</p>
                            <span className="fW400">3D</span>
                        </div>
                    </div>
                )
                })}
        </div>
    )
}

export default RealEstateCard
