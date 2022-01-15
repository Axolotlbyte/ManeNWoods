import Layout from "../../components/Layout";

export default function blog () {
    return (
        <Layout>
            <div className="h-screen bg-gradient-to-tr from-cyan-500 via-red-500 to-teal-500 pt-28 text-center text-5xl font-bold w-full">
                <div className="w-11/12 h-5/6 mx-auto rounded-2xl bg-black"></div>
            </div>
            <div className="h-auto w-full">
                <p className="text-center grid py-5">
                    <span className="font-extrabold text-2xl lg:text-5xl pt-6 ">FROM MANE & WOODS</span>
                    <span className="px-4 mt-1 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </p>
                <hr className="w-10/12 lg:w-4/5 mx-auto bg-gradient-to-r from-red-700 to-cyan-700"/>
                <div className="w-11/12 gap-4 mx-auto grid md:grid-cols-3 py-4">
                    <div className="overflow-hidden w-full aspect rounded-xl border hover:shadow-lg shadow-gray-400">
                        <div className="w-full h-2/5 bg-gradient-to-r from-teal-700 to-cyan-600"></div>
                    </div>
                    <div className="overflow-hidden w-full aspect rounded-xl border hover:shadow-lg shadow-gray-400">
                        <div className="w-full h-2/5 bg-gradient-to-r from-green-700 to-lime-600"></div>
                    </div>
                    <div className="overflow-hidden w-full aspect rounded-xl border hover:shadow-lg shadow-gray-400">
                        <div className="w-full h-2/5 bg-gradient-to-r from-red-700 to-orange-600"></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .aspect{
                    aspect-ratio: 1/1.3
                }
            `}</style>
        </Layout>
    )
}