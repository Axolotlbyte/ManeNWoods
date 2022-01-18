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
        <div className="grid md:grid-cols-2">
          <div className="w-full aspect bg-gradient-to-r from-teal-500 via-red-500 to-cyan-600"></div>
          <div className="w-full h-auto">
            <p className="text-3xl font-bold px-4">Item Name</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .aspect {
          aspect-ratio: 1/1;
        }
      `}</style>
    </Layout>
  );
}
