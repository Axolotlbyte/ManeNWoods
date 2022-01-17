import LatestPost from "../../components/LatestPost";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import axios from "axios";
import Image from "next/image";
export async function getStaticProps() {
  const data = [
    { id: 0, content: "content 1" },
    { id: 1, content: "content 2" },
    { id: 2, content: "content 3" },
    { id: 3, content: "content 5" },
    { id: 4, content: "content 6" },
  ];

  return {
    props: {
      data,
    },
  };
}

export default function blog({ data }) {
  const fun = async () => {
    const res = await axios.get("/api/blog");
    console.log(res.data);
  };
  fun();
  return (
    <Layout>
      <div className="h-screen bg-gradient-to-tr from-cyan-500 via-red-500 to-teal-500 pt-28 text-center text-5xl font-bold w-full">
        <div className="relative flex items-center overflow-hidden w-11/12 text-white h95 mx-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 ">
          <div className="w-full h-full relative">
            <Image
              src="/images/blog-mainpage.jpg"
              layout="fill"
              objectFit="cover"
              alt="promo"
            />
          </div>
          <div className="absolute lg:w-1/2 text-left left-2 lg:left-4">
            INSPIRE THE WORLD
            <br />
            WITH THE POWER OF YOUR IMAGINATION.
          </div>
        </div>
      </div>
      <div className="h-auto w-full">
        <p className="text-center grid py-5">
          <span className="font-extrabold text-2xl lg:text-5xl pt-6 ">
            FROM MANE & WOODS
          </span>
          <span className="px-4 mt-1 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </p>
        <hr className="w-10/12 lg:w-4/5 mx-auto bg-gradient-to-r from-red-700 to-cyan-700" />
        <LatestPost />
        <div className="w-11/12 gap-4 mx-auto grid md:grid-cols-3 py-4 pb-12">
          {data.map((item) => (
            <PostCard key={item.id} id={item.id.toString()} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .h95 {
          height: 95%;
        }
        .bg-img {
          background-image: url("/images/blog-mainpage.jpg");
          background-repeat: no-repeat;
        }
      `}</style>
    </Layout>
  );
}
