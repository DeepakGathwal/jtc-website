import React from 'react'

const SyllybusDownload = () => {
  return (
    <div className="col-md-4" id="downloadSyllabus">
    <div className="edu-card card-type-7 radius-small">
        <div className="inner">
            <div className="container checkout-page-style" style={{padding:"0"}}>
                <div className="login-form-box">
                    <h6 className="mb-30">Download Curriculum</h6>
                    <form className="login-form" onsubmit="DownloadSyllabusjava(); reset(); return false;" id="downloadSyllabus_java">
                        <div className="input-box mb--20">
                            <input type="text" placeholder="Name" name="name7" id="name7" required/>
                        </div>
                        <div className="input-box mb--20">
                            <input type="tel" id="phone7" className="phone-input" name="phone"
                                placeholder="Mobile Number" required/>
                        </div>
                        <div className="comment-form-consent input-box mb--20">
                        <label><input id="checkbox-7" type="checkbox" required/></label>
                            <label htmlFor="checkbox-7"> I have reviewed all <a
                                    href="termsandcondition.html" target="_blank"> Terms and
                                    Conditions</a>.</label>
                        </div>
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
  )
}

export default SyllybusDownload
