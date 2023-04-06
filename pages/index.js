import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/Footer";

export default function Home({index}) {
  return (
    <div className="h-screen flex flex-col bg-[url('/background/bg1.jpg')] bg-center  lg:bg-top bg-cover bg-no-repeat">
      <Head>
        <title>Charles Catin - Photographie | Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed left-0 top-0 w-full h-full z-10 bg-gradient-to-t from-stone-900"></div>

      <Header ref={ index}/>
      <main className="h-full flex md:grid md:grid-cols-2 justify-center items-center z-20">
        <h1 className="lg:col-start-2 col-span-2 text-center text-4xl mx-auto">
          Charles Catin - Photographe
        </h1>
      </main>
      <Footer />
    </div>
  );
}
