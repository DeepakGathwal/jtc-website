import React,{useState, useEffect} from 'react'
import { courceViodePoint } from '@/apis/apis'

const CourceVideo = ({coursename}) => {
	const [state, setState]  = useState([])
    const allData = async() => {
        const {data} = await courceViodePoint(coursename)
        if(data.length > 0)  return setState(data)
    }
useEffect(() => {
    allData()
},[coursename])
  return (
	<div className="eduvibe-widget-details mt--35">
	<div className="widget-content">
		<ul>
			{state && state.map((el) => (
				<li>{el.description}</li>

			))}

	</ul>

		<div className="read-more-btn mt--45">
			<a className="edu-btn btn-bg-alt w-100 text-center"
				href="#downloadSyllabus">Download Brochure</a>
		</div>

		<div className="read-more-btn mt--15">
			<a className="edu-btn w-100 text-center" href="#upcomingBatches">Enroll
				Now</a>
		</div>
	</div>
</div>
  )
}

export default CourceVideo
