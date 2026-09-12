import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function heroAnimation(heroImg){
    const heroImage = heroImg.current;
    if (!heroImage) return;

    const heroContent = document.querySelector(".hero-content");
    const collectionsHeading = document.querySelector(".collections h2");

    const tl = gsap.timeline();
    tl.fromTo(
        heroContent.querySelector("h1"),
        {
            opacity: 0,
            y: 80
        },
        {
            opacity: 1,
            y: -40,
            duration: 1.2,
            ease: "power3.out"
        }
    )
    .fromTo(
        heroContent.querySelector("p"),
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
        "-=0.5"
    );

    if (collectionsHeading) gsap.set(collectionsHeading,{
        opacity: 0,
        y: 30
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onLeave: () => {
                gsap.to(collectionsHeading,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    }
                );
            },
            onEnterBack: () => {
                gsap.to(collectionsHeading, {
                    opacity: 0,
                    y: 30
                });
            }
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
    .to(heroContent, {
        opacity: 0,
        y: "-40%",
        ease: "none"
    }, 0);
}