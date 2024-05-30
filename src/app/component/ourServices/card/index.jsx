import React from 'react'
import Image from 'next/image'
import CardDetails from '../cardDetails/Index'
import styled from 'styled-components'
import ButtonComponent from '../../button/Index'

const CardSection = () => {

    
    const Title = styled.h1`
    color:#000000;
    
    `
    const Card = styled.div`
       display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
  
    @media (max-width: 1024px) {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
      
       
   }
    @media (max-width: 768px) {
      display: block;
      
      
       
   }

  

    `
    const Carddiv = styled.div`
     background-color: #FDEBD0;
      width: 100%;
   height: 400px;
   button{
    border: 2px solid #D35400;
    padding: 10px 16px;
    color: #D35400;
    border-radius: 8px;
    margin-top: 15px;
   }

    `
    const Button = styled.button`
        
    `
   
        
        

    return (
        
            <Card className=' mt-10 m-20  '>
                {CardDetails && CardDetails.map(data => (
                    <Carddiv className=' flex flex-col items-center ' key={data.id}>
                        <div className=' w-[60px] h-[60px]  mt-16 mb-5'>
                            <Image src={data.img} alt='image' />
                        </div>
                        <Title className='  text-[20px] font-semibold mb-4'>{data.title}</Title>
                        <p className=' '>{data.para} </p>
                        <p className=' '>{data.para1} </p>
                        <p className=' '>{data.para2} </p>
                        <p>{data.text} </p>
                       
                        <ButtonComponent color="outline" btn={data.button} />
                       
                    </Carddiv>


                ))}
                
            </Card>
        
    )
}

export default CardSection
