// Next
import Head from 'next/head'

// Components
import { ToplistClientSide } from '@/component/Toplist/client-side'
import { ToplistServerSide } from '@/component/Toplist/server-side'

// Constants
import { API_BASE } from '@/constants'
import { APIResponse } from '@/types'

export async function getServerSideProps() {
  const res = await fetch(`${API_BASE}/prod/results`)
  const json = await res.json()
  const body = JSON.parse(json.body)

  return { props: { data: body } }
}

export default function Home({ data }: { data: APIResponse }) {
  return (
    <>
      <Head>
        <title>XLM Toplist</title>
        <meta name="description" content="XLM Homework Assignment" />
      </Head>
      <main className="container">
        <h2 className='py-5'>Client-side rendered</h2>
        <ToplistClientSide />
        <h2 className='py-5'>Server-side rendered</h2>
        <ToplistServerSide data={data}/>      
      </main>
    </>
  )
}
