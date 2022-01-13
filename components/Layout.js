import Navbar from "./Navbar"
import Image from "next/image"
import Head from "next/head"
export default function Layout ({children, home, background}) {
    return (
    <div style={(background ? {backgroundColor: background} : {backgroundColor: "white"}) }>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar home={home}/>
        <main className="w-full">
            {children}
        </main>
        <footer className="flex flex-col">
            <div className="spacer bottom-0"></div>
            <p className="flex text-slate-50 items-center justify-center w-full text-center h-10 bg-black">
                All Rights Reserved{' '}
                <span className="font-bold">
                <Image src="/images/saph-logo.webp" 
                alt="Vercel Logo" 
                width={30} 
                height={16}
                />
                Mane & Woods
                </span>
            </p>
      </footer>
      <style jsx>{`
        .spacer{
            aspect-ratio: 900/100;
            width: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url('/wave/Vector.svg');
        }
      `}</style>
    </div>
    )
}