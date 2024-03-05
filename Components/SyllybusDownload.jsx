import React, { useState } from 'react'
import Tnc from './tnc';
import { brochureForm } from '@/apis/apis';

const SyllybusDownload = ({coursename}) => {
    const [field,setField] = useState({
        name  :"", phone : "", course : coursename
    })

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value })
      }
    const submitForm = async(e) => {
        e.preventDefault()
        const data =  await  brochureForm(field)
        e.preventDefault()

    }

  return (
    <div className="col-md-4" id="downloadSyllabus">
    <div className="edu-card card-type-7 radius-small">
        <div className="inner">
            <div className="container checkout-page-style" style={{padding:"0"}}>
                <div className="login-form-box">
                    <h6 className="mb-30">Download Curriculum</h6>
                    <form className="login-form" onSubmit={submitForm} id="downloadSyllabus_java">
                        <div className="input-box mb--20">
                            <input type="text" placeholder="Name" name="name" id="name7"onChange={handelChange}  required/>
                        </div>
                        <div className="input-box mb--20">
                            <input type="tel" id="phone7"  className="phone-input" name="phone"
                                placeholder="Mobile Number" onChange={handelChange} required/>
                        </div>
                        <Tnc id = {"checkbox-7"}/>
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
