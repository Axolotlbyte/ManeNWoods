import axios from "axios";

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
  return <div className="p-4 text-center font-bold text-3xl">{params.id} - Dummy Page blah blah blah</div>;
}