import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
    return new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
    });
};

