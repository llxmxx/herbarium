import { useEffect, useRef } from 'react';
import { heroAnimation } from '../animations/heroAnimation';
import flower from "../assets/flower.jfif";

function Hero(){
    const heroRef = useRef(null);

    useEffect(() => {
        heroAnimation(heroRef.current);
    }, []);

    return(
        <section className="hero">
            <img src={flower} alt="flower" className="hero-image"/>
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