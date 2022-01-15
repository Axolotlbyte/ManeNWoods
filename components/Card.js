export default function Card(props) {
  return (
    <>
      <div className="relative cursor-pointer bg-red-800 overflow-hidden rounded-3xl card h-card">
        <button className="absolute flex items-center justify-center text-white h-14 w-14 bg-slate-900 right-2 top-2 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 right-2 bottom-2 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <div className="w-full h-full"></div>

        <div id="prod-name" className="w-full cursor-pointer bg-transparent h-auto bg-slate-900 bottom-0 absolute">
        <p className="text-white text-5xl lg:text-4xl text-left px-4">Product Name</p> 
        <p className="text-white text-2xl font-light text-right px-6 pb-2">$33.55</p>
        </div>
      </div>
      <style jsx>{`
        .card {
          aspect-ratio: 1 / 1;
        }
        .card:hover.card:hover button {
          background-color: #e3176c;
        }
        button:hover svg{
          transform: scale(1.1);
          transition: transform 200ms;
        }
        button:active svg{
          transform: scale(1);
          transition: transform 200ms;
        }
      `}</style>
    </>
  );
}
