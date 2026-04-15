import { NavLink } from 'react-router';
import { HiHome } from "react-icons/hi";

const ErrorPage = () => {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
            <div className="text-center">
                <div className="relative inline-block mb-4">
                    <h1 className="text-9xl font-black text-[#1D4D3F] opacity-10">404</h1>
                    <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#1D4D3F]">
                        Page Not Found
                    </p>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-6">
                    Oops! This connection doesn't exist.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 bg-[#1D4D3F] hover:bg-[#163a30] text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md"
                    >
                        <HiHome className="text-xl" />
                        Back to Home
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;