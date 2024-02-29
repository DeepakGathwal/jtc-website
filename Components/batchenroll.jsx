import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';


const Batchenroll = ({ show, setShow }) => {
    
    const batchenrollclose = async () => {
        setShow(false)}
  return (
    <>
      <Modal show={show} onHide={() => batchenrollclose()}>

        <Modal.Header closeButton>
        <h5 className="mb-30">Enroll Now: Secure Your Spot!</h5>
        </Modal.Header>
        <Modal.Body>
                            <div class="container checkout-page-style">
                                <div class="login-form-box">
                                    <form class="login-form" onsubmit="event.preventDefault(); sendMail('batches1'); reset(); return false;" id="batches1">
                                        <div class="input-box mb--20">
                                            <input type="text" id="batches" name="batches" readonly/>
                                        </div>
                                        <div class="input-box mb--20">
                                            <input type="text" placeholder="Name" id="name4" name="name4" required/>
                                        </div>
                                        <div class="input-box mb--20">
                                            <input type="tel" id="phone4" class="phone-input" name="phone"
                                                placeholder="Mobile Number" required/>
                                        </div>
                                        <Tnc id = {"checkbox-4"}/>
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
