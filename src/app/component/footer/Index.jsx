import React from 'react'
import Image from 'next/image'
import logo from "@/assest/NavLogo.svg"
import icon1 from "@/assest/ReactIcons/Group 38262.svg"
import icon2 from "@/assest/ReactIcons/Group 38264.svg"
import icon3 from "@/assest/ReactIcons/Group 38265.svg"
import icon4 from "@/assest/ReactIcons/Group 38266.svg"
import styled from 'styled-components'


const FooterSection = () => {
    const Footer = styled.footer`


    background-color:#77513E ;
    color: white;
    padding: 40px;

   
    `
  return (
      <Footer className=' '>
          <div className='  md:flex sm:block justify-evenly '>
              <div className=' w-[30%] '>
                  <div className=' flex gap-4 items-center mb-5'>
                      <Image src={logo} />
                      <h1>Logo</h1>
                  </div>
                  <div>
                      <p>Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida et dictumst duis gravida odio semper. Integer potenti viverra et interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor. Sem enim eget ac morbi placerat.</p>
                  </div>
              </div>

              <div className=''>
                  <h1>Features</h1>

                  <ul className=' mt-5'>
                      <li className=' pb-4'>Services</li>
                      <li className=' pb-4'>Our Team</li>
                      <li className=' pb-4'>Contact Us</li>
                      <li className=' pb-4'>FAQs</li>

                  </ul>

              </div>

              <div className=''>
                  <h1>Follow Us</h1>
                  <div className=' flex mt-10'>
                      <Image src={icon1} />
                      <Image src={icon2} />
                      <Image src={icon3} />
                      <Image src={icon4} />
                 </div>


              </div>
         </div>
      </Footer>
  )
}

export default FooterSection
