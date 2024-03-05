import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';
import { batchForm } from '@/apis/apis';


const Batchenroll = ({ show, setShow, id, course }) => {
    const [field, setField] = useState({
        name: "", phone: "", email: "", id: id
    })

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value })
    }
    const handelSubmit = async (e) => {
        e.preventDefault()

        const data = await batchForm(field)
        e.preventDefault()
        setField("")
        alert(data.message)
        return setShow(false)
    }

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
                                    <input type="text" id="batches" name="batches" value={course} readonly />
                                </div>
                                <div className="input-box mb--20">
                                    <input type="text" placeholder="Name" id="name4" name="name" onChange={handelChange} required />
                                </div>
                                <div className="input-box mb--20">
                                    <input type="tel" id="phone4" className="phone-input" name="phone" onChange={handelChange}
                                        placeholder="Mobile Number" required />
                                </div>
                                <Tnc id={"checkbox-4"} />
                                <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                                    <span>Enroll Now</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Batchenroll
