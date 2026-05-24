import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useState, useEffect } from "react";
// import { ArrowRight, Menu } from "lucide-react";

import "./preloaderII.css";
import logoImg from "../../assets/urbanland-logo.png";

gsap.registerPlugin(SplitText);
export default function PreloaderII() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setFontsLoaded(true);
        });
    }, []);

    useGSAP(() => {
        if (!fontsLoaded) return;
        
        function createSplitTexts(elements) {
            const splits = {};
            elements.forEach(({ key, selector, type }) => {
                const config = { type, mask: type };
                if (type === "chars") { config.charsClass = "char"; }
                if (type === "lines") { config.linesClass = "line"; }
                splits[key] = SplitText.create(selector, config);
            });
            return splits;
        }

        const splitElements = [
            { key: "logoChars", selector: ".preloader-logo h1", type: "chars" },
            { key: "footerLines", selector: ".preloader-footer p", type: "lines" },
        ];

        const splits = createSplitTexts(splitElements);

        gsap.set(splits.logoChars.chars, { x: "100%" });
        gsap.set(".preloader-logo-img", { y: 30, opacity: 0 });

        gsap.set(
            [
                splits.footerLines.lines,
            ],
            { y: "100%" }
        );

        function animateProgress(duration = 3.5) {
            const tl = gsap.timeline();
            const counterSteps = 3;
            let currentProgress = 0;

            for (let i = 0; i < counterSteps; i++) {
                const finalStep = i === counterSteps - 1;
                const targetProgress = finalStep
                    ? 1
                    : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
                currentProgress = targetProgress;

                tl.to(".preloader-progress-bar", {
                    scaleX: targetProgress,
                    duration: duration / counterSteps,
                    ease: "power3.out",
                });
            }

            return tl;
        }

        const tl = gsap.timeline({ delay: 0.5 });
        tl.to(splits.logoChars.chars, {
            x: "0%",
            stagger: 0.05,
            duration: 1,
            ease: "power4.inOut",
        })
            .to(".preloader-logo-img", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            }, "0")
            .to(
                splits.footerLines.lines,
                {
                    y: "0%",
                    stagger: 0.1,
                    duration: 1,
                    ease: "power4.inOut",
                },
                "0.25"
            )
            .add(animateProgress(), "<")
            .set(".preloader-progress", { backgroundClip: "var(--base-300)" })
            .to(
                splits.logoChars.chars,
                {
                    x: "-100%",
                    stagger: 0.05,
                    duration: 1,
                    ease: "power4.inOut",
                },
                "+=0.15"
            )
            .to(".preloader-logo-img", {
                y: -30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.in"
            }, "<")
            .to(splits.footerLines.lines, {
                y: "-100%",
                stagger: 0.1,
                duration: 0.5,
                ease: "power4.inOut",
            }, "-=0.1")
            .to(
                ".preloader-progress",
                {
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "<"
            )
            .to(
                ".preloader-mask",
                {
                    scale: 6,
                    duration: 4,
                    ease: "power3.out",
                },
                "<"
            )
            .to(
                ".preloader-mask",
                {
                    delay: 1,
                    opacity: 0,
                    display: "none",
                },
                "<"
            );
    }, { dependencies: [fontsLoaded] });

    return (
        <div className="size-full fixed z-51 overflow-hidden pointer-events-none">
            <div className="preloader-progress flex flex-col items-center">
                <div className="preloader-progress-bar"></div>
                <div className="preloader-logo flex flex-col items-center gap-4 text-center">
                    <img src={logoImg} alt="Urbanland Products Logo" className="preloader-logo-img w-16 md:w-20 h-auto object-contain mb-2 select-none" />
                    <h1>Urbanland</h1>
                </div>
            </div>

            <div className="preloader-mask"></div>

            <div className="preloader-content">
                <div className="preloader-footer">
                    <p className="text-sm">
                        Meet Urbanland®—premium urban<br />
                        and outdoor furniture solutions.
                    </p>
                </div>
            </div>
        </div >
    );
}