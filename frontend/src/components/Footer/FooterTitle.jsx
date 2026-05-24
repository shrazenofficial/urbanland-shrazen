import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef, useState } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText);

const FooterTitle = () => {
    const ftConRef = useRef(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    React.useEffect(() => {
        document.fonts.ready.then(() => {
            setFontsLoaded(true);
        });
    }, []);

    useGSAP(() => {
        if (!ftConRef.current || !fontsLoaded) return;

        // Split only the brand text cleanly
        const split = new SplitText(".footer-brand-text", {
            type: "chars",
            charsClass: "ftChar"
        });

        // Wrap each character in a span for animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Add the sub element span to animate with the rest of the text
        const subSpan = ftConRef.current.querySelector(".footer-brand-sub span");
        if (subSpan) {
            innerChars.push(subSpan);
        }

        // Initial state - start from left (-120%)
        gsap.set(innerChars, { x: "-120%" });

        // Animation - move to normal position when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(innerChars, {
                        x: "0%",
                        stagger: 0.03, // Add stagger for character-by-character reveal
                        duration: 1.2,
                        ease: "power4.out"
                    });
                    observer.disconnect();
                }
            });
        }, {
            threshold: 0.05 // Trigger early when the footer enters the viewport
        });

        observer.observe(ftConRef.current);

        // Cleanup - revert split and disconnect observer
        return () => {
            observer.disconnect();
            split.revert();
        };

    }, { scope: ftConRef, dependencies: [fontsLoaded] });

    return (
        <section ref={ftConRef} className='relative z-1 w-full h-[50vh] md:h-[55vh] border-t border-t-[#F7F4EF]/15 bg-[#2D2D2D] overflow-hidden flex flex-col justify-between pb-6 md:pb-10'>
            <div className='flex flex-col md:flex-row w-full justify-between items-center px-6 md:px-16 pt-8 md:pt-10 gap-3 md:gap-0' >
                <p className='text-[#F7F4EF]/60 text-[0.75rem] font-medium tracking-wide'>
                    Website made by—<a href="#" className='text-[#F7F4EF] hover:text-[#C9A84C] underline transition-colors duration-300'>Urbanland®</a>
                </p>
                <p className='text-[#F7F4EF]/60 text-[0.75rem] font-medium tracking-wide'>
                    This website is using <span className='text-[#F7F4EF] font-semibold'>cookies.</span>
                </p>
                <p className='text-[#F7F4EF]/60 text-[0.75rem] font-medium tracking-wide'>
                    All rights reserved © <span className='text-[#F7F4EF] font-semibold'>2025</span>
                </p>
            </div>

            <div className='footer-title w-full text-center select-none pb-14 md:pb-0'>
                <h1 className='text-[clamp(3rem,16vw,18rem)] font-bold tracking-tighter translate-y-[0%] leading-none flex items-baseline justify-center'>
                    <span className="footer-brand-text">Urbanland</span>
                    <sub className="footer-brand-sub"><span>®</span></sub>
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;