
import Image from "next/image";
import styles from './Home.module.css'
import Banner from "@/components/Home/Banner/Banner";
import { Stats } from "@/components/Home/Stats/Stats";
import { Feature } from "@/components/Home/Feature/Feature";
import Services from "@/components/Home/Services/Services";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Home/Footer/Footer";
import Cards from "@/components/Home/cards/Cards";
import Navbar from "@/components/Home/navbar/Navbar";


export default function Home() {
  return (
    <main className="text-[#0F172A]">
      <div className={`${styles.gradient_bg}`}>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Stats></Stats>
      <Feature></Feature>
      <Services></Services>
      <Cards></Cards>
      <Contact></Contact>
      <Footer></Footer>

    </main>
  );
}
