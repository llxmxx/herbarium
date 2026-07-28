import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function collectionsAnimation(col, board){
    console.log(ScrollTrigger.getAll());
    gsap.to(board.current, {
        scale: 1,
        y: 0,
        scrollTrigger: {
            trigger: col.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: col.current,
            anticipatePin: 1
        }
    });
}