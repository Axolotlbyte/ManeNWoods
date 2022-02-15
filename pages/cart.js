import Layout from "../components/Layout";

export default function cart() {
  return (
    <Layout background={"black"}>
      <div className="flex flex-col relative md:flex-row min-h-screen mx-auto text-white lg:w-11/12 xl:w-4/5 pt-28">
        <div className=" w-full md:w-2/3 md:border-r md:border-gray-800">
          <div className="w-11/12 mx-auto h-auto">
            <p className="font-semibold text-lg">Shopping Cart:</p>
          </div>
        </div>
        <div className=" w-full md:w-auto absolute md:relative bottom-4">
          <div className="w-11/12 mx-auto h-auto sticky top-24">
            <p className="font-semibold text-lg">Cart Total:</p>
            <button className="bg-red-600 p-2 px-4"><nobr>Proceed to checkout</nobr></button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
