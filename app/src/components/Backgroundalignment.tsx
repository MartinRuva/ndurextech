"use client";
import BackgroundStyle from "./Background";

export default function Herosectionalignment() {
    return (
        <header className="relative w-full h-[15vh] flex items-center justify-center md:justify-start overflow-hidden">

            {/* Background */}
            <BackgroundStyle />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Navbar Content */}
            <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-start md:justify-start px-6 md:px-12">

                <h1 className="montserrat-bold text-3xl md:text-4xl text-white tracking-tight drop-shadow-md">
                    Ndurex Technical Services
                </h1>
            </div>

        </header>
    );
}