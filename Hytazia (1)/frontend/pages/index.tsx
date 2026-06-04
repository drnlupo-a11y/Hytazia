import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <div>
      <Head>
        <title>Hytazia - Serveur PvP Faction</title>
        <meta name="description" content="Hytazia - Server PvP Faction" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
