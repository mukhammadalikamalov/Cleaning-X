import React, { Fragment } from 'react'
import AboutUsSection from '../components/AboutUsSection'
import AdSection from '../components/AdSection'
import ArticlesSection from '../components/ArticlesSection'
import ContactUsSection from '../components/ContactUsSection'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/ServicesSection'

function HomePage() {
  return (
    <Fragment>
    <Navbar />
    <HomeSection />
    <AboutUsSection />
    <ServicesSection />
    <AdSection />
    <ArticlesSection />
    <ContactUsSection />
    <Footer />
    </Fragment>
  )
}

export default HomePage