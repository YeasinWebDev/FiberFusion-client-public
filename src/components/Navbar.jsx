import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../Provider/ContextProvider'
import { Tooltip } from 'react-tooltip'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { AuthContext } from '../provider/ContextProvider';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Nav() {
    const { user, LogOut, dark, setDark } = useContext(AuthContext)
    console.log(user)

    const logoutClick = () => {
        <Navigator to='/' />
        LogOut()
    }
    return (
        <div className={`navbar ${dark ? 'bg-[#28282A] text-white border-b-2 py-3' : "bg-[#e6e2e2] text-black py-3"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-[#f2f2f2] text-lg rounded-box w-52">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Home</NavLink>
                        <NavLink to={'/all-Art'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>All Art</NavLink>
                        <NavLink to={'/addCraft'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Add Craft</NavLink>
                        <NavLink to={'/myArt'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>My Art&Craft </NavLink>
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl">
                    <div className='md:w-14 w-6 flex  items-center gap-3'>
                        <span className='md:text-4xl text-xl font-semibold'>TimberCraft</span>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>Home</NavLink>
                    <NavLink to={'/all-Art'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}> All Art</NavLink>
                    <NavLink to={'/addCraft'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}> Add Craft</NavLink>
                    <NavLink to={'/myArt'} className={({ isActive }) => isActive ? "bg-[#B18B5E] p-4 rounded-xl text-white whitespace-nowrap" : "p-4 whitespace-nowrap"}>My Art&Craft </NavLink>
                </ul>
            </div>
            <div className="navbar-end ">
                <div className='md:mx-10 mx-2'>
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
                            <div className='w-10 h-10  rounded-full flex items-center gap-2'>
                                <img className='w-full h-full rounded-full object-cover' src={user?.photoURL
                                } data-tooltip-id="img" data-tooltip-content={user?.displayName} />
                            </div>
                            <button onClick={logoutClick} className="md:p-4 p-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#2a6c40] to-[#26a550]">LogOut</button>
                        </div>
                    )
                        :
                        (<div>
                            <Link to='/signin'>
                                <button className="w-full md:p-4 p-3 font-semibold text-white  rounded-xl bg-gradient-to-r from-[#B18B5E] to-[#856034]">Signin</button>
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


