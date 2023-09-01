import React from 'react'
import Heading from './Heading'
import TestimonialData from './TestimonialData'

const TestimonialsData=[
    {
        id:1,
        companyName:'Credevnet Technologies',
        desc:'Este es un app por Este es un app por Este es un app por',
        img:'',
        name:'John Doe',
        designation:'Managing Director'
    },
    {
        id:2,
        companyName:'Enoverlab',
        desc:'Este es un app por Este es un app por Este es un app por',
        img:'',
        name:'John Doe',
        designation:'Managing Director'
    },
    {
        id:3,
        companyName:'Credevnet Technologies',
        desc:'Este es un app por Este es un app por Este es un app por',
        img:'',
        name:'John Doe',
        designation:'Managing Director'
    },
]
const Testimonials = () => {
  return (
    <div className='pt-32'>
      <Heading title = "Testimonials"/>
      <div className='flex flex-col md:flex-row md:px-8  gap-8'>
      {TestimonialsData.map((data, index)=>(
      <TestimonialData
      key={index}
      companyName={data.companyName}
      desc={data.desc}
      img={data.img}
      name={data.name}
      designation={data.designation}/>
      ))}
      </div>
      
    </div>
  )
}

export default Testimonials
