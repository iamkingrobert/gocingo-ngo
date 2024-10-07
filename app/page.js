'use client'
import Faq from '@/components/homepage/Faq'
import Footer from '@/components/homepage/Footer'
import Fundraiser from '@/components/homepage/Fundraiser'
import Hero from '@/components/homepage/Hero'
import HeroSectionCards from '@/components/homepage/HeroSectionCards'
import Navbar from '@/components/homepage/Navbar'
import Stripes from '@/components/homepage/Stripes'
import Team from '@/components/homepage/Team'
import Values from '@/components/homepage/Values'
import React from 'react'
import 'animate.css';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function page() {
  useEffect(()=>{
      AOS.init()
},[])
  return (
    <main>
      <div className="h-auto overflow-hidden">
        <Hero/>
        <HeroSectionCards/>
      </div>
      <Values/>
      <Fundraiser/>
      <Stripes/>
      <Team/>
      <Faq/>
    </main>
  )
}

export default page