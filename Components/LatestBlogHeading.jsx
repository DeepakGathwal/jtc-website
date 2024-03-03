import React,{useState, useEffect} from 'react'
import { blogs } from '@/apis/apis';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { SiOpenbadges } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import Image from 'next/image';

const LatestBlogHeading = () => {
    const [state, setState] = useState([])
    const allData = async() => {
        const {data} = await blogs();
        if(data.length > 0)
         return setState(data)
      }

      useEffect(() => {
        allData()
      },[])
  return (
    <>

        

<div className="eduvibe-home-two-blog edu-blog-area edu-section-gap bg-color">
            <div className="wrapper">
                <div className="container eduvibe-animated-shape">
                    
                       

      <div className="row g-5 mt--30">
                        {state.length > 0 && state.map((el, i) => (
                          
                            <>
                            <div key={i} className="col-lg-4 col-md-6 col-12">
                         <div className="edu-blog blog-type-2 bg-white radius-small"> 
                                <div className="inner">
                                    <div className="thumbnail">
                            <Link href={"/blog/"+el.id}>
                                         <Image src={el.icon} alt={el.name} width={365} height={122}/>
                            </Link>
                                    </div>
                                    <div className="content">
                                        <div className="status-group">
                                         <SiOpenbadges /> {el.category}
                                        </div>
                                        <h5 className="title">{el.name}</h5>
                                        <div className="blog-card-bottom">
                                            <ul className="blog-meta">
                                                <li><SlCalender /> {el.addedAt}</li>
                                            </ul>
                                            <div className="read-more-btn">
                                            <Link href={"/blog/"+el.id}>
                                                Read More <FaArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                              </div>
                               </>
                        ))}
                        </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default LatestBlogHeading
