"use client"
import React,{useState, useEffect} from 'react';
import "../globals.css"
import "./orbit.css";
import { FaArrowRight } from "react-icons/fa6";
import "./hero.css";
import FeaturedCourses from '@/Components/FeaturedCourses';
import { allCourceTypes } from '@/apis/apis';
import Image from 'next/image';
import LatestTutorial from '@/Components/ProgrammingAndFramework';
import ProgrammingAndFramework from '@/Components/ProgrammingAndFramework';
import WebDevlopment from '@/Components/WebDevlopment';
import Database from '@/Components/Database';
import SoftwareTesting from '@/Components/SoftwareTesting';
import DataStructure from '@/Components/DataStructure';
import CloudComputing from '@/Components/CloudComputing';
import TutorialTools from '@/Components/TutorialTools';



function Index() {
    const [state, setState] = useState([])
    const allData = async() => {
        const {data} = await allCourceTypes();
        return setState(data)
      }
    

      useEffect(() => {
        allData()
      },[])
  return (
    <>
        <div className="hero-section">
            <div className="container">
                <div className="row-flex hero-pad space-between-row">
                    <div className="herocta align-items-center-column column-flex col-flex-start">
                        <div className="top-subhead">
                        Knowledge at Your Fingertips
                        </div>
                        <div className="hero-heading">
                        Explore our Extensive Range <br />
                        of <strong> Engaging Tutorials</strong>
                        </div>
                        <div className="read-more-btn">
                            <a href="#recommendedcourses" className="edu-btn btn-mb">Explore Our Recommended Courses <i className="icon-arrow-right-line-right"></i></a>
                        </div>
                    </div>
                    <div className="herofig d-xl-block d-none">
                        <div className="orbitfig">
                            <div className="centerlogo">
                                <Image src="assets/images/orbitimage/logo.webp" alt="" className="logo" width={90} height={47}/>
                            </div>
                            <div className="first-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><Image src="assets/images/orbitimage/automation.svg" alt="" className="smaller-icon" width={50} height={50}/></span>
                            </div>
                            <div className="second-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><Image src="assets/images/orbitimage/webdevelopment.svg" alt="" className="mid-icon" width={68} height={68}/></span>
                                <span className="fourthItem"><Image src="assets/images/orbitimage/saleforce.svg" alt="" className="mid-icon" width={68} height={68}/></span>
                            </div>
                            <div className="third-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><Image src="assets/images/orbitimage/react.svg" alt="" className="large-icon" width={82} height={82}/></span>
                                <span className="fourthItem"><Image src="assets/images/orbitimage/javascript.svg" alt="" className="large-icon" width={74} height={74}/></span>
                                <span className="fifthItem"><Image src="assets/images/orbitimage/kubernotes.svg" alt="" className="large-icon" width={62} height={62}/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <FeaturedCourses/>
        <ProgrammingAndFramework/>
        <WebDevlopment/>
        <Database />
        <SoftwareTesting />
        <DataStructure />
        <CloudComputing />
        <TutorialTools />               

    </>
  )
}

export default Index