
import { BsHouse } from "react-icons/bs"

interface HowItWorksCardInterface {img:React.ReactNode}

const IconHover = ({img} : HowItWorksCardInterface) => {
    return (
        <div>
            <BsHouse style={{fontSize : `40px` , color : `#025595` }}/>
            {img}
        </div>
    )
}

export default IconHover
