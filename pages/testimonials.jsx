import { imgLink } from '@/apis/commonapi';
import { executeQuery } from '@/conn/db';
import React from 'react'

const Testimonials = ({response}) => {

  const data = JSON.parse(response)
  return (
    <div>
      <h1>I am Testimonials</h1>
      {data && data.map((el) => (
       <>
        <h1>{el.name}</h1>
        <h1>{el.description}</h1>
       <a href={el.read_link} target='_blank'>Read More</a>
       <br />
       
        <img src={imgLink + el.image} alt={el.image} srcset="" />
       </>
      ))}
    </div> 
  )
}

export async function getServerSideProps() {
  // Make API calls concurrently
  const query =  `Select name,description,  read_link,image  from jtc_testimonials WHERE deleted_by = '0'`
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


export default Testimonials
