import './InformationContainer.css'
interface InformationInterface {imgSrc:string; imgAlt:string; head:string ; text:string}
const InformationContainer = ({imgSrc , imgAlt , head , text} : InformationInterface) => {
    return (
        <div className="informationContainer">
            <img src={imgSrc} alt={imgAlt} />
            <div className='subContainer'>
                <b className='fontSize16 fW500 colorBlack'>{head}</b>
                <p className='fontSize16 fW400 colorBlack'>{text}</p>
            </div>
        </div>
    )
}

export default InformationContainer