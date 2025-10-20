import "./Button.css" 
interface InformationInterface {imgSrc:string; imgAlt:string;}

const Button = ({imgSrc , imgAlt} : InformationInterface) => {
    return (
        <div className="button">
            <img src={imgSrc} alt={imgAlt} />
        </div>
    )
}

export default Button