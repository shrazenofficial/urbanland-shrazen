import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";
import ProductsCatalog from "../ProductsCatalog/ProductsCatalog";

const Choose = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        const lines = gsap.utils.toArray(".choose-title-clip");

        // Shared animation setup
        const createAnimation = (isMobile) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".choose-section",
                    start: "top 75%",
                    end: "top 10%",
                    scrub: true,
                },
            });

            tl.from(".choose-subtitle", {
                yPercent: 100,
                opacity: 0,
                ease: "power1.inOut"
            });

            tl.to(
                lines,
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "none",
                    stagger: 0.2,
                    duration: 1,
                },
                "<"
            );

            if (!isMobile) {
                tl.from(".choose-sec", {
                    yPercent: 100,
                    duration: 1,
                }, "<");
            }
        };

        mm.add("(min-width: 769px)", () => createAnimation(false));
        mm.add("(max-width: 768px)", () => createAnimation(true));

        return () => mm.revert();
    }, { scope: sectionRef });

    // Determine text lines based on screen width at render time
    const isMobD = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    return (
        <section ref={sectionRef} className="choose-section w-full min-h-screen p-8 pt-10 pb-20 flex flex-col justify-start items-start gap-12">
            <div className="w-full">
                <p className='text-[.7rem] text-[#eae5dd] choose-subtitle'>Discover Available Urbanland<span>®</span></p>
                <div className="lg:mt-10 mt-7 title-part origin-bottom ">
                    {
                        chooseLines.map((line, index) => (
                            <h1 key={index} className={`choose-heading text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter choose-title`}>
                                <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}<span className={`choose-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span></span>
                            </h1>
                        ))
                    }
                </div>
                <div className="choose-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                    <div className='lg:w-1/2 w-full text-[#b1a696] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-16'>
                        <p>You can choose from our wide range of premium Urbanland® furniture. Each of our products provides the highest quality and meets the standards adjusted to your needs. Choose the ones you like.</p>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <div className=" lg:w-[30%] w-[60%]">
                            <p className="text-[.7rem] text-[#eae5dd]">All Urbanland® products are designed
                                and built on the same principles:</p>
                        </div>
                        <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8">
                            <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                                Sustainable
                            </div>
                            <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                                Nature—Care
                            </div>
                            <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                                Smart
                            </div>
                            <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                                Privacy
                            </div>
                            <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                                Spacious
                            </div>
                            <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                                Glassed-in
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="w-full border-t border-white/10 my-6"></div>

            {/* Nested Products Catalog */}
            <ProductsCatalog showTitle={false} />
        </section>
    );
};

export default Choose;