import React, { useState, useEffect } from 'react'
import { courseCatgories, courseChapter } from '@/apis/apis';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



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

    const getCourceChapter = async (id) => {
        const { data } = await courseChapter(id)
        if (data.length > 0) return setChapters(data)
    }


    return (
        <>
            <div className="col-md-7">
                <div className="edu-card card-type-7 radius-small">
                    <div className="inner">
                        <div className="course-content">
                            <div className="edu-accordion-02">
                                {state && state.map((el) => (
                                    <Accordion onChange={(e) => getCourceChapter(el.id)}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    {el.category_name}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="card-body" >
                                                    <div className="module">
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
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                ))}




                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CourceCategory
