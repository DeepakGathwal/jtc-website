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
                    <div class="container checkout-page-style">
                        <div class="login-form-box">
                            <form class="login-form" onSubmit={handelSubmit} id="batches1">
                                <div class="input-box mb--20">
                                    <input type="text" id="batches" name="batches" value={course} readonly />
                                </div>
                                <div class="input-box mb--20">
                                    <input type="text" placeholder="Name" id="name4" name="name" onChange={handelChange} required />
                                </div>
                                <div class="input-box mb--20">
                                    <input type="tel" id="phone4" class="phone-input" name="phone" onChange={handelChange}
                                        placeholder="Mobile Number" required />
                                </div>
                                <Tnc id={"checkbox-4"} />
                                <button class="rn-btn edu-btn w-100 mb--20" type="submit">
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
