import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';
import { allRoles, joinUsForm } from '@/apis/apis';

const JoinUs = ({joinForm,setjoinForm}) => {
    const [field, setField] = useState({
        name : "", phone : "", role : "",  email : ""
    })
    const hireclose = async () => {
        setjoinForm(false)
    }

    const handelChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value })
      }
    const [state, setState] = useState([])

    const allData = async () => {
        const {data} = await allRoles()
        
        if (data.length > 0) setState(data)
    }
    useEffect(() => {
        allData()
    },[])
    
    const handelSubmit = async(e) => {
        e.preventDefault()
        const data = await joinUsForm(field)
        e.preventDefault()
          setField("")
          alert(data.message)
          return setjoinForm(false) 
    }

  return (
    <>
    <Modal show={joinForm} onHide={() => hireclose()}>

    <Modal.Header closeButton>
    <h6 className="mb-30">Join Us Today</h6>
    </Modal.Header>
    <Modal.Body>
    <div class="popup-content">
            <section class="contact">
                
                <div class="content">
                    <div class="form">
                        <div class="container checkout-page-style" style={{padding:0}}>
                            <div class="login-form-box">
                               <form class="login-form" onSubmit={handelSubmit} id="registrationForm2">
                                    <div class="input-box mb--20">
                                        <input type="text" name="name" id="name3" class="name" onChange={handelChange} placeholder="Enter your name"
                                            required/>
                                    </div>
                                    <div class="input-box mb--20">
                                        <input type="tel" id="phone3" name="phone" class="phone-input" onChange={handelChange}
                                            placeholder="Enter your Mobile" required/>
                                    </div>
                                    <div class="input-box mb--20">
                                        <select name="role" id="vacancy" class="hiring_profile" onChange={handelChange} required>
                                            <option value="">Select Profile</option>
                                            {state && state.map((el, i) => (
                                <option key={i} value={el.id}>{el.role}</option>
                            ))}
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
