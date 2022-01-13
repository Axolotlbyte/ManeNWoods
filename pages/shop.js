import Layout from "../components/Layout";
import Card from "../components/Card";
export default function shop () {
    return (
        <Layout background={"black"}>
            <div className="h-auto bg-black min-h-screen py-4 block text-5xl font-bold text-center pt-28 w-full">
                <div className="grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3 px-6 lg:w-3/4 mx-auto">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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