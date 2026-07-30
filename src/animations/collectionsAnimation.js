import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function collectionsAnimation(col, board){
    console.log(ScrollTrigger.getAll());
    gsap.fromTo(board.current, {
        scale: 3,
        yPercent: 8
        },
        {
        scale: 1,
        yPercent: 0,
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