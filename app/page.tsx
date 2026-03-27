import Header from "./_sections/Header"
import Hero from "./_sections/Hero"
import Properties from "./_sections/Properties"
import Product from "./_sections/Product"
import AboutUs from "./_sections/AboutUs"
import CTA from "./_sections/CTA"
import Footer from "./_sections/Footer"

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Properties />
        <Product />
        <AboutUs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}