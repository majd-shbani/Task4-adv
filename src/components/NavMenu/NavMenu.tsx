import { NavLink } from 'react-router-dom'
import './NavMenu.css'


const NavMenu = () => {
    return (
        <div className="navMenu">
            <div className='menuHead'> 
                <img src="/assets/icons/NavBarLogo.svg" alt="NavMenu" className='navLogo' />
                <NavLink to='/'><img src="/assets/icons/out.svg" alt="X button" className='outButton'/></NavLink>
            </div>
            <ul>
                <li className='bGroundColor'>Home</li>
                <li className='border'>About</li>
                <li className='border'>Services</li>
                <li className='border'>New Property</li>
                <li className='border'>Contact</li>
            </ul>
            <button>
                Login
            </button>
        </div>
    )
}

export default NavMenu
