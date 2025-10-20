
import './SectionsHead.css'
interface SectionsHeadInterface {head:string;  paraghraf:string}

const SectionsHead = ({head , paraghraf} : SectionsHeadInterface) => {
    return (
    <div className='sectionsHead'>
        <h1 className='fW700 colorBlack'>{head}</h1>
        <span className='fW400 colorGray'>{paraghraf}</span>
    </div>
    )
}

export default SectionsHead
