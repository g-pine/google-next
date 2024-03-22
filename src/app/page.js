import HomeHeader from '@/components/HomeHeader'
import React from 'react'
import Image from 'next/image'
import HomeSearch from '@/components/HomeSearch'

export default function page() {
  return (
    <>
     <HomeHeader/> 
     <div className='flex flex-col items-center mt-24'>
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
        alt='Google logo'
        width={300}
        height={100}
        priority
        style={{width: 'auto'}}
      />
      <HomeSearch/>
     </div>
    </>
  )
}
