import { useState } from "react";
import Card from "../../components/Card";
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
  const [margin, setMargin] = useState(0);

  return (
    <Layout background={"black"}>
      <div className="w-full text-white pt-28 h-auto bg-black">
        <div className="flex flex-col md:flex-row">
          <div className="h-auto w-full md:w-3/5">
          <div className="flex overflow-hidden items-center relative w-full  aspect bg-gradient-to-r from-teal-500 via-red-500 to-cyan-600">
            <button
              id="arrow"
              className="transition-all active:-left-5 flex items-center justify-center absolute rounded-r-full -left-4 h-16 bg-white text-black aspect"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-8 w-8 bi bi-chevron-compact-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                />
              </svg>
            </button>
            <button
              id="arrow"
              className="transition-all active:-right-5 flex items-center justify-center absolute rounded-l-full bg-white text-black h-16 -right-4 aspect"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi h-8 w-8 bi-chevron-compact-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
              </svg>
            </button>
            <div className="absolute w-full bottom-0 gap-4 p-4 bg-transparent bg-opacity-0 flex justify-center items-center">
              <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></button>
              <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black"></button>
              <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></button>
              <button className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></button>
            </div>
          </div>
          </div>
          <div className="min-h-div relative px-4 pt-2 w-full md:w-2/5 h-auto">
            <p className="text-3xl font-bold w-full">Item Name</p>
            <span className="text-2xl font-light w-full">$33.55</span>
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
      <hr className="my-4"/>
      <div className="bg-black mb-8 ">
        <p className="text-3xl p-4 font-bold bg-black text-white">
          Related Products
        </p>
        <div className="grid px-4 grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 xl:gap-6">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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
        button:hover svg {
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
