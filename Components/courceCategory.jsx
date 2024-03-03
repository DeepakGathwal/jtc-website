import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import Buttonicon from "./icon/connect-icon.svg"
import { courseChapter, courseCatgories } from '@/apis/apis'





const CourceCategory = ({ coursename }) => {
    const [state, setState] = useState([])
    const [chapters, setChapters] = useState([])

    const allData = async () => {
        const { data } = await courseCatgories(coursename)

        if (data.length > 0) return setState(data)
    }


    useEffect(() => {
        allData()
    }, [coursename])

    const getCourceChapter = async (event) => {
        const {id} = event.target
        const { data } = await courseChapter(id)
        if (data.length > 0) return setChapters(data)
    }

    return (
        <>		
        <div className='col-md-7'>
            <div class="accordion-style-2 acc-section">
                <div class="accordion custom">
                {state && state.map((el) => (
                    <div className="accordion-item">
                        <input type="checkbox" id={"toggle"+el.id} className="accordion-toggle" />
                        <label for={"toggle"+el.id} id={el.id} onClick={getCourceChapter} eventKey="0" className="accordion-title">
                            <h2 id={el.id} class="accordion-header accordion-button">{el.category_name}</h2>
                        </label>
                        <div className="accordion-collapse">
                            <div className="accordion-body">
                            {chapters && chapters.map((ch) => (
                                    <>
                                        <h4 >{ch.chapter}</h4>
                                        <div className="list_mod">
                                        {ch.topic && ch.topic.map((tp) => (
                                        <p> {tp.topic}</p>
                                        ))}
                                        </div>
                                    </>

                                    ))}

                                </div>
                        </div>
                    </div>
                        ))}   
                </div>
                
            </div>
        </div>
        </>
    )
}

export default CourceCategory
