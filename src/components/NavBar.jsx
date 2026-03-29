import React from 'react'
import { navMenu } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa6'

const NavBar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='fixed w-full py-4 z-50 backdrop-blur-3xl'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex justify-between items-center'>

                    {/* Logo  */}

                    <div className='text-2xl font-bold text-zinc-800 cursor-pointer' onClick={() => scrollToSection('Home')}>
                        <span>THE-</span>
                        <span className='text-teal-800 font-orbitron'>AAYUSH</span>
                    </div>


                    {/* Menu  */}

                    <div className='hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4'>
                        {
                            navMenu.map((item, index) => (
                                <button
                                    className='text-slate-500 hover:text-zinc-600 transition cursor-pointer'
                                    key={index}
                                    onClick={() => scrollToSection(item)}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>

                    {/* Buttons */}

                    <a
                        href="#"
                        className='px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300'>
                        Resume
                        <FaArrowRight className='text-gray-500 text-sm' />
                    </a>

                </div>
            </div>

        </div>
    )
}

export default NavBar