import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar(){
    const navRef = useRef(null);

    useEffect(() =>{
        gsap.fromTo(
            navRef.current,
            {
                opacity: 0,
                y: -70
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 2.5,
                ease: "power3.out"
        });
    }, []);

    return(
        <nav ref={navRef} className="navbar">
            <h2 className="logo">HERBARIUM</h2>
            <div className="links navbar-links">
                <p>collections</p>
                <p>archive</p>
                <p>journal</p>
                <p>contact</p>
            </div>
        </nav>
    )
}

export default Navbar