import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Roadbikes from "../components/Roadbikes";
import Aboutcontact from "../components/Aboutcontact";

export default function roadbikes() {
  return (
    <div>
      <Head>
        <title>Lizwheels | Road Bikes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <Roadbikes />
      <Aboutcontact />
    </div>
  );
}
