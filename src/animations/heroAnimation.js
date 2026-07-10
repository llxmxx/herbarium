import gsap from "gsap";

export function heroAnimation(element) {
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

}