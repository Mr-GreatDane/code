import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Aboutcontact from "../components/Aboutcontact";

export default function lizwheels() {
  return (
    <div>
      <Head>
        <title>Lizwheels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <Products />
      <Aboutcontact />
    </div>
  );
}