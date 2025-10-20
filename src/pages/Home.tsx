import FindHome from "../components/FindHome/FindHome"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import MostTrending from "../components/MostTrending/MostTrending"
import NavBar from "../components/NavBar/NavBar"
import RealEstate from "../components/RealEstate/RealEstate"

const Home = () => {
    return (
        <>
            <NavBar
            imgSrc="/assets/icons/NavBarLogo.svg"
            btn="Login"
            burger = "/assets/icons/burger.svg"
            />
            <Hero/>
            <HowItWorks/>
            <FindHome/>
            <MostTrending/>
            <RealEstate/>
            <Footer/>
        </>
    )
}

export default Home
