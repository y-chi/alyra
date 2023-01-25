import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import HomePage from '@/components/HomePage/HomePage'
import EmptyJobs from '@/components/EmptyJobs/EmptyJobs'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Job DApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage />
    </>
  )
}
