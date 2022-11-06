import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LeftMenu from "../components/LeftMenu";
import SocialIcons from "../components/SocialIcons";
import AboutSection from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import StickyMail from "../components/StickyMail";
import Cursor from "../components/common/CustomCursor";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Prj.Portfolio</title>
      </Head>
      {/* Background shades */}
      {/* <div className="color-layout layout-purple"></div>
      <div className="color-layout layout-blue"></div> */}


      {/* Custom cursor */}
      <Cursor />



      {/* Home section */}
      <section id="home">
        {/* Top Navbar */}
        <Header />
        {/* Left Navbar */}
        <LeftMenu />

        <HeroSection />


        {/* Social IconBar  */}
        <SocialIcons />
      </section>


      {/* Mail sticky */}
      <StickyMail />

      {/* About section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>


      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact">
        <Contact />
      </section>

      {/* footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
