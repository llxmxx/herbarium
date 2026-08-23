import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export function heroAnimation(heroImg, featuredImg) {
    const tl = gsap.timeline();
    const heroImage = heroImg.current;
    const featuredImage = featuredImg.current;

    gsap.set(featuredImage, {
        opacity: 0
    });

    /*tl.fromTo(
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
*/
    const state = Flip.getState(heroImage);

    featuredImage.parentNode.appendChild(heroImage);

    gsap.set(heroImage, {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
    });

    Flip.from(state, {
        paused: true
    });

    const flip = Flip.from(state, {
        paused: true,
        absolute: true,
        scale: true,
        ease: "none"
    });

    ScrollTrigger.create({
        trigger: ".collections",
        start: "top bottom",
        end: "top top",
        scrub: true,

        onUpdate: (self) => {
            flip.progress(self.progress);
        }
    });
}