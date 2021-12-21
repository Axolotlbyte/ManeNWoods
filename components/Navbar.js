/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"

export default function Navbar() {

    const [active, setActive] = useState(false)

    const handleActive = () => setActive(!active)
    
    
    const handleScroll = () => {
        const height = window.innerHeight
        if (window.scrollY > height - 50) {
          document.getElementById("navbar").className = "fixed flex z-40 justify-between w-full items-center h-22 bg-black transition-colors";
        } else {
          document.getElementById("navbar").className = "fixed flex z-40 justify-between w-full items-center h-22 bg-tranparent tranisition-colors";
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    },[])

    return (
        <>
        <nav id="navbar" className="fixed flex z-40 justify-between w-full items-center h-22 bg-tranparent transition-colors">
            <div className="p-3 cursor-pointer">
                <Image 
                    src={"/images/saph-logo.webp"}
                    alt="logo"
                    width={120}
                    height={70}
                />
            </div>
            <div className="mr-4">
                <button className={"md:hidden transition-all" + ( active ? " hidden" : "")} onClick={handleActive}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul onClick={handleActive} className="w-full hidden lg:flex justify-center z-50 pl-4 cursor-pointer">
                    <li className="w-full flex justify-center text-xl p-1 px-6  border-collapse bg-white rounded-r-2xl rounded-l-2xl text-black font-semibold hover:border-none ">
                        <Link className="w-full" href="/">
                            <a>SHOP</a>
                        </Link>
                    </li>
                    <li className="w-full text-xl p-1 px-6  border-collapse text-white font-semibold hover:border-none ">
                        <Link className="w-full" href="/">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li className="w-full text-xl p-1 px-6  border-collapse text-white font-semibold hover:border-none ">
                        <Link className="w-full" href="/">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="w-full text-xl p-1 px-6  border-collapse text-white font-semibold hover:border-none ">
                        <Link className="w-full" href="/">
                            <a>Contact</a>
                        </Link>
                    </li>
            </ul>
            </div>
        </nav>
        <div className="flex">
            <div onClick={handleActive} className={"fixed lg:hidden h-screen bg-black bg-opacity-30 z-50 w-full" + (active ? "" : " hidden")}></div>
            <Sidebar handleActive={handleActive} active={active}/>
        </div>
        </>
    )
}