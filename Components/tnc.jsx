import React from 'react'
import Link from 'next/link'

const Tnc = ({id}) => {
  return (
    <div className="comment-form-consent input-box mb--20">
        <label><input id={id} type="checkbox" required className='termChecked'/></label>
        <label htmlFor={id}>I have reviewed all &nbsp;<Link href="/termsandcondition">Terms &#38; Conditions</Link>.</label>
    </div>
  )
}

export default Tnc
