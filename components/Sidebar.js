import Link from "next/link";

export default function Sidebar({ active, handleActive }) {
  return (
    <div
      className={
        "right-0 fixed z-50 lg:hidden bg-black h-full bg-opacity-75 md:w-1/3 w-1/2 " +
        (active ? "sidebar active" : "sidebar")
      }
    >
      <div className="flex justify-between">
        <button className="p-4" onClick={handleActive}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          onClick={handleActive}
          className={
            "transition-all w-10 m-4 lg:mx-2 flex items-center justify-center p-1.5 rounded-full bg-gradient-to-tl from-cyan-500 via-red-500 to-sky-600 h-10 border-2 border-white"
          }
          title="user"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-person-circle h-8 w-8"
            viewBox="0 0 16 16"
          >
            <path className="text-white" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path className="text-white" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </button>
      </div>
      <div className="w-full h-auto text-white">
        <ul className="w-full flex flex-col justify-center pl-4 pt-2 cursor-pointer">
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapse text-white font-semibold hover:border-none border-white"
          >
            <Link className="w-full" href="/shop">
              <a className="w-full">Shop</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapse text-white font-semibold hover:border-none border-white"
          >
            <Link className="w-full" href="/blog">
              <a className="w-full">Blog</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapsetext-white font-semibold hover:border-none border-white"
          >
            <Link className="w-full" href="/about">
              <a className="w-full">About</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapse text-white font-semibold hover:border-none border-white"
          >
            <Link className="w-full" href="/contact">
              <a className="w-full">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .sidebar {
          right: -100%;
          transition: 300ms;
        }
        .sidebar.active {
          right: 0%;
          transition: 700ms;
        }
        li a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
