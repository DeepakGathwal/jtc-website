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
import { ToastContainer, toast } from 'react-toastify';
import { allCourceTypes, allNavbarLinks, courcesList, homeCourses } from '@/apis/apis';
import HireFromUs from './HireFromUs';
import JoinUs from './JoinUs';

export default function Header() {
    const path = usePathname()
    const router = useRouter();
    const [mess, setMessage] = useState([])
    const [categories, setCategories] = useState([])
    const [megaMenu, setMegaMenu] = useState(false)
    const [links, setLinks] = useState([])
    const [show, setShow] = useState(false)
    const [Hireshow, setHireShow] = useState(false)
    const [joinForm, setjoinForm] = useState(false)
    const [cources, setCources] = useState([])
    const handelShow = () => {
        setMessage([])
        setShow(true)
    }

    

    useEffect(() => {
        toast(mess)
    }, [mess])

    const [activeTab, setActiveTab] = useState(1);


    const allData = async () => {
           setMessage([])
        const { data } = await allCourceTypes()
        return data && setCategories(data);
    }


    const allCourses = async () => {
           setMessage([])
        const { data } = await courcesList(activeTab)
        setCources(data)
    }

    const navbar = async () => {
        setMessage([])
        const { data } = await allNavbarLinks()

        setLinks(data);
        allData()
    }

    useEffect(() => {
        setMessage([])
        allCourses()
    }, [activeTab])

    const navBarFunction = async (link) => {
        if (link == "/courses") return setMegaMenu(!megaMenu)
        else if (link == "/hire") {
            setHireShow(true)
            setMessage([])
            return setMegaMenu(false)
        } else if (link == "/join") {
            setjoinForm(true)
            setMessage([])
            return setMegaMenu(false)
        } else {
            setMegaMenu(false)
            setMessage([])
            return router.push(link)
        }
    }
    useEffect(() => {
        setMessage([])
        return setMegaMenu(false)
    }, [path])

    useEffect(() => {
        setMessage([])
        navbar()
    }, [])

    return (
        <>

            <header className="edu-header header-style-2 disable-transparent header-sticky sticky row-flex space-between-row align-items-center-row">
                <div className="align-items-center w-100 page-flex">
                    <div className="col-lg-6 col-xl-2 col-md-6 col-6">
                        <Link href="/">
                            <div className="logo">
                                <Image className="logo-light" src="/assets/images/logo/logo.webp" alt="JTC LOGO" width={100} height={100} />
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
                                <Test show={show} setShow={setShow} setMessage={setMessage} />
                                <HireFromUs Hireshow={Hireshow} setHireShow={setHireShow} setMessage={setMessage} />
                                <JoinUs joinForm={joinForm} setjoinForm={setjoinForm} setMessage={setMessage} />

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
            <ToastContainer />
            {megaMenu && <Megamenu categories={categories} cources={cources} setActiveTab={setActiveTab} activeTab={activeTab} setMegaMenu={setMegaMenu} />
            }
        </>

    )
}
