
import Button from '../Button/Button'
import Ul from '../Ul/Ul'
import './Footer.css'


const Footer = () => {
    const buttons =[{
        imgSrc:"/assets/icons/facebookLogo.svg" , 
        imgAlt:"facebook Logo"
    },{
        imgSrc:"/assets/icons/twitterLogo.svg" , 
        imgAlt:"twitterLogo"
    },{
        imgSrc:"/assets/icons/linkedinLogo.svg" , 
        imgAlt:"linkedinLogo"
    }]
    return (
        <footer >
            <div className="footerHead">
                <div className="subContainer">
                    <img src="/assets/icons/NavBarLogo.svg" alt="OurLogo" />
                    <p className="fontSize16 fW400 lineHieght colorGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempusfelis vitae sit est quisque.</p>
                </div>
                <Ul
                Head='Service'
                items={["Payment & Tax","Features","View Booking","Support"]}
                />
                <Ul
                Head='About'
                items={["About us","News","Pricing","New Property"]}
                />
                <div>
                    <Ul
                    Head='Our Location'
                    items={["2972 Westheimer Rd. Santa Ana, Illinois 85486 "]}
                    />
                    <div className='buttonsContainer'>
                        {buttons.map((button , index) => {
                            return (
                                <Button
                                key={index}
                                imgSrc={button.imgSrc}
                                imgAlt={button.imgAlt}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='footerEnd'>
                <span className='fontSize fW400 colorBlack'>Copyright 2024 flora. All Rights Reserved</span>
                <div>
                    <span className='fontSize fW400 colorBlack paddingRight'>Terms & Conditions</span>
                    <span className='fontSize fW400 colorBlack'>Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
