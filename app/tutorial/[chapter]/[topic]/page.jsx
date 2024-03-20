"use client"
import React, {useState, useEffect } from 'react'
import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { tutorialChapter, tutorialTopic } from '@/apis/apis';

const Page = () => {
  const [state, setState] = useState([])
  const [section, setSection] = useState([])
  const router = useParams()
  const navigate = useRouter();
  const {chapter,topic } = router

  const allChapters = async() => {
    if(topic == 'undefined') return navigate.push('/')
      const {data} = await tutorialChapter(chapter)
      singleTopic()
     return data && setState(data)
  } 

  const singleTopic = async() => {
    const {data} = await tutorialTopic(topic)
    return  data && setSection(data)
  }

  useEffect(() => {
    allChapters()
  },[chapter])

  useEffect(() => {
    singleTopic()
  },[topic])


  return (
    <>
      <div className="edu-blog-details-area mt--20 bg-color-white">
       <div className="row w-100">
          <div className="col-lg-3 order-2 order-lg-1">
            <aside className="edu-blog-sidebar">
              <div className="edu-blog-widget widget-categories">
                {state && state.map((el, i) => (
                <div key={i} className="inner">
                  <h6 className="widget-title">{el.category_name}</h6>
                  <div className="content">
                    <ul className="category-list">
                    {el.topic && el.topic.map((ab, j) => (
                      <li key={j}><Link href={`/tutorial/${chapter}/${ab.link}`}>
                        {ab.heading}</Link>
                        </li>
                    ))}
                      </ul>
                  </div>
                </div>

                ))}
               
              </div>
            </aside>
          </div>
          <div className="col-lg-9 order-1 order-lg-2">
            <div className="blog-details-1">
               <div className="row g-5">
                  <div className="col-md-12 col-12 page-flex mb--20 justify-content-between">
                    <div className="load-more-btn">
                                <button className="edu-btn"href="courses.php"><FaArrowLeft/> Previous</button>
                            </div>
                            <div className="load-more-btn">
                                <button className="edu-btn" href="courses.php">Next <FaArrowRight /></button>
                            </div>
                  </div>
               </div>
               <div className="overview">
           {section && section.map((el, id) =>(
        <div key={id} style={{cssText : el.tutorial_css}} dangerouslySetInnerHTML={{ __html: el.tutorial_html }} />

           ))} 
            <div className="row g-5 mb--20">
                  <div className="col-md-12 page-flex justify-content-between">
                    <div className="load-more-btn">
                                <button className="edu-btn" href="courses.php"> <FaArrowLeft /> Previous</button>
                            </div>
                            <div className="load-more-btn">
                                <button className="edu-btn" href="courses.php">Next <FaArrowRight /></button>
                            </div>
                  </div>
               </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
