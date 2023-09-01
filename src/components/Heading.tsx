import React from 'react'

interface propsType{
  title: string
}
const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
     <p className='pb-2 border-b-4 inline-block'>{title}</p>
    </div>
  )
}

export default Heading
