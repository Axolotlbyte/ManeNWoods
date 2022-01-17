import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {

  return (
    <Layout home>
      <div className='h-screen w-full back-img'>
          {/* <Image
            src="/images/W&M.webp"
            layout='fill'
            objectFit='cover'
            alt="promo"
          /> */}
        </div>
        <div className='w-full h-screen'>

        </div>
        <style jsx>{`
          .back-img{
            background-image: url('/images/W&M.webp');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
        `}</style>
    </Layout>
  )
}
