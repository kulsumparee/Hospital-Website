"use client"
import React from 'react'
import NavComponent from './component/navBar/Index'
import HeroSection from './component/heroSec/Index'
import ServiceSection from './component/ourServices/Index'
import ClinicSection from './component/ourClinic/main/Index'
import TeamComponent from './component/meetTeam/head/Index'
import ContactSection from './component/contactUs/map/Index'
import FaqsSection from './component/faqs/head/Index'
import FormContent from './component/form/Index'
import PartnersSection from './component/trustedPartners/Index'
import FooterSection from './component/footer/Index'

const page = () => {
  return (
    <div>
      <NavComponent />
      <HeroSection />
      <ServiceSection />
      <ClinicSection />
      <TeamComponent />
      <ContactSection />
      <FaqsSection />
      <FormContent />
      <PartnersSection />
      <FooterSection/>

    </div>
  )
}

export default page
