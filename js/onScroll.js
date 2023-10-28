import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class OnScroll {
    constructor() {
        this.init();
    }

    init() {
        const animation = gsap.to('h1', {
            duration: 1,
            x: 100,
            y: 100,
            rotation: 360,
            ease: "bounce.out"
        })

        ScrollTrigger.create({
            trigger: ".main",
            start: "top top",
            end: "bottom top",
            animation: animation,
            markers: true
        });


        console.log("OnScroll init")
    }
}

export default OnScroll;