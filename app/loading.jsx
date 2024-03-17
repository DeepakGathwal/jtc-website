import React from 'react';
import Loader from './loader-gif.gif';
import Image from 'next/image';

const Loading = () => {
  return (
    <div>
      <div className='route-loader'><Image src={Loader} alt='loader' /></div>
    </div>
  )
}

export default Loading
