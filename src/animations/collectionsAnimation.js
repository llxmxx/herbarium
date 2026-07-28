import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function collectionsAnimation(col, board, pin){
    gsap.to(board.current, {
        scale: 2,
        scrollTrigger: {
            trigger: col.current,
            start: "top top",
            scrub: true,
        },
        duration: 1
    });
}