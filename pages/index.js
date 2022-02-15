import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <div className="h-screen w-full back-img">
        <Image
          src="/images/W&M.webp"
          layout="fill"
          objectFit="cover"
          alt="promo"
        />
        <div
          style={{ zIndex: 39 }}
          className="top-52 sticky coming-soon left-10 text-white h-3/5 w-3/5 md:w-2/4 lg:w-1/4 "
        >
          <p className="text-5xl font-bold text-red-600">Coming soon</p>
          <p className="pt-4 text-lg">
            lorem ipsum dolor si amet. lorem ipsum dolor si amet.lorem ipsum
            dolor si amet.lorem ipsum dolor si amet.lorem ipsum dolor si
            amet.lorem ipsum dolor si amet.lorem ipsum dolor si amet.
          </p>
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center sec-img screen-80">
        <div className="sticky top-24 w-3/5 h-4/5 md:w-2/5 flex-col md:flex-row items-center justify-center">
          <p className="text-6xl text-white">
            <span className="text-red-500 text-xl">2022</span>
            <br />
            Mane <br /> & <br /> Woods <br /> Collection
          </p>
          <button className="flex md:hidden items-center ring-2 hover:shadow-lg hover:text-red-600 transition-all hover:shadow-red-500 ring-red-600 bg-black bg-opacity-50 justify-center text-white mx-auto mt-12 rounded-l-full rounded-r-full p-2 px-5 text-xl">
            SHOP
          </button>
        </div>
        <div className="h-auto hidden md:sticky top-24 md:flex md:h-full md:w-2/5 items-center justify-center">
          <button className="flex items-center ring-2 hover:shadow-lg hover:text-red-600 transition-all hover:shadow-red-500 ring-red-600 bg-black bg-opacity-50 justify-center text-white mx-auto mt-12 rounded-l-full rounded-r-full p-2 px-5 text-xl">
            SHOP
          </button>
        </div>
      </div>
      <div className="screen-60 w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-60vh bg-black"></div>
        <div className="md:w-1/2 w-full flex items-center justify-center h-60vh screen-60 bg-gradient-to-br from-red-600 via-pink-500 to-red-500 ">
          <div className=" w-11/12 h-5/6 bg-black bg-opacity-30 rounded-xl ">

          </div>
        </div>
      </div>
      <style jsx>{`
        .screen-80 {
          height: 80vh;
        }
        .screen-60{
          min-height: 65vh
        }
        .h-60vh{
          height: 60vh
        }
        .back-img {
          background-image: url("/images/W&M.webp");
          background-repeat: no-repeat;
          background-position: center;
        }
        .sec-img {
          background-image: url("/images/mountain.jpg");
          background-repeat: no-repeat;
          background-position: top;
        }
        .coming-soon{
          animation: opacity 1.5s
        }
        @keyframes opacity{
          from{
            opacity: 0%;
            left: 60px;
          }
          to{
            opacity: 100%;
            left: 40px;
          }
        }
      `}</style>
    </Layout>
  );
}
