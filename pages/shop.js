import Layout from "../components/Layout";
import Card from "../components/Card";
export default function shop () {
    return (
        <Layout>
            <div className="h-auto min-h-screen py-4 block text-5xl font-bold text-center pt-28 w-full">
                SHOP
                <div className="grid mt-4 gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
            <style jsx>{`

            `}</style>
        </Layout>
    )
}