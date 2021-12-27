import Navbar from "./Navbar"
import Image from "next/image"
import Head from "next/head"
export default function Layout ({children, home}) {
    return (
    <div className="">
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar home={home}/>
        <main className="w-full">
            {children}
        </main>

        <footer className="flex items-center justify-center w-full text-center h-10 border-t-2 border-gray-700">
            <p>
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
    </div>
    )
}