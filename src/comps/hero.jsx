import { useRef } from 'react';
import { heroAnimation } from '../animations/heroAnimation';
import flower from "../assets/spring.jfif";

function Hero({heroImgRef, heroRef}){
    return(
        <section ref={heroRef} className="hero">
            <img ref={heroImgRef} src={flower} alt="flower" className="hero-image"/>
            <div className="overlay"></div>
            <div className="hero-content">
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