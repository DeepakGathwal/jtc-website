import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import FeaturedCourses from '@/Components/FeaturedCourses';

const Page = () => {
  return (
    <>
    <div className='backToHome'>
        <Link href="/">Go back to Home</Link>
      </div>
    <div className='errorPage'>
        
      <h1>
      <Image src='/assets/images/icons/error.png' alt="404 Error" width={55} height={55}/>
      </h1>
      
      </div>

      <FeaturedCourses />
    </>
  )
}

export default Page
