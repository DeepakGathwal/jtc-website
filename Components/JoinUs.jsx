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
        
        // if (data.length > 0)
         setState(data)
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
    <div className="popup-content">
            <section className="contact">
                
                <div className="content">
                    <div className="form">
                        <div className="container checkout-page-style" style={{padding:0}}>
                            <div className="login-form-box">
                               <form className="login-form" onSubmit={handelSubmit} id="registrationForm2">
                                    <div className="input-box mb--20">
                                        <input type="text" name="name" id="name3" className="name" onChange={handelChange} placeholder="Enter your name"
                                            required/>
                                    </div>
                                    <div className="input-box mb--20">
                                        <input type="tel" id="phone3" name="phone" className="phone-input" onChange={handelChange}
                                            placeholder="Enter your Mobile" required/>
                                    </div>
                                    <div className="input-box mb--20">
                                        <select name="role" id="vacancy" className="hiring_profile" onChange={handelChange} required>
                                            <option value="">Select Profile</option>
                                            {state && state.map((el, i) => (
                                <option key={i} value={el.id}>{el.role}</option>
                            ))}
                                        </select>
                                    </div>
                                    <Tnc id = {"checkbox-3"}></Tnc>
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

    </Modal.Body>

    </Modal>
      
    </>
  )
}

export default JoinUs
