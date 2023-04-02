import Benefits from '@/components/home/Benefits'
import Hero from '@/components/home/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online QR code menu for your cafe, restaurant or bar. No ads. No equipment needed. Edit your menu online in real time. No limits for QR code scan. Free to use!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <Benefits id="benefits" />
      </main>
    </>
  )
}
