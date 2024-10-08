import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Projects from '../../Components/Projects/Projects'
import TechStack from '../../Components/TechStack/TechStack'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import QuickAbout from '../../Components/QuickAbout/QuickAbout'
import Info from '../../Components/Info/Info'
import Project2 from '../../Components/Project2/Project2'

const Home = () => {
  return (
    <div className='home'>

      <Hero/>
      <QuickAbout/>
      <Info/>
      {/* <About/> */}
      <Project2/>
      {/* <Projects/> */}
      <TechStack/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home