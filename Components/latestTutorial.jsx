import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { tutorialCourse } from '@/apis/apis';

const ProgrammingAndFramework = ({ category, id }) => {

    const [state, setState] = useState([])
    const allData = async () => {
        const { data } = await tutorialCourse(id);
        console.log(data);
        return setState(data)
    }


    useEffect(() => {
        allData()
    }, [])
    const words = category.split(' ');
    const lastWord = words.pop();


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="section-title white-title sal-animate mb--40 mt--40">

                        <h3 className="title tg-svg">
                            {words.map((word, index) => (
                                <React.Fragment key={index}>
                                    <span>{word}</span>{' '}
                                </React.Fragment>
                            ))}
                            <span style={{ position: 'relative', display: 'inline-block', color: '#525FE1' }}>
                                {lastWord}
                                <svg width="14" height="14" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentColor" strokeWidth="4"></path>
                                    <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentColor" strokeWidth="2"></path>
                                </svg>
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="row">

                    {state && state.map((el, i) => (
                        <div key={i} className="col-md-2 col-6"  >
                            <div className="tutor_box">
                                <Image width={100} height={50} src={el.icon} alt={el.icon} />
                                <p>{el.name}</p>
                            </div>
                        </div>
                    ))}


                    {/* <div className="col-md-2 col-6"  >
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/jdbc.png" alt=""/>
					<p>JDBC</p>
				</div>
			</div>
			<div className="col-md-2 col-6">
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/java.png" alt=""/>
					<p>servlet</p>
				</div>
			</div>
			<div className="col-md-2 col-6"  >
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/jsp.png" alt=""/>
					<p>JSP</p>
				</div>
			</div>
			<div className="col-md-2 col-6" tyle="visibility: visible;">
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/html.png" alt=""/>
					<p>HTML</p>
				</div>
			</div>
			
			<div className="col-md-2 col-6">
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/css.png" alt=""/>
					<p>CSS</p>
				</div>
			</div>
			<div className="col-md-2 col-6"  >
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/python.png" alt=""/>
					<p>PYTHON</p>
				</div>
			</div>
			
			<div className="col-md-2 col-6"  >
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/javascript.png" alt=""/>
					<p>JAVASCRIPT</p>
				</div>
					
			</div>
			<div className="col-md-2 col-6">
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/mysql.png" alt=""/>
					<p>MYSQL</p>
				</div>
				
			</div>
			<div className="col-md-2 col-6"  >
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/mongodb.png" alt=""/>
					<p>MONGO</p>
				</div>
				
			</div>
			<div className="col-md-2 col-6">
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/selenium.png" alt=""/>
					<p>SELENIUM</p>
				</div>
				
			</div>
			
			<div className="col-md-2 col-6">
				<div className="tutor_box">
					<Image width={100} height={50} src="./assets/images/tutorial_icon/php.png" alt=""/>
					<p>PHP</p>
				</div>
				
			</div> */}
                </div>
            </div>
        </>
    )
}

export default ProgrammingAndFramework
