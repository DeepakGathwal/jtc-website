import React,{useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { homeCourses, joinUsForm } from '@/apis/apis';
import Link from 'next/link'
import Tnc from './tnc';

const EnquiryForm = ({ show, setShow }) => {

  const [state, setState] = useState([])
  const [field, setField] = useState({
      name : "", phone : " " , cource : "", email : ""
  })

  const allData = async () => {
      const {data} = await homeCourses()
   
      if (data.length > 0) setState(data)
  }

 
const handelChange = (e) => {
  setField({ ...field, [e.target.name]: e.target.value })
}

  const handelSubmit = async(e) => {
      e.preventDefault()
      const data = await joinUsForm(field)
        setField("")
        alert(data.message)
        return setShow(false) 
  }

  useEffect(() => {
      allData()
  },[])

  return (
    <>
      <Modal show={show} onHide={() =>   setShow(false)}>

        <Modal.Header closeButton>
          <h3 className="mb-30">Get in Touch</h3>
        </Modal.Header>
        <Modal.Body>
                  <div className="container checkout-page-style">
                    <div className="login-form-box">
                      <form className="login-form" method="post" onSubmit={handelSubmit}>
                        <div className="input-box mb--20">
                          <input type="text" placeholder="Name" name="name" id="name1" required onChange={handelChange} value={field.name}/>
                        </div>
                        <div className="input-box mb--20">
                          <input type="tel" id="phone1" className="phone-input" name="phone"
                            placeholder="Mobile Number" required onChange={handelChange} value={field.phone} />
                        </div>
                         {/* <div className="input-box mb--20">
                                                            <input type="email"   id="phone" className="phone-input" name="email" placeholder="@email.com" required onChange={handelChange} value={field.email}/>
                                                        </div> */}
                        <div className="input-box mb--20">
                          <select name="cource" id="courses" className="courses valid" 
                            aria-invalid="false" required onChange={handelChange} >
                         
                            <option selected>Select Course</option>
                                                                {state && state.map((el, i) => (
                                                                    <option key={i} value={el.id}>{el.name}</option>

                                                                ))}

                               

                          </select>
                        </div>
                        <Tnc id = {"checkbox-1"}/>
                        <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                          <span>Enquire Now</span>
                        </button>
                      </form>
                    </div>
                  </div>

        </Modal.Body>

      </Modal>



    </>
  )
}

export default EnquiryForm