'use client'

import Header from "./_sections/Header"
import ContactModal from "./_sections/ContactModal"
import Hero from "./_sections/Hero"
import Properties from "./_sections/Properties"
import Product from "./_sections/Product"
import AboutUs from "./_sections/AboutUs"
import CTA from "./_sections/CTA"
import Footer from "./_sections/Footer"

import { useState } from "react"

export default function Home() {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen)
  }

  return (
    <>
      <Header isContactModalOpen={isContactModalOpen} handleContactModal={handleContactModal}/>
      <ContactModal isContactModalOpen={isContactModalOpen}/>
      <main>
        <Hero handleContactModal={handleContactModal}/>
        <Properties />
        <Product />
        <AboutUs />
        <CTA handleContactModal={handleContactModal}/>
      </main>
      <Footer />
    </>
  )
}