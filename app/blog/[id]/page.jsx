"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { singleBlog } from '@/apis/apis'
import Image from 'next/image'

const Index = () => {
  const [state, setState] = useState([])
  const router = useParams()
  const {id} = router

  const allData = async()=>{
    const {data} = await singleBlog(id)
    setState(data);
  }

  useEffect(() => {
    allData();
  },[id])

  return (
    <>
      {state && state.map((el,i) => (
        <>
       <div key={i}  className='d-flex justify-content-between fw-bold'>
       <span>{el.addedAt}</span>
        <span>{el.category}</span>
       </div>
        <h4 className='text-center'>{el.name}</h4>

        <Image src={el.icon} alt="" srcset="" width={40} height={40}/>
        <h6 className="m-3 p-3">{el.heading}</h6>
        <div className="m-5 p-5" style={{cssText : el.blog_css}} dangerouslySetInnerHTML={{ __html: el.blog_html }} />
        
        
<iframe className="m-4 p-4" width="560" height="315" src={el.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>

        </>
      ))}
    </>
  )
}

export default Index
