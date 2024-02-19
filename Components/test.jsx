import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function Test({show, setShow}) {
    const handelClose = async() => {
        setShow(false)
    }
  return (
    <>
          <Modal show={show} onHide={() => handelClose()}>

    <Modal.Header closeButton>
    <h3 class="mb-30">Get in Touch</h3>
      <Modal.Title>

      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div class="popup-content">
    <section class="contact">
    <div class="content">
    <div class="form">
    <div class="container checkout-page-style" style={{padding:'0'}}>
    <div class="login-form-box">
    <form class="login-form" onsubmit="event.preventDefault(); sendMail('contactForm'); reset(); return false;"
    method="post">
    <div class="input-box mb--20">
    <input type="text" placeholder="Name" name="name1" id="name1" required />
    </div>
    <div class="input-box mb--20">
    <input type="tel" id="phone1" class="phone-input" name="phone1"
    placeholder="Mobile Number" required />
    </div>
    <div class="input-box mb--20">
    <select name="courses" id="courses" class="courses valid" required
    aria-invalid="false">
    <option value="">Select Course</option>
    <option value="Java">Java Full Stack</option>
    <option value="Front End">Front End</option>
    
    </select>
    </div>
    <div class="comment-form-consent input-box mb--20">
    <input id="checkbox-1" type="checkbox" required />
    <label htmnlFor="checkbox-1">I have reviewed all <a href="termsandcondition.php"
    target="_blank"> Terms and Conditions</a>.</label>
    </div>
    <button class="rn-btn edu-btn w-100 mb--20" type="submit">
    <span>Enquire Now</span>
    </button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>

</Modal.Body>

</Modal>



    </>
  )
}
