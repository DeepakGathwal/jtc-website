import { executeQuery } from '@/conn/db';
import React from 'react'

const About = ({response}) => {

  const data = JSON.parse(response)
  return (
    <div>
      <h1>I am About</h1>
      {data.map((el) => (
       <>
        <h1>{el.point}</h1>
        <h1>{el.description}</h1>
       </>
      ))}
    </div> 
  )
}

export async function getServerSideProps() {
  // Make API calls concurrently
  const query =  `Select * from jtc_about_points`
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


export default About
