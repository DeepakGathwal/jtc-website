"use client"
import React, {useState, useEffect } from 'react'
import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { tutorialChapter, tutorialTopic } from '@/apis/apis';
import "./tutorial.css"

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

  const [istutActive, setIstutActive] = useState(false);
    const toggleMenu = () => {
        setIstutActive(!istutActive);
  };


  return (
    <>
      <div className="edu-blog-details-area mt--20 bg-color-white">
       <div className="row w-100">
          <div className="col-lg-3 order-2 order-lg-1">
            <span className={`tutorial-menu ${istutActive ? 'active' : ''}`} onClick={toggleMenu}>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 10.6875H33.25M11.875 19H33.25M11.875 27.3125H33.25" stroke="white" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.9375 11.875C6.59334 11.875 7.125 11.3433 7.125 10.6875C7.125 10.0317 6.59334 9.5 5.9375 9.5C5.28166 9.5 4.75 10.0317 4.75 10.6875C4.75 11.3433 5.28166 11.875 5.9375 11.875Z" stroke="white" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.9375 20.1875C6.59334 20.1875 7.125 19.6558 7.125 19C7.125 18.3442 6.59334 17.8125 5.9375 17.8125C5.28166 17.8125 4.75 18.3442 4.75 19C4.75 19.6558 5.28166 20.1875 5.9375 20.1875Z" stroke="white" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.9375 28.5C6.59334 28.5 7.125 27.9683 7.125 27.3125C7.125 26.6567 6.59334 26.125 5.9375 26.125C5.28166 26.125 4.75 26.6567 4.75 27.3125C4.75 27.9683 5.28166 28.5 5.9375 28.5Z" stroke="white" stroke-width="3.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            <aside className={`edu-blog-sidebar ${istutActive ? 'active' : ''}`}>
              <div className="edu-blog-widget widget-categories">
                {state && state.map((el, i) => (
                <div key={i} className="inner">
                  <h6 className="widget-title">{el.category_name}</h6>
                  <div className="content">
                    <ul className="category-list">
                    {el.topic && el.topic.map((ab, j) => (
                      <li key={j}><Link href={`/tutorial/${chapter}/${ab.link}`} onClick={toggleMenu}>
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
