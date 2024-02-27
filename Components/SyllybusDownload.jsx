import React from 'react'

const SyllybusDownload = () => {
  return (
    <div class="col-md-4" id="downloadSyllabus">
    <div class="edu-card card-type-7 radius-small">
        <div class="inner">
            <div class="container checkout-page-style" style={{padding:"0"}}>
                <div class="login-form-box">
                    <h6 class="mb-30">Download Curriculum</h6>
                    <form class="login-form" onsubmit="DownloadSyllabusjava(); reset(); return false;" id="downloadSyllabus_java">
                        <div class="input-box mb--20">
                            <input type="text" placeholder="Name" name="name7" id="name7" required/>
                        </div>
                        <div class="input-box mb--20">
                            <input type="tel" id="phone7" class="phone-input" name="phone"
                                placeholder="Mobile Number" required/>
                        </div>
                        <div class="comment-form-consent input-box mb--20">
                        <label><input id="checkbox-7" type="checkbox" required/></label>
                            <label for="checkbox-7"> I have reviewed all <a
                                    href="termsandcondition.html" target="_blank"> Terms and
                                    Conditions</a>.</label>
                        </div>
                        <button class="rn-btn edu-btn w-100 mb--20" type="submit">
                            <span>Download Curriculum</span>
                        </button>
                    </form>
                    <div class="text-center" id="message"></div>
                </div>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default SyllybusDownload