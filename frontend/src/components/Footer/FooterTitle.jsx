import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useState } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

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

        // Get the original HTML before splitting
        const originalHTML = ftConRef.current.querySelector(".footer-title h1").innerHTML;

        // Create split - exclude the sub element from being split
        const split = new SplitText(".footer-title h1", {
            type: "chars",
            charsClass: "ftChar",
            // Exclude the <sub> element from being split
            exclude: "sub"
        });

        // Wrap each character in a span for animation
        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        // Handle the sub element separately
        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");

            // Add to innerChars array
            innerChars.push(subSpan);
        }

        // Initial state - start from left (-120%)
        gsap.set(innerChars, { x: "-120%" });

        // Animation - move to normal position
        gsap.to(innerChars, {
            x: "0%",
            stagger: 0.02, // Add stagger for character-by-character reveal
            ease: "power3.out",
            scrollTrigger: {
                trigger: ftConRef.current,
                start: "top 90%",
                end: "top 80%",
                scrub: true,
                // markers: true
            }
        });

        // Cleanup - revert the split and restore original HTML
        return () => {
            split.revert();
            // Restore the original HTML with sub element
            ftConRef.current.querySelector(".footer-title h1").innerHTML = originalHTML;
        };

    }, { scope: ftConRef, dependencies: [fontsLoaded] });

    return (
        <section ref={ftConRef} className='relative z-1 w-full h-[55vh] md:h-[60vh] border-t border-t-[#F7F4EF]/15 bg-[#2D2D2D] overflow-hidden'>
            <div className='flex flex-col justify-start items-center w-full pt-6 md:pt-8 gap-1.5' >
                <p className='text-[#F7F4EF]/60 text-[0.7rem]'>
                    Designed & Crafted for—<a href="#" className='text-[#C9A84C] hover:text-[#F7F4EF] transition-colors duration-300'>Urbanland®</a>
                </p>
                <p className='text-[#F7F4EF]/60 text-[0.7rem]'>
                    This website is using <a href="#" className='text-[#C9A84C] hover:text-[#F7F4EF] transition-colors duration-300'>cookies</a>
                </p>
                <p className='text-[#F7F4EF]/60 text-[0.7rem]'>
                    All rights reserved © <a href="#" className='text-[#C9A84C] hover:text-[#F7F4EF] transition-colors duration-300'>2025</a>
                </p>
            </div>

            <div className='footer-title w-full text-center select-none'>
                <h1 className='text-[clamp(5rem,15vw,12rem)] font-bold translate-y-[0%] leading-none'>
                    Urbanland<sub>®</sub>
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;