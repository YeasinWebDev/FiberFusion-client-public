import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../Provider/ContextProvider'
import { Tooltip } from 'react-tooltip'
import {gsap} from 'gsap'
import { useGSAP } from'@gsap/react'
import { AuthContext } from '../provider/ContextProvider';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Nav({key}) {
    const { user, LogOut, dark, setDark } = useContext(AuthContext)
    
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.navbar', { y: '-100%', duration: 0.8, ease: 'power4.out' })
        tl.from('.title', { y: '-100%', duration: 0.8, ease: 'power4.out' })
        tl.from('#link', { y: '-100%', duration: 0.8, ease: 'power4.out',stagger:0.3 })
        tl.from('.mode', { y: '-123%', duration: 0.6, ease: 'power4.out' })
        tl.from('.img', { opacity:0, duration: 0.4, ease: 'power4.out' })
        tl.from('button', { opacity:0, duration: 0.5, ease: 'power4.out' })
    });

    const logoutClick = () => {
        <Navigator to='/' />
        LogOut()
    }
    return (
        <div className={`navbar z-50 ${dark ? 'bg-[#120d0d] text-white  py-3' : "bg-[#e6e2e2] text-black py-3"} fixed w-full`}>
            <div className="navbar-start z-50">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#E6E2E2] text-lg rounded-box w-52">
                        <NavLink  to={'/'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap" : "p-[14px] whitespace-nowrap"}>Home</NavLink>
                        <NavLink  to={'/all-Art'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap" : "p-[14px] whitespace-nowrap"}>All Art</NavLink>
                        <NavLink  to={'/addCraft'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap" : "p-[14px] whitespace-nowrap"}>Add Craft</NavLink>
                        <NavLink  to={'/myArt'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap" : "p-[14px] whitespace-nowrap"}>My Art&Craft </NavLink>
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl">
                    <div className='md:w-fit flex  items-center gap-3 overflow-hidden'>
                       <Link to={'/'}> <span className='title md:text-4xl text-xl font-semibold'>FiberFusion</span></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="nav menu menu-horizontal px-1 font-semibold text-lg flex">
                    <div className='overflow-hidden'>
                        <NavLink  id='link' to={'/'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap inline-block" : "p-[14px] whitespace-nowrap inline-block"}>Home</NavLink>
                    </div>
                    <div className='overflow-hidden'>
                        <NavLink id='link' to={'/all-Art'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap inline-block" : "p-[14px] whitespace-nowrap inline-block"}> All Art</NavLink>
                    </div>
                    <div className='overflow-hidden'>
                        <NavLink id='link' to={'/addCraft'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap inline-block" : "p-[14px] whitespace-nowrap inline-block"}> Add Craft</NavLink>
                    </div>
                    <div className='overflow-hidden'>
                        <NavLink id='link' to={'/myArt'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-[14px] rounded-xl text-white whitespace-nowrap inline-block" : "p-[14px] whitespace-nowrap inline-block"}>My Art&Craft </NavLink>
                    </div>
                </ul>
            </div>
            <div className="navbar-end overflow-hidden">
                <div className='md:mx-10 mx-2 mode'>
                    {dark ?
                        <div onClick={() => setDark(false)}>
                            <MdOutlineDarkMode size={30} />
                        </div> :
                        <div onClick={() => setDark(true)}>
                            <MdDarkMode size={30} />
                        </div>}
                </div>
                {
                    user ? (
                        <div className='flex items-center justify-center gap-3'>
                            <div className=' w-10 h-10 rounded-full gap-2'>
                                <img className='img w-full h-full rounded-full object-cover inline-block' src={user?.photoURL
                                } data-tooltip-id="img" data-tooltip-content={user?.displayName} />
                            </div>
                            <button onClick={logoutClick} className="md:p-[14px] p-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#B18B5E] to-[#856034]">LogOut</button>
                        </div>
                    )
                        :
                        (<div>
                            <Link to='/signin'>
                                <button className="w-full md:p-[14px] p-3 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#B18B5E] to-[#856034]">Signin</button>
                            </Link>
                        </div>)
                }
                <Tooltip
                    id="img"
                />
            </div>
        </div>
    )
}

export default Nav


