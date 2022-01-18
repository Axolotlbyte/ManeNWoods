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

export default function handler({ params }) {
  return (
    <Layout>
      <div className="w-full text-white pt-28 h-auto bg-black">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-3/5 aspect bg-gradient-to-r from-teal-500 via-red-500 to-cyan-600">
            <div className="flex absolute overflow-x-scroll aspect-abs w-full bottom-0 bg-black bg-opacity-50">
              <div className=" w-1/4 aspect border "></div>
              <div className=" w-1/4 aspect border "></div>
              <div className=" w-1/4 aspect border "></div>
              <div className=" w-1/4 aspect border "></div>
              <div className=" w-1/4 aspect border "></div>
            </div>
          </div>
          <div className="min-h-div relative px-4 pt-2 w-full md:w-2/5 h-auto">
            <p className="text-3xl font-bold w-full">Item Name</p>
            <span className="text-base w-full">$33.55</span>
            <p className="pt-3 text-lg w-full">item description:</p>
            <p className="text-base w-full">
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
            <div className="absolute bottom-btn h-auto w-full">
              <button className="border-2 bg-white border-white mx-5 hover:text-white font-bold hover:bg-black text-black px-4 py-2">Buy Now</button>
              <button className="border-2 bg-white hover:text-white font-bold hover:bg-black text-black px-4 py-2">Add to cart</button>
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
        .min-h-div{
          min-height: 75vh
        }
        .bottom-btn{
          bottom: 20%
        }
      `}</style>
    </Layout>
  );
}
