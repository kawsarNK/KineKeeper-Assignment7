import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const baseLinkClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium";
    const activeClass = "bg-[#1D4D3F] text-white";
    const inactiveClass = "text-slate-500 hover:text-[#1D4D3F]";

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Timeline"
                    className={({ isActive }) => `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`}
                >

                    Timeline
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/State"
                    className={({ isActive }) => `${baseLinkClass} ${isActive ? activeClass : inactiveClass}`}
                >

                    Stats
                </NavLink>
            </li>
        </>
    )

    return (
        <div className="navbar bg-white border-b border-slate-100 px-4 md:px-8 shadow-sm">
            <div className="flex-1">
                <div className="flex items-center">
                    <span className="text-xl font-bold text-[#0D211B]">
                        Keen<span className="text-[#1D4D3F]">Keeper</span>
                    </span>
                </div>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal gap-2 p-0">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;