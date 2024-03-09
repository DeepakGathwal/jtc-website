"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Megamenu from "./megamenu";
import { IoCall } from "react-icons/io5";
import { RiChat1Line } from "react-icons/ri";
import { FaGripLines } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Test from './enquiryForm';
import "./Header.css";
import { allCourceTypes, allNavbarLinks, courcesList, homeCourses } from '@/apis/apis';
import HireFromUs from './HireFromUs';
import JoinUs from './JoinUs';

export default function Header() {
    const path = usePathname()
    const router = useRouter();
    const [categories, setCategories] = useState([])
    const [megaMenu, setMegaMenu] = useState(false)
    const [links, setLinks] = useState([])
    const [show, setShow] = useState(false)
    const [Hireshow, setHireShow] = useState(false)
    const [joinForm, setjoinForm] = useState(false)
    const [cources, setCources] = useState([])
    const handelShow = () => {
        setShow(true)
    }

    const [activeTab, setActiveTab] = useState(1);


    const allData = async () => {
        const { data } = await allCourceTypes()
        if (data.length > 0)
            return setCategories(data)
    }
     

    const allCourses = async () => {
        const { data } = await courcesList(activeTab)
        setCources(data)
    }

    const navbar = async() => {
        const {data} = await allNavbarLinks()
        
      setLinks(data);
        allData()
    }

    useEffect(() => {
        allCourses()
    }, [activeTab])

    const navBarFunction = async(link) => {
        if(link == "/courses"){
           
          return  setMegaMenu(!megaMenu)
        }else if(link == "/hire"){
            setHireShow(true)
          return    setMegaMenu(false)
        }else if(link == "/join"){
            setjoinForm(true)
            return  setMegaMenu(false)
        }else {
            setMegaMenu(false)
           return router.push(link)
        }
    }
    useEffect(() => {
        return  setMegaMenu(false)
    },[path])

    useEffect(() => {
       navbar() 
    }, [])

  return (
    <>
  
      <header className="edu-header header-style-2 disable-transparent header-sticky sticky row-flex space-between-row align-items-center-row">
            <div className="row align-items-center w-100">
                <div className="col-lg-6 col-xl-2 col-md-6 col-6">
                <Link href="/">
            <div className="logo">
                    <Image className="logo-light" src="/assets/images/logo/logo.webp" alt="JTC LOGO" width={100} height={100}/>
             </div>
                </Link>
        </div>    

                    <div className="col-lg-6 d-none d-xl-block">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                {links && links.map((el) => (

                         <>
                            <li className="has-droupdown" onClick={() => navBarFunction(el.nav_link)}>{el.name}</li>
                
                               
                         </>
                            ))}
                        </ul>
                    </nav>
                </div>
                
                
           {/* <div className="col-lg-6 d-none d-xl-block">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                            <li className="has-droupdown" onClick={() => router.push("/")}>Home</li>
                            <li className="has-droupdown" onClick={() => router.push("/about")}>
                                About Us
                            </li>
                            <li className="has-droupdown">Courses
                                <div className="mega-menu row-flex">
                                    <div className="column-flex course-hover">
                                        <ul>
                                            {categories && categories.map((el, i) => (
                                                <>
                                                    <li key={i} id={el.id} onMouseEnter={() => handleTabMouseEnter(el.id)}><Link href="/">{el.category}</Link></li>

                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab == activeTab ? 'flex' : 'none' }}>
                                        {cources && cources.map((el,o) => (
                                            <>
                                                <div key={o} className="course-card">
                                                    <Link href={'course/' + el.name} className="cardlinks column-flex">
                                                        <Image src={el.icon} alt={el.name} width={20} height={20} className="courseIcon" />
                                                        <h3>{el.name}</h3>
                                                        <div className="details">
                                                            <span className="info">{el.name}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                        ))}

                                    </div>

                                </div>
                            </li>
                            <li className="has-droupdown" onClick={() => router.push("/tutorial")}>Tutorial</li>
                            <li className="has-droupdown" onClick={hireshow}>Hire from Us</li>

                            <li className="has-droupdown" onClick={joinshow}>Join Us</li>
                            <li className="has-droupdown" onClick={() => router.push("/blog")}>Blog</li>
                        </ul>
                    </nav>
                </div> */}

                <div className="col-lg-6 col-xl-4 col-md-6 col-6">
                    <div className="header-right d-flex justify-content-end">
                        <div className="header-menu-bar">
                            <div className="call-icon d-none d-md-block">
                                <a href="tel:09990699111" className="edu-btn btn-medium left-icon btn-white">
                                    <IoCall /> +91-999-0699-111
                                </a>
                            </div>
                            <div className="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a className="white-box-icon popup-btn" href="tel:09990699111"><IoCall /> </a>
                            </div>
                            <div style={{ cursor: "pointer" }} data-popup="enqNow" className="edu-btn btn-medium left-icon btn-white popup-btn quote-icon quote-user d-none d-md-block ml--15" onClick={handelShow}>
                                <RiChat1Line /> Enquire Now
                            </div>

                            <div className="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a className="white-box-icon popup-btn" data-popup="enqNow" ><RiChat1Line /> </a>
                            </div>
                            <Test show={show} setShow={setShow} />
                            <HireFromUs Hireshow={Hireshow} setHireShow={setHireShow} />
                            <JoinUs joinForm={joinForm} setjoinForm={setjoinForm} />

                            <div className="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                                <div className="hamberger">
                                    <button className="white-box-icon hamberger-button">
                                        <FaGripLines />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
        {megaMenu &&    <Megamenu categories={categories} cources={cources} setActiveTab={setActiveTab} activeTab={activeTab} />
                                }
        </>

    )
}
