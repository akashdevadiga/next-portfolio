import Header from "@/components/header/Header";
import styles from "./page.module.scss";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Qualification from "@/components/qualification/Qualification";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/scrollup/ScrollUp";
// import Experience from "@/components/experience/Experience";
// import Services from "@/components/services/Services";
// import Testimonials from "@/components/testimonials/Testimonials";

//import dynamic from 'next/dynamic';
// const Header = dynamic(() => import('@/components/header/Header'), {
//   loading: () => <p>Loading...</p>,
// })
//import { lazy } from 'react';
//const Header = lazy(() => import('@/components/header/Header'));

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        {/* <Experience />
        <Services />
        <Testimonials /> */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
