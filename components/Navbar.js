/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar({ home, handleToggle }) {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState("");
  const handleActive = () => setActive(!active);

  const handleScroll = () => {
    const height = window.innerHeight;
    if (home) {
      if (window.scrollY > height - 50) {
        setNav("bg-black");
      } else {
        setNav("bg-transparent");
      }
    } else {
      if (window.scrollY > 10) {
        setNav("bg-black");
      } else {
        setNav("bg-transparent");
      }
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  // }, []);

  return (
    <>
      <nav
        id="navbar"
        className={
          "fixed flex backdrop-blur-lg z-40 justify-between w-full items-center h-22 transition-colors " +
          nav
        }
      >
        <div className="p-3 cursor-pointer w-fit flex items-center justify-center ">
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
          <Link href="/shop">
            <a className="hidden md:flex ml-3 font-semibold hover:underline underline-offset-2 text-lg text-gray-600">
              All
            </a>
          </Link>
          <Link href="/shop">
            <a className="hidden md:flex ml-3 font-semibold hover:underline underline-offset-2 text-lg text-gray-600">
              Shampoo
            </a>
          </Link>
          <Link href="/shop">
            <a className="hidden md:flex ml-3 font-semibold hover:underline underline-offset-2 text-lg text-gray-600">
              Oil
            </a>
          </Link>
        </div>
        <div className="border w-2/5 hidden border-gray-600 rounded-l-full p-1 text-gray-600 rounded-r-full pl-4 pr-3 md:flex items-center justify-center">
          <input
            type={"search"}
            className="w-full outline-0 text-base lg:text-lg bg-transparent"
            placeholder="Search Products..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="mr-2 flex items-center">
          <Link href={"/cart"} passHref>
          <button
            className={
              "transition-all w-10  flex items-center justify-center p-1 hover:text-black rounded-full hover:bg-slate-300 text-white h-10"
            }
            title="shopping cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi h-6 w-6 bi-handbag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
            </svg>
          </button>
          </Link>
          <button
            className={
              "transition-all w-9 mr-2 lg:mx-2 flex items-center justify-center p-1 rounded-full bg-gradient-to-tl from-red-500 via-orange-500 to-pink-600 h-9 ml-1 hover:border-2 border-white"
            }
            title="user"
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-circle h-7 w-7"
              viewBox="0 0 16 16"
            >
              <path
                className="text-white"
                d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
              <path
                className="text-white"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </button>
          <button
            className={"md:hidden transition-all" + (active ? " hidden" : "")}
            onClick={handleActive}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-10 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              preserveAspectRatio="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                preserveAspectRatio="none"
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
        <Sidebar
          handleActive={handleActive}
          handleToggle={handleToggle}
          active={active}
        />
      </div>
      {/* <div className={"fixed mt-24 h-auto w-full md:hidden flex items-center justify-center " + nav}>
      <div className="border-2 my-1 bg-black bg-opacity-50 w-11/12 mx-auto rounded-l-full p-1 text-white rounded-r-full pl-4 pr-3 flex items-center justify-center">
          <input type={"search"} className="w-full outline-0 text-lg lg:text-xl bg-transparent" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div> */}
    </>
  );
}
