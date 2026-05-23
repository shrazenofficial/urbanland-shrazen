import React from 'react'
import logoImg from '../../assets/urbanland-logo.png'

const Logo = () => {
    return (
        <div className="fixed top-6 left-6 md:top-[2vw] md:left-7 z-40">
            <img 
                src={logoImg} 
                alt="Urbanland Logo" 
                className="h-6 sm:h-8 md:h-9 object-contain brightness-0 invert hover:opacity-85 transition-opacity duration-300 cursor-pointer" 
            />
        </div>
    )
}

export default Logo