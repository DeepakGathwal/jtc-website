import { imgLink } from '@/apis/commonapi';
import { executeQuery } from '@/conn/db';
import React from 'react'

const ChoosePoint = ({response}) => {

  const data = JSON.parse(response)
  return (
    <div>
        <h3 class="title tg-svg">Why <span class="position-relative color-primary"><span class="svg-icon" id="svg-5"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">

</svg></span>Choose</span> Us</h3>
      <h1>I am Testimonials</h1>
      {data && data.map((el) => (
       <>
        <h1>{el.point}</h1>
       
       </>
      ))}
    </div> 
  )
}

export async function getServerSideProps() {
  // Make API calls concurrently
  const query =  `Select * from jtc_choosing_point WHERE deleted_by = '0'`
  const data = await executeQuery(query)
  let response ;
  if(data.length > 0){
    response = JSON.stringify(data)
}else response
  // Parse the JSON responses

  return {
    props: {
      response
    }
  };
}


export default ChoosePoint
