import './HowItWorksCard.css'
interface HowItWorksCardInterface {img:React.ReactNode; head:string ; text:string}

const HowItWorksCard = ({ img , head , text} :HowItWorksCardInterface) => {
    return (
        <div className='howItWorksCard'>
            <div>{img}</div>
            <b className='fW600 colorBlack'>{head}</b>
            <p className='fW400 colorGray lineHieght'>{text}</p>
        </div>
    )
}

export default HowItWorksCard
