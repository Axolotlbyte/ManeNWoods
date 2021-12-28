import Layout from "../components/Layout";

export default function about () {
    const background = {
        "background-image": 'url(' + '/images/about.jpeg' + ')',
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "cover",
    }
    
    return (
        <Layout background={background}>
            <div className="background h-auto pb-24 font-bold pt-32 w-full">
                <div className="w-11/12 rounded-lg mx-auto bg-slate-800 h-screen">
                    <p className="text-center text-3xl text-slate-50 py-4">ABOUT</p>
                </div>
                </div>
            <style jsx>{``}</style>
        </Layout>
    )
}