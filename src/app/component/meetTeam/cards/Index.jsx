import React from 'react'
import { Card, TeamContainer } from './Styles'
import CardContant from '../cardData/Index'
import Image from 'next/image'

const TeamCards = () => {
  return (
    <TeamContainer className=' p-14 md:grid md:grid-cols-4 sm:grid-cols-1'>
      {CardContant && CardContant.map((data => 
        <Card className=' sm:mt-10 md:mt-0 sm:p-0'>

        <div key={data.id} className=' '>
            <div className=' '>
              <Image src={data.src} />
          </div>
          <h1 className=' text-[20px] font-semibold  mt-3'>{data.title1} </h1>
            <h2 className='  font-semibold mb-3'>{data.title2} </h2>
          <p>{data.line1} </p>
          <p>{data.line2} </p>
          <p>{data.line3} </p>

        </div>
        </Card>
      ))}

      
    </TeamContainer>
  )
}

export default TeamCards
