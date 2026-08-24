import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function heroAnimation(heroImg) {
    const heroImage = heroImg.current;
    if (!heroImage) return;

    /*
    const tl = gsap.timeline();
    if(!element) return;
    tl.fromTo(
        element.querySelector("h1"),
        {
            opacity: 0,
            y: 80,
        },
        {
            opacity: 1,
            y: -40,
            duration: 1.2,
            ease: "power3.out"
        }
    )
    .fromTo(
        element.querySelector("p"),
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: -40,
            duration: 1.5,
            ease: "power3.out"
        },
        "=-0.5"
    );
     */

    gsap.set(".collections", { opacity: 0 });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1
        }
    })
    .to(heroImage, {
        width: "10%",
        height: "300px",
        left: "50%",
        scale: 2.75,
        xPercent: -50,
        yPercent: 5,
        borderRadius: "5%",
        ease: "none"
    })
    .to(".collections", {
        opacity: 1,
        ease: "none"
    }, "-=0.2");
}