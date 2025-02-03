import React from 'react'
import Navbar from "./components/Navbar"
import Header from './components/Header'
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Banner from "./components/Banner"

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Banner />
      <Footer />
    </div>
  )
}

export default page