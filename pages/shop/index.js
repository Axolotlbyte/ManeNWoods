import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Link from "next/link";

export default function shop() {
  return (
    <Layout backgroun d={"black"}>
      <div className="h-auto bg-black min-h-screen py-4 block text-5xl font-bold text-center pt-28 w-full">
        <div className="grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3 px-6 lg:w-3/4 mx-auto">
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
          <Card />
        </div>
      </div>
      <style jsx>{``}</style>
    </Layout>
  );
}
