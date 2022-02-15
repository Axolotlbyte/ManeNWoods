import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Link from "next/link";

export default function shop() {
  return (
    <Layout backgroun d={"black"}>
      <div className="h-auto bg-black min-h-screen py-6 block text-5xl font-bold text-center pt-28 w-full">
        <div></div>
        <div className="grid mt-4 grid-cols-2 gap-4 md:grid-cols-3 px-6 md:w-2/3 mx-auto">
          <Link href={"/shop/2"}>
            <a>
              <Card />
            </a>
          </Link>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <p>Relevance</p>
          <p>Price: Low to high</p>
          <p>Price: High to low</p>
        </div>
      </div>
      <style jsx>{``}</style>
    </Layout>
  );
}
