import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';
import { hireUsForm, homeCourses } from '@/apis/apis';
import Link from 'next/link';

const HireFromUs = ({ Hireshow, setHireShow, toast }) => {
    const [field, setField] = useState({
        name: "", phone: "", company: "", course: "", desigination: "", email: ""
    });
    const [state, setState] = useState([]);
    const [errors, setErrors] = useState({
        name: "", phone: "", company: "", course: "", desigination: "", email: "", checkbox: ""
    });

    const allData = async () => {
        const { data } = await homeCourses();
        return data && setState(data);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(field.name.trim())) {
            newErrors.name = "Name should only contain alphabets.";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        // Phone validation
        if (!/^\d{10}$/.test(field.phone)) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
            isValid = false;
        } else {
            newErrors.phone = "";
        }

        // Company validation
        if (!field.company.trim()) {
            newErrors.company = "Please enter your company name";
            isValid = false;
        } else {
            newErrors.company = "";
        }

        // Designation validation
        if (!field.desigination.trim()) {
            newErrors.desigination = "Please enter your designation";
            isValid = false;
        } else {
            newErrors.desigination = "";
        }

        // Course validation
        if (field.course === "" || field.course === "Select Course") {
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

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        allData();
    }, []);

    const handelSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = await hireUsForm(field);
          
          return await   toast(data.message);
        }
    };

    return (
        <>
            <Modal show={Hireshow} onHide={() => setHireShow(false)}>
                <Modal.Header closeButton>
                    <h6 className="mb-30">Partner with Us for Hiring</h6>
                </Modal.Header>
                <Modal.Body>
                    <div className="popup-content">
                        <div className="container checkout-page-style" style={{ padding: 0 }}>
                            <div className="login-form-box">
                                <form className="login-form" onSubmit={handelSubmit} id="registrationForm1">
                                    <div className="input-box mb--20">
                                        <input type="text" name="name" className="name2" id="name2" placeholder="Enter your name" onChange={handelChange} />
                                        {errors.name && <span className="error-message red">{errors.name}</span>}
                                    </div>
                                    <div className="input-box mb--20">
                                        <input type="tel" id="phone2" name="phone" className="phone-input" onChange={handelChange} placeholder="Enter your Mobile" />
                                        {errors.phone && <span className="error-message red">{errors.phone}</span>}
                                    </div>
                                    <div className="input-box mb--20">
                                        <input type="text" name="company" id="company_name" onChange={handelChange} className="comName" placeholder="Enter your Company Name" />
                                        {errors.company && <span className="error-message red">{errors.company}</span>}
                                    </div>
                                    <div className="input-box mb--20">
                                        <input type="text" name="desigination" id="designation" onChange={handelChange} className="designation" placeholder="Enter your Designation" />
                                        {errors.desigination && <span className="error-message red">{errors.desigination}</span>}
                                    </div>
                                    <div className="input-box mb--20">
                                        <select name="course" id="courses" className="courses valid" aria-invalid="false" onChange={handelChange}>
                                            <option>Select Course</option>
                                            {state && state.map((el, i) => (
                                                <option key={i} value={el.id}>{el.name}</option>
                                            ))}
                                        </select>
                                        {errors.course && <span className="error-message red">{errors.course}</span>}
                                    </div>
                                    {/* <Tnc id={"checkbox-2"}></Tnc> */}
                                    <div className="input-box mb--20">
                                        <input type="checkbox" id="checkbox-2" name="checkbox" checked={field.checkbox} onChange={(e) => setField({ ...field, checkbox: e.target.checked })} />
                                        <label htmlFor="checkbox-2">I accept the <Link href="/termsandcondition">Terms &#38; Conditions</Link>.</label>
                                        {errors.checkbox && <span className="error-message red">{errors.checkbox}</span>}
                                    </div>
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
