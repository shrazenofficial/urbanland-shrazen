// import './marqueesticky.css';
import MarqueeText from "../Marquee/MarqueeText";
import StickyCols from "../StickyCols/StickyCols";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeSticky = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-con",
                start: "bottom 80%",
                end: "bottom 50%",
                scrub: 1,
                // markers: true,
            },
        });

        // Animate out without collapsing the document height!
        // Collapsing document height during scrub destroys all GSAP pinned trigger measurements.
        tl.to(
            ".marquee-con-none",
            { opacity: 0, yPercent: -50, duration: 1, ease: "none" }
        );
    });

    return (
        <section className=" w-full overflow-hidden">
            <div className="pin-con relative">
                <div className="pl-8">
                    <p className="text-[0.7rem] text-[#eae5dd] choose-subtitle">
                        Want to learn more about
                        <br />
                        the benefits of—Urbanland<span>®</span>?
                    </p>
                </div>

                <div className="marquee-con-none absolute top-0 -z-1">
                    <MarqueeText />
                </div>

                {/* SPACE RESERVER — extremely important */}
                <div className="sticky-spacer w-full h-[20vh]" />
            </div>
        </section>
    );
};

export default MarqueeSticky;
