import React from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#1D4D3F] text-white py-8 px-6 mt-10 pt-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Keen<span className='font-semibold'>Keeper</span></h2>

                <p className="text-slate-300 text-center max-w-xl md:max-w-2xl mb-10 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center gap-6 mb-8">
                    <h3 className="text-xl font-semibold">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1D4D3F] hover:bg-slate-200 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1D4D3F] hover:bg-slate-200 transition-colors">
                            <FaFacebookF size={22} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1D4D3F] hover:bg-slate-200 transition-colors">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>


                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;