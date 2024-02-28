import React, { useState, useEffect } from 'react'
import { courceCatgories, courceChapter } from '@/apis/apis';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



const CourceCategory = ({ courcename }) => {
    const [state, setState] = useState([])
    const [chapters, setChapters] = useState([])

    const allData = async () => {
        const { data } = await courceCatgories(courcename)
        if (data.length > 0) return setState(data)
    }


    useEffect(() => {
        allData()
    }, [courcename])

    const getCourceChapter = async (id) => {
        const { data } = await courceChapter(id)
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
                                                                <h4 >{c.chapter}</h4>
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


            {/* <Accordion onChange={(e) => getCourceChapter("wed")}>
<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            What harsh truths do you prefer to ignore?
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in
            cupidatat occaecat ut occaecat consequat est minim minim
            esse tempor laborum consequat esse adipisicing eu
            reprehenderit enim.
        </p>
    </AccordionItemPanel>
</AccordionItem>
<AccordionItem>
    <AccordionItemHeading>
        <AccordionItemButton>
            Is free will real or just an illusion?
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>
            In ad velit in ex nostrud dolore cupidatat consectetur
            ea in ut nostrud velit in irure cillum tempor laboris
            sed adipisicing eu esse duis nulla non.
        </p>
    </AccordionItemPanel>
</AccordionItem> 
</Accordion>*/}
        </>
    )
}

export default CourceCategory
