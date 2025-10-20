import { NavLink } from 'react-router-dom';
import './NavBar.css'
interface NavBarInterface {imgSrc:string;  btn:string ; burger:string}

const NavBar = ({imgSrc   , btn , burger} : NavBarInterface) => {
  return (
    <nav className='navBar'>
      <img src={imgSrc} alt="OurLogo" className='navBarLogo'/>
      <ul >
        <a href="/"><li className='colorBlack'>Home</li></a>
        <a href="#"><li className='colorBlack'>About</li></a>
        <a href="#"><li className='colorBlack'>Service</li></a>
        <a href="#"><li className='colorBlack'>New Property</li></a>
        <a href="#"><li className='colorBlack'>Contact</li></a>
      </ul>
      <button>{btn}</button>
      <NavLink to='/MenuMain' className="burger"><img src={burger} alt="burger logo" className='burger'/></NavLink>
    </nav>
  )
}

export default NavBar
