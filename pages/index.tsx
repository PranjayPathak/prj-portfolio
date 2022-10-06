import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import SocialIcons from '../components/SocialIcons'
// import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div style={{minHeight:'100vh'}}>
      <Head>
        <title>Prj.Portfolio</title>
      </Head>

      {/* Background shades */}
      <div className="color-layout layout-purple"></div>
      <div className="color-layout layout-blue"></div>

      {/* Top Navbar */}
      <Header />

      {/* Left Navbar */}
      <LeftMenu />

      {/* Social IconBar  */}
      <SocialIcons />

      {/* Hero section */}
      {/* About section */}
      {/* Skills */}
      {/* Experience */}
      {/* Projects */}
      {/* Download Resume */}
      {/* Contact me */}
      {/* footer */}


    </div>
  )
}

export default Home
