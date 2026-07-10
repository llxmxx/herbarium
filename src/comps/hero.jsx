import flower from "../assets/flower.jfif"

function Hero(){
    return(
        <section className="hero">
            <img src={flower} alt="flower" className="hero-image"/>
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