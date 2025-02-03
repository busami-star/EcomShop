import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Banner/Banner"

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