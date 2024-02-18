import React, { useEffect } from 'react';
import sal from 'sal.js';
import {motion, useScroll} from 'framer-motion'



const YourPage = () => {
  const {scrollYProgress} = useScroll()
    useEffect(() => {
        sal({
          threshold : 1,
          once:false
        })
    },[])
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  /> 
  );
};

export default YourPage;
