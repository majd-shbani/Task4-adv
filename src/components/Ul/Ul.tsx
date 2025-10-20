
import "./Ul.css"

interface UlInterface {items:React.ReactNode[]; Head:string;}


const Ul = ({items ,Head } :UlInterface ) => {
    return (
        <ul className="ul ">
            <li className='fontSize20 fW700 paddingBottum colorBlack'>{Head}</li>
            {items?.map((item , index) => {
                return(
                    <li className='fontSize16 fW400 colorBlack' key={index}>{item}</li>
                )
            })}
        </ul>
    )
}

export default Ul