import React from 'react'

const JoinUs = () => {
  return (
    <>
    <Modal show={show} onHide={() => hireclose()}>

    <Modal.Header closeButton>
    <h3 className="mb-30">Partner with Us for Hiring</h3>
    </Modal.Header>
    <Modal.Body>
    <div class="popup-content">
            <section class="contact">
                <div class="content">
                    <div class="form">
                        <div class="container checkout-page-style" style="padding:0">
                            <div class="login-form-box">
                                <h5 class="mb-30 text-center">Join Us Today</h5>
                                <form class="login-form" onsubmit="event.preventDefault(); sendMail('registrationForm2'); reset(); return false;" id="registrationForm2">
                                    <div class="input-box mb--20">
                                        <input type="text" name="name" id="name3" class="name" placeholder="Enter your name"
                                            required/>
                                    </div>
                                    <div class="input-box mb--20">
                                        <input type="tel" id="phone3" name="phone" class="phone-input"
                                            placeholder="Enter your Mobile" required/>
                                    </div>
                                    <div class="input-box mb--20">
                                        <select name="Vacancies" id="vacancy" class="hiring_profile" required>
                                            <option value="">Select Profile</option>
                                            <option value="Content Writter">Content Writter</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Quality Analyst">Quality Analyst</option>
                                            <option value="SME (Trainer)">SME (Trainer)</option>
                                            <option value="SEO Specialist">SEO Specialist</option>
                                        </select>
                                    </div>
                                    <Tnc id = {"checkbox-3"}></Tnc>
                                    <button class="rn-btn edu-btn w-100 mb--20" type="submit">
                                        <span>Join Now</span>
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

export default JoinUs
