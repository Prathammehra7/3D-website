import React from 'react'
import { Link } from "react-router-dom"
import { logo } from "../assets"

const Navbar = () => {
    return (
        <nav className={`h-20 flex justify-center`}>
            <div className={`w-full flex justify-between items-center max-w-7xl mx-auto `}>
                <Link to='/' className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                    }}

                >
                    <img src={logo} alt="" className='w-9 h-9 object-contain' />
                    <p className='text-white flex'>SUBSCRIBE TO CodeModeOn </p>
                </Link>
                <ul className='list-none sm:flex gap-10 '>
                    <li className={`hover:text-red-600`}><a href="/"> Home</a></li>
                    <li className={`hover:text-red-600`}><a href="/About"> About</a></li>
                    <li className={`hover:text-red-600`}><a href="/Home"> Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar