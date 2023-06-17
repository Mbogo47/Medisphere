import homeImage from "../assets/home-img.svg"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Revcont from "../components/Revcont"
import Servcont from "../components/Servcont"
import '../styles/landing.css'
import About from "./About"
import Contact from "./Contact"


const Landingpage = () => {
    return (
        <div>
            <Header />
            <img src={homeImage} alt="home image" className="home" />
            <Servcont />
            <About />
            <Revcont />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landingpage