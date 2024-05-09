import React from 'react'
import HomeSlide from '../components/HomeSlide'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticlesComponent from '../components/ParticlesComponent'

const Initial = () => {
  return (
    <>
    <Navbar />
    <HomeSlide />
    <ParticlesComponent id="particles"/>
    <Footer />
    </>
  )
}

export default Initial