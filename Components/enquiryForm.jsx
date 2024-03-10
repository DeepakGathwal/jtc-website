import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { homeCourses, enquiryForm } from '@/apis/apis';
import Tnc from './tnc';
import Link from 'next/link';

const EnquiryForm = ({ show, setShow }) => {

  const [state, setState] = useState([])
  const [field, setField] = useState({
      name : "", phone : "", course : "", email : ""
  })
  const [errors, setErrors] = useState({
      name: "", phone: "", course: "", checkbox: ""
  });

  const allData = async () => {
      const {data} = await homeCourses()
      return data && setState(data);
  }

 
const handelChange = (e) => {
  setField({ ...field, [e.target.name]: e.target.value })
}

const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(field.name.trim())) {
        newErrors.name = "Name should contain alphabets only.";
        isValid = false;
    } else {
        newErrors.name = "";
    }

    // Phone validation
    if (!/^\d{10}$/.test(field.phone.trim())) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
        isValid = false;
    } else {
        newErrors.phone = "";
    }

    // Course validation
    if (!field.course.trim() || field.course === "Select Course") {
        newErrors.course = "Please select a course";
        isValid = false;
    } else {
        newErrors.course = "";
    }

    // Checkbox validation
    if (!field.checkbox) {
        newErrors.checkbox = "Please accept the terms and conditions";
        isValid = false;
    } else {
        newErrors.checkbox = "";
    }

    setErrors(newErrors);
    return isValid;
};

  const handelSubmit = async(e) => {
      e.preventDefault();
      if (validateForm()) {
          const data = await enquiryForm(field);
          setField({
              name: "",
              phone: "",
              course: "",
              email: ""
          });
          alert(data.message);
          return setShow(false);
      }
  }

  useEffect(() => {
      allData();
  },[])

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>

        <Modal.Header closeButton>
          <h3 className="mb-30">Get in Touch</h3>
        </Modal.Header>
        <Modal.Body>
                  <div className="container checkout-page-style">
                    <div className="login-form-box">
                      <form className="login-form" method="post" onSubmit={handelSubmit}>
                        <div className="input-box mb--20">
                          <input type="text" placeholder="Name" name="name" id="name1" onChange={handelChange} value={field.name}/>
                          {errors.name && <span className="error-message red">{errors.name}</span>}
                        </div>
                        <div className="input-box mb--20">
                          <input type="tel" id="phone1" className="phone-input" name="phone"
                            placeholder="Mobile Number" onChange={handelChange} value={field.phone} />
                          {errors.phone && <span className="error-message red">{errors.phone}</span>}
                        </div>
                        <div className="input-box mb--20">
                          <select name="course" id="courses" className="courses valid" 
                            aria-invalid="false" onChange={handelChange} value={field.course}>
                            <option>Select Course</option>
                            {state && state.map((el, i) => (
                              <option key={i} value={el.id}>{el.name}</option>
                            ))}
                          </select>
                          {errors.course && <span className="error-message red">{errors.course}</span>}
                        </div>
                        {/* <Tnc id = {"checkbox-1"}/> */}
                        <div className="input-box mb--20">
                            <input type="checkbox" id="checkbox-1" name="checkbox" checked={field.checkbox} onChange={(e) => setField({ ...field, checkbox: e.target.checked })} />
                            <label htmlFor="checkbox-1">I accept the <Link href="/termsandcondition">Terms &#38; Conditions</Link>.</label>
                            {errors.checkbox && <span className="error-message red">{errors.checkbox}</span>}
                        </div>
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

export default EnquiryForm;
