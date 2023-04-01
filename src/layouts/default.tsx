import Navbar from '@/components/app/Navbar'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Lookmenu - Welcome!</title>
      </Head>
      <main className="relative">
        <Navbar />
        {children}
      </main>
    </>
  )
}
