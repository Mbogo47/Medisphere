import { useRef } from "react";
import Header from "../components/Header";
import Revcont from "../components/Revcont";
import Servcont from "../components/Servcont";
import About from "./About";
import Contact from "./Contact";

const Landingpage = () => {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Header scrollToAbout={scrollToAbout} />
            <Servcont />
            <div ref={aboutRef}>
                <About />
            </div>
            <Revcont />
            <Contact />
        </div>
    );
};

export default Landingpage;
