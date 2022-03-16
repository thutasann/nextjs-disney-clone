import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Brands from '../components/Brands';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MoviesCollection from '../components/MoviesCollection';
import Slider from '../components/Slider';
import { useSession, getSession } from 'next-auth/react';

const Home: NextPage = () => {


  const { data: session } = useSession();

  return (
    <div>

      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      {
        !session ? (
          <Hero/>
        ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider/>
          <Brands/>
          <MoviesCollection/>
        </main>
        )
      }

    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props:{
      session,
    },
  };
  
}


export default Home
