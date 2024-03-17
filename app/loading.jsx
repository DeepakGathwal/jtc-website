import React from 'react';
import Loader from '../public/assets/images/shapes/loader-gif.gif';
import Image from 'next/image';

const Loading = () => {
  return (
    <div>
      <div className='route-loader'><Image src={Loader} alt='loader' width={500} /></div>
    </div>
  )
}

export default Loading
