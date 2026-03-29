import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Work/>
      <Skills/>
      <About/>
       <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
