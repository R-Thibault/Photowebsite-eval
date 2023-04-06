import Head from "next/head";
import { Header } from "../components/header";
import { Form } from "../components/ContactForm";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-[#47555E] bg-bottom bg-cover">
      <Head>
        <title>Charles Catin - Photographie | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-full flex justify-center items-center">
        <Form />
      </main>
      <footer className="h-10 flex justify-center items-center">
        <p>Charles Catin - Photographe</p>
      </footer>
    </div>
  );
}
