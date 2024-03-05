import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';
import { hireUsForm, homeCourses } from '@/apis/apis';


const HireFromUs = ({  Hireshow, setHireShow }) => {
    const [field, setField] = useState({
        name : "", phone : "", company : "",course : "",desigination : "",  email : ""
    })
  const [state, setState] = useState([])


    const allData = async () => {
        const {data} = await homeCourses()
        
        if (data.length > 0) setState(data)
    }
      
    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value })
    }
    
    useEffect(() => {
        allData()
    },[])

    const handelSubmit = async(e) => {
        e.preventDefault()
        const data = await hireUsForm(field)
          setField("")
          alert(data.message)
          return setHireShow(false) 
    }

  return (
    <>
        <Modal show={Hireshow} onHide={() => setHireShow(false) }>

            <Modal.Header closeButton>
            <h6 className="mb-30">Partner with Us for Hiring</h6>
            </Modal.Header>
            <Modal.Body>
            <div className="popup-content">
                <div className="container checkout-page-style" style={{padding:0}}>
                    <div className="login-form-box">
                        <form className="login-form" onSubmit={(e) =>handelSubmit(e)} id="registrationForm1">
                            <div className="input-box mb--20">
                                <input type="text" name="name" className="name2" id="name2" placeholder="Enter your name" onChange={handelChange} required/>
                            </div>
                            <div className="input-box mb--20">
                                <input type="tel" id="phone2" name="phone" className="phone-input" onChange={handelChange} placeholder="Enter your Mobile"
                                    required/>
                            </div>
                            <div className="input-box mb--20">
                                <input type="text" name="company" id="company_name" onChange={handelChange} className="comName"
                                    placeholder="Enter your Company Name" required/>
                            </div>
                            <div className="input-box mb--20">
                                <input type="text" name="desigination" id="designation" onChange={handelChange} className="designation"
                                    placeholder="Enter your Designation" required/>
                            </div>
                            <div className="input-box mb--20">
                                <select name="course" id="courses" className="courses valid" 
                            aria-invalid="false" required onChange={handelChange} >
                         
                            <option selected>Select Course</option>
                            {state && state.map((el, i) => (
                                <option key={i} value={el.id}>{el.name}</option>
                            ))}
                          </select>
                            </div>
                            <Tnc id = {"checkbox-2"}></Tnc>
                            <button className="rn-btn edu-btn w-100 mb-20" type="submit">
                                <span>Hire Now</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            </Modal.Body>

            </Modal>
    </>
  )
}   

export default HireFromUs
