import Link from "next/link";

export default function Sidebar({ active, handleActive, handleToggle }) {
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
            className="h-9 w-9 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-auto text-white">
        <ul className="w-full flex flex-col justify-center pl-4 pt-2 cursor-pointer">
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapse text-gray-600 font-bold hover:border-none border-red-600"
          >
            <Link className="w-full" href="/shop">
              <a className="w-full">All</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapse text-gray-600 font-bold hover:border-none border-red-600"
          >
            <Link className="w-full" href="/blog">
              <a className="w-full">Shampoo</a>
            </Link>
          </li>
          <li
            onClick={handleActive}
            className="w-full my-2 text-xl p-2 border-l-2 border-collapse text-gray-600 font-bold hover:border-none border-red-600"
          >
            <Link className="w-full" href="/about">
              <a className="w-full">Oil</a>
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
