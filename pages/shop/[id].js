import { useState } from "react";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const data = [
    { id: 0, content: "content 1" },
    { id: 1, content: "content 2" },
    { id: 2, content: "content 3" },
    { id: 3, content: "content 5" },
    { id: 4, content: "content 6" },
  ];
  const posts = data;

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}

export default function Handler({ params }) {

  const [margin,setMargin] = useState(0)

  return (
    <Layout>
      <div className="w-full text-white pt-28 h-auto bg-black">
        <div className="flex flex-col md:flex-row">
          <div className=" relative w-full md:w-3/5 aspect bg-gradient-to-r from-teal-500 via-red-500 to-cyan-600">
            <div id="prod-img" className="w-full h-3/4 opacity-0"></div>
            <div
              id="cards"
              className=" h-1/4 absolute w-full bottom-0 bg-black bg-opacity-50"
            >
              <div className="w-full relative flex items-center overflow-hidden h-full">
                <div className=" h-full aspect border "></div>
                <div className=" h-full aspect border "></div>
                <button id="arrow" className="transition-all flex items-center justify-center absolute rounded-full left-4 h-12 bg-white text-black aspect">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </button>
                <button id="arrow" className="transition-all flex items-center justify-center absolute rounded-full bg-white text-black h-12 right-4 aspect">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="min-h-div relative px-4 pt-2 w-full md:w-2/5 h-auto">
            <p className="text-3xl font-bold w-full">Item Name</p>
            <span className="text-base w-full">$33.55</span>
            <p className="pt-3 text-lg w-full">item description:</p>
            <p className="text-base w-full desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              accumsan leo quis purus tempus, ut viverra dolor ultricies. Mauris
              eget nisl id nibh ullamcorper cursus et nec leo. Sed non lacinia
              ante. Cras sapien lorem, pharetra ac feugiat non, viverra a nulla.
              Praesent et turpis placerat, scelerisque ligula efficitur,
              pellentesque lorem. Quisque faucibus sed tellus non sollicitudin.
              Donec sed lacinia nisi. Curabitur eu neque id ante gravida ornare.
              Maecenas euismod rhoncus mauris, vitae dignissim libero eleifend
              rhoncus.
            </p>
            <div className="mt-4 bottom-btn h-auto w-full grid md:grid-cols-2 gap-2">
              <button className="border-2 bg-white border-white hover:text-white font-bold hover:bg-black text-black px-4 py-2">
                Buy Now
              </button>
              <button className="border-2 text-white font-bold hover:bg-white hover:text-black px-4 py-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .aspect {
          aspect-ratio: 1/1;
        }
        .aspect-abs {
          aspect-ratio: 1/0.25;
        }
        .min-h-div {
          min-height: 75vh;
        }
        .bottom-btn {
          bottom: 20%;
        }
        .desc {
          min-height: 60%;
        }
        button:hover svg{
          transform: scale(1.1);
          transition: transform 200ms ease-in-out;
        }
        #prod-img:hover + #cards {
          opacity: 0%;
          transition: opacity 250ms ease-out;
        }
      `}</style>
    </Layout>
  );
}
