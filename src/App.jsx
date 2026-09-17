import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import gsap from "gsap";
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
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const colRef = useRef(null);
  const boardRef = useRef(null);
  const lenis = new Lenis();

useGSAP(() => {
  heroAnimation(heroRef, heroImgRef, colRef, boardRef);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}, []);

  
  return (
    <>
      <Navbar />
      <main>
        <Hero heroRef={heroRef} heroImgRef={heroImgRef} />
        <Collections colRef={colRef} boardRef={boardRef} />
        {/* <Archive />
        <Journal />*/}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App