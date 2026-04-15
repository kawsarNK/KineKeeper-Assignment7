import React from 'react';
import { HiPlus } from "react-icons/hi";

const Banner = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b3b] mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <button className="bg-[#1D4D3F] hover:bg-[#163a30] text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all mb-16 shadow-lg">
                    <HiPlus className="text-lg" />
                    Add a Friend
                </button>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-[#1D4D3F] mb-2">10</h2>
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Total Friends</p>
                    </div>


                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-[#1D4D3F] mb-2">3</h2>
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">On Track</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-[#1D4D3F] mb-2">6</h2>
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Need Attention</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-[#1D4D3F] mb-2">12</h2>
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Interactions This Month</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;