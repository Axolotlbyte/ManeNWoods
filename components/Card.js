export default function Card(props) {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg card bg-slate-100 h-card">
        <button className="absolute flex items-center justify-center text-white h-14 w-14 bg-slate-900 right-0 rounded-bl-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 right-1 bottom-1 absolute"
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
            className="h-10 w-10 absolute"
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
        <div id="prod-name" className="w-full h-16 bg-slate-900 bottom-0 absolute">
            <p className="text-white text-3xl">Product Name</p>
            <p className="text-white text-lg">$33.55</p>
        </div>
      </div>
      <style jsx>{`
        .card {
          aspect-ratio: 1 / 1.195;
        }
        .card:hover #prod-name,.card:hover button {
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
