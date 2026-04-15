import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-white border-2 border-amber-50 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><a >Link2</a></li>
                    <li><a >Link3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;