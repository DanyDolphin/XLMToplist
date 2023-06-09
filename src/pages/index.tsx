// Next
import Head from 'next/head'

// Components
import { ToplistClientSide } from '@/component/Toplist/client-side'
import { ToplistServerSide } from '@/component/Toplist/server-side'

export default function Home() {
  return (
    <>
      <Head>
        <title>XLM Toplist</title>
        <meta name="description" content="XLM Homework Assignment" />
      </Head>
      <main className="container">
        <ToplistClientSide />
        <ToplistServerSide />      
      </main>
    </>
  )
}
