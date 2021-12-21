/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import logo from "../public/images/saph-logo.webp"

export default function Navbar() {
    return (
        <nav id="navbar" className="fixed flex z-50 justify-between w-full items-center h-22 bg-tranparent">
            <div className="p-3 cursor-pointer">
                <Image 
                    src={"/images/saph-logo.webp"}
                    alt="logo"
                    width={120}
                    height={70}
                />
            </div>
            <div>
                <button className="md:hidden px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}