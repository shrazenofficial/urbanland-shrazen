import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-full h-auto px-6 pt-36 pb-24 md:pt-48 md:pb-32 bg-[#181717]'>
            <div className='flex flex-col md:flex-row w-full h-auto justify-between border-b-1 pb-16 border-[#c4c1b9] ' >
                <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>Interested in transforming your space?<br />Explore solutions by Urbanland<span>®</span></p>
            </div>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#b1a696]'>This website showcases the premium<br />
                    outdoor furniture solutions by—Urbanland®<br />
                    across architectural projects.<br /><br />
                    If you would like to explore our range<br />
                    or request a custom quote—<a href="#" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'> contact us.</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Welcome</a>
                    <a href="#products" className='text-[#f2ede5] text-2xl'>Products</a>
                    <a href="#solutions" className='text-[#f2ede5] text-2xl'>Solutions</a>
                    <a href="#why-urbanland" className='text-[#f2ede5] text-2xl'>Why Urbanland®</a>
                    <a href="#projects" className='text-[#f2ede5] text-2xl'>Projects</a>
                    <a href="#testimonials" className='text-[#f2ede5] text-2xl'>Testimonials</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaBehance className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><CiLinkedin className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaDribbble className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right">
                        Meet Urbanland®—premium urban<br />
                        and outdoor furniture solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;