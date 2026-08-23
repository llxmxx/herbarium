import { useRef } from 'react';
import { heroAnimation } from '../animations/heroAnimation';
import flower from "../assets/spring.jfif";

function Hero({heroImgRef, featuredImgRef}){
    const heroRef = useRef(null);

    return(
        <section className="hero">
            <img ref={heroImgRef} src={flower} alt="flower" className="hero-image"/>
            <div className="overlay"></div>
            <div ref={heroRef} className="hero-content">
                <h1>
                    HERBARIUM
                </h1>
                <p>
                    The Botanical Archive
                </p>
            </div>
            
        </section>
    )
}

export default Hero