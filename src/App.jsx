import React from 'react'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import Experience from './components/experience/Experience'
import { Services } from './components/services/Services'
import { Portfolio } from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import { Contact } from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Header } from './components/header/Header'

export const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}
