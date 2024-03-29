import React, { useState, useRef } from 'react';
import Tnc from './tnc';
import { brochureForm } from '@/apis/apis';

const SyllybusDownload = ({ coursename, toast }) => {
    const [field, setField] = useState({
        name: "", phone: "", course: coursename
    });
    const [errors, setErrors] = useState({
        name: "", phone: "", checkbox: ""
    });
    const formRef = useRef(null); // Ref for form element (optional)

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(field.name)) {
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

    const submitForm = async (e) => {
        e.preventDefault();
        if (validateForm()) {
         
                field.course = coursename
                await  brochureForm(field).then(() => {
   
                    // Reset form fields
                    
                 
                    // Optional: Clear form elements (for browsers with caching issues)
                    const form = formRef.current;
                    if (form) {
                        form.reset()
                      return  toast("Syllabus Download Sussessfull")
                    }
                })
        }
    };

    return (
        <>
        <div className="col-md-4" id="downloadSyllabus">
            <div className="edu-card card-type-7 radius-small">
                <div className="inner">
                    <div className="container checkout-page-style" style={{ padding: "0" }}>
                        <div className="login-form-box">
                            <h6 className="mb-30">Download Curriculum</h6>
                            <form className="login-form" onSubmit={submitForm} id="downloadSyllabus_java" ref={formRef}>
                                <div className="input-box mb--20">
                                    <input type="text" placeholder="Name" name="name" id="name7" onChange={handelChange} />
                                    {errors.name && <span className="error-message red">{errors.name}</span>}
                                </div>
                                <div className="input-box mb--20">
                                    <input type="tel" id="phone7" className="phone-input" name="phone"
                                        placeholder="Mobile Number" onChange={handelChange} />
                                    {errors.phone && <span className="error-message red">{errors.phone}</span>}
                                </div>
                                <Tnc id={"checkbox-7"}  field={field} setField={setField} errors={errors} />
                        
                                <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                                    <span>Download Curriculum</span>
                                </button>
                            </form>
                            <div className="text-center" id="message"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
        </>
    );
}

export default SyllybusDownload;
