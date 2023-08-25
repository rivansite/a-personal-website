import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Under from "@/components/Under";

export default function Home() {
  return (
    <main className="bg-stone-100">
      {/* <Header />
      <Hero />
      <Footer /> */}
      <Under />
    </main>
  );
}
