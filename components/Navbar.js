/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Navbar({ home }) {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState("")
  const handleActive = () => setActive(!active);

  const handleScroll = () => {
    const height = window.innerHeight;
    if (home) {
      if (window.scrollY > height - 50) {
        setNav("bg-black")
      } else {
        setNav("bg-transparent")
      }
    } else {
      if (window.scrollY > 10) {
        setNav("bg-black")

      } else {
        setNav("bg-transparent")
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={"fixed flex z-40 justify-between w-full items-center h-22 transition-colors " + nav}
      >
        <div className="p-3 cursor-pointer">
          <Link href="/">
            <a>
              <Image
                src={"/images/saph-logo.webp"}
                alt="logo"
                width={120}
                height={70}
              />
            </a>
          </Link>
        </div>
        <div className="mr-4 flex items-center">
          <ul
            onClick={handleActive}
            className="w-full hidden lg:flex justify-center items-start z-50 pl-4 cursor-pointer"
          >
            <li className="w-full flex justify-center mx-2 text-xl hover:bg-transparent hover:text-white p-1 px-8 border-2 border-white border-collapse bg-white rounded-r-3xl rounded-l-3xl text-black font-semibold ">
              <Link className="w-full" href="/shop">
                <a>SHOP</a>
              </Link>
            </li>
            <li className="w-full text-xl p-1 px-6 mx-2 hover:bg-slate-400 border-collapse text-white font-semibold hover:border-none rounded-r-3xl rounded-l-3xl">
              <Link className="w-full" href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="w-full text-xl p-1 px-6 mx-2 hover:bg-slate-400 border-collapse text-white font-semibold hover:border-none rounded-r-3xl rounded-l-3xl">
              <Link className="w-full" href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="w-full text-xl p-1 px-6 mx-2 hover:bg-slate-400 border-collapse text-white font-semibold hover:border-none rounded-r-3xl rounded-l-3xl">
              <Link className="w-full" href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <button
            className={
              "transition-all w-10 flex items-center justify-center p-1.5 hover:text-black rounded-full hover:bg-slate-300 text-white h-10"
            }
            title="wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.7}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            className={
              "transition-all w-10 mx-2 flex items-center justify-center p-1.5 hover:text-black rounded-full hover:bg-slate-300 text-white h-10"
            }
            title="shopping cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi h-10 w-10 bi-handbag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
            </svg>
          </button>
          <button
            className={"md:hidden transition-all" + (active ? " hidden" : "")}
            onClick={handleActive}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex">
        <div
          onClick={handleActive}
          className={
            "fixed lg:hidden h-screen bg-black bg-opacity-30 z-50 w-full" +
            (active ? "" : " hidden")
          }
        ></div>
        <Sidebar handleActive={handleActive} active={active} />
      </div>
    </>
  );
}
