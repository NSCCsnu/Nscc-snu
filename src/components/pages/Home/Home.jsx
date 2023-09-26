import React from 'react'
import { Timeline } from './timeline/Timeline'
import { Hero } from './HeroSection/Hero'
import { Footer } from './Footer/Footer'
import { FAQ } from './fAQ/FAQ'
import { CTA } from './CTA/CTA'
import { Banner } from './Banner/Banner'
import { Layout } from '../Layout'


export const Home = () => {
  return (
    <Layout>
       
        <Hero/>
        <CTA/>
        <Banner/>
        <Timeline/>
        
        <FAQ/>
        <Footer/>
        
        </Layout>
  )
}
