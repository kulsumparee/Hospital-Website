import React from 'react'
import Image from 'next/image'
import LineImg from "@/assest/Group.svg"
import map from "@/assest/Full Map.svg"
import { Container } from './Styles'
import ContactFooter from '../footer/Index'


const ContactSection = () => {
  return (
    <Container className='   mt-20'>

      <div className=' items-center flex flex-col  '>
        <h1 className=' mt-10  text-[40px] font-bold'>Contact Us</h1>
        <Image src={LineImg} />
      </div>
      <div className=' sm:grid-cols-1 sm:text-center md:grid md:grid-cols-3 px-16 gap-14 mt-14 '>
        <Image src={map} />
        <Image src={map} />
        <Image src={map} />
      </div>

      <div className=' md:grid md:grid-cols-3 sm:grid-cols-1 sm:items-center'>
        
        <ContactFooter />
        <ContactFooter />
        <ContactFooter />
       
      </div>
    
    </Container>

  )
}

export default ContactSection

