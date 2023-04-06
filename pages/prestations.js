import Head from "next/head";
import { Header } from "../components/header";
import { createClient } from "contentful";
import PrestationsCard from "../components/PrestationsCard";
import { Footer } from "../components/Footer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: "prestations" });
  return {
    props: {
      prestations: res.items,
    },
  };
}

export default function Home({ prestations }) {
  return (
    <div className="min-h-screen lg:h-full flex flex-col bg-[#47555E]  bg-top bg-fixed bg-no-repeat">
      <Head>
        <title>Charles Catin - Photographie | Prestations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed left-0 top-0 w-full h-full z-10 bg-gradient-to-t from-stone-700 to-[#47555E]"></div>
      <Header />
      <main className="relative grow z-20 flex justify-center items-center ">
        <div className=" flex flex-col items-center m-4 space-y-6">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-cyan-200">
            Prestations et Tarifs
          </h1>
          <div className="h-full grid lg:grid-cols-2 gap-16 mb:gap-8">
            {prestations.map((prestation) => (
              <PrestationsCard
                className="h-full"
                key={prestation.sys.id}
                prestation={prestation}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
