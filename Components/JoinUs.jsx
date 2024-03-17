import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';

import { allRoles, joinUsForm } from '@/apis/apis';
import Link from 'next/link';

const JoinUs = ({ joinForm, setjoinForm }) => {
    const [field, setField] = useState({
        name: "",
        phone: "",
        role: "",
        email: ""
    });
    const [errors, setErrors] = useState({});
    const [state, setState] = useState([]);

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(field.name)) {
            newErrors.name = "Name should contain alphabets only.";
            isValid = false;
        }

        // Phone validation
        if (!/^\d{10}$/.test(field.phone)) {
            newErrors.phone = "Please enter a valid 10-digit phone number.";
            isValid = false;
        }

        // Role validation
        if (!field.role) {
            newErrors.role = "Please select a profile.";
            isValid = false;
        }

        // Checkbox validation
        if (!field.agree) {
            newErrors.agree = "Please agree to the terms and conditions.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const hireclose = async () => {
        setjoinForm(false);
    };

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value });
    };

    const allData = async () => {
        const {data} = await allRoles()
        return data && setState(data);
    }
    useEffect(() => {
        allData();
    }, []);

    const handelSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = await joinUsForm(field);
            setField("");
            toast(data.message);
            setjoinForm(false);
        }
    };

    return (
        <>
            <Modal show={joinForm} onHide={() => hireclose()}>
                <Modal.Header closeButton>
                    <h6 className="mb-30">Join Us Today</h6>
                </Modal.Header>
                <Modal.Body>
                    <div className="popup-content">
                        <section className="contact">
                            <div className="content">
                                <div className="form">
                                    <div className="container checkout-page-style" style={{ padding: 0 }}>
                                        <div className="login-form-box">
                                            <form className="login-form" onSubmit={handelSubmit} id="registrationForm2">
                                                <div className="input-box mb--20">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name3"
                                                        className="name"
                                                        onChange={handelChange}
                                                        placeholder="Enter your name"
                                                    />
                                                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                                                </div>
                                                <div className="input-box mb--20">
                                                    <input
                                                        type="tel"
                                                        id="phone3"
                                                        name="phone"
                                                        className="phone-input"
                                                        onChange={handelChange}
                                                        placeholder="Enter your Mobile"
                                                    />
                                                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                                                </div>
                                                <div className="input-box mb--20">
                                                    <select
                                                        name="role"
                                                        id="vacancy"
                                                        className="hiring_profile"
                                                        onChange={handelChange}
                                                    >
                                                        <option value="">Select Profile</option>
                                                        {state && state.map((el, i) => (
                                                            <option key={i} value={el.id}>{el.role}</option>
                                                        ))}
                                                    </select>
                                                    {errors.role && <span style={{ color: 'red' }}>{errors.role}</span>}
                                                </div>
                                                {/* <Tnc id="checkbox-3"></Tnc> */}
                                                <div className="input-box mb--20">
                                                    <input
                                                        type="checkbox"
                                                        name="agree"
                                                        id="agree"
                                                        onChange={handelChange}
                                                    />
                                                    <label htmlFor="agree">I agree to the <Link href="/termsandcondition">Terms &#38; Conditions</Link>.</label>
                                                    {errors.agree && <span style={{ color: 'red' }}>{errors.agree}</span>}
                                                </div>
                                                <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                                                    <span>Join Now</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <ToastContainer/>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default JoinUs;
