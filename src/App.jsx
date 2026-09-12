import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css';
import Navbar from './comps/navbar';
import Hero from './comps/hero';
import Collections from './comps/collections';
import Archive from './comps/archive';
import Journal from './comps/journal';
import Contact from './comps/contact';
import Footer from './comps/footer';
import { heroAnimation } from "./animations/heroAnimation";

function App(){
  const heroImgRef = useRef(null);
  const heroRef = useRef(null);
  const featuredImgRef = useRef(null);

  useGSAP(() => {
    heroAnimation(heroRef, heroImgRef);
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero heroImgRef={heroImgRef} heroRef={heroRef} />
        <Collections featuredImgRef={featuredImgRef} />
        {/* <Archive />
        <Journal />*/}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App