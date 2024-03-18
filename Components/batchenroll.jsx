import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';
import { ToastContainer, toast } from 'react-toastify';
import { batchForm } from '@/apis/apis';


const Batchenroll = ({ show, setShow, id, course }) => {
    const [field, setField] = useState({
        name: "", phone: "", email: "", id: id
    });
    const [errors, setErrors] = useState({
        name: "", phone: "", checkbox: ""
    });

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

    const handelSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = await batchForm(field);
            setField({
                name: "", 
                phone: "",
                email: "",
                id: id
            });
            toast(data.message);
            setShow(false);
        }
    };

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>

                <Modal.Header closeButton>
                    <h5 className="mb-30">Enroll Now: Secure Your Spot!</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="container checkout-page-style">
                        <div className="login-form-box">
                            <form className="login-form" onSubmit={handelSubmit} id="batches1">
                                <div className="input-box mb--20">
                                    <input type="text" id="batches" name="batches" value={course} readOnly className='cursornodrop'/>
                                </div>
                                <div className="input-box mb--20">
                                    <input type="text" placeholder="Name" id="name4" name="name" onChange={handelChange} />
                                    {errors.name && <span className="error-message red">{errors.name}</span>}
                                </div>
                                <div className="input-box mb--20">
                                    <input type="tel" id="phone4" className="phone-input" name="phone" onChange={handelChange}
                                        placeholder="Mobile Number" />
                                    {errors.phone && <span className="error-message red">{errors.phone}</span>}
                                </div>
                                <Tnc id={"checkbox-4"} field={field} setField={setField} errors={errors}/>
                               
                                <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                                    <span>Enroll Now</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
                    <ToastContainer/>
        </>
    );
}

export default Batchenroll;
