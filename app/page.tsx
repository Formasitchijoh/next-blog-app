import React from 'react'
import Welcome from './ui/post/welcome'
import Image from 'next/image'
const Page = () => {
  return (
    <div className='w-[100vw] h-screen'>
      <Welcome/>
      <Image src='/chrismas.jpg' alt='' width={200} height={200}/>
    </div>
  )
}

export default Page