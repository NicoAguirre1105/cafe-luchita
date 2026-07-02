'use client'

import { useState } from "react"
import Header from "./_sections/Header"
import ContactModal from "./_sections/ContactModal"
import Hero from "./_sections/Hero"
import HowItWorks from "./_sections/HowItWorks"
import Presentations from "./_sections/Presentations"
import OfficeCTA from "./_sections/OfficeCTA"
import OurCoffee from "./_sections/OurCoffee"
import CoffeeProcess from "./_sections/CoffeeProcess"
import Benefits from "./_sections/Benefits"
import Delivery from "./_sections/Delivery"
import Testimonials from "./_sections/Testimonials"
import AboutUs from "./_sections/AboutUs"
import FinalCTA from "./_sections/FinalCTA"
import Footer from "./_sections/Footer"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const handleContactModal = () => setIsContactModalOpen((v) => !v)

  return (
    <>
      <Header isContactModalOpen={isContactModalOpen} handleContactModal={handleContactModal} />
      <ContactModal isContactModalOpen={isContactModalOpen} />
      <main>
        <Hero handleContactModal={handleContactModal} />
        <HowItWorks />
        <Presentations handleContactModal={handleContactModal} />
        <OfficeCTA />
        <OurCoffee />
        <CoffeeProcess />
        <Benefits />
        <Delivery />
        <Testimonials />
        <AboutUs />
        <FinalCTA handleContactModal={handleContactModal} />
      </main>
      <Footer />
    </>
  )
}
