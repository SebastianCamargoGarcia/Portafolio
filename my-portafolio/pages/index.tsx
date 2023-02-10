import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'  
import Main  from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Client | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
    <Navbar/>
    <Main/> 
    <About/>
    <Skills/>
    </div>
  )
}

export default Home;

