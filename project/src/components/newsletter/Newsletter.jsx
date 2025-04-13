import React from 'react'
import "./Newsletter.css"
import { IoMdSend } from 'react-icons/io'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
      <h1 className='newsletter-title'>Newsletter</h1>
      <div className="newsletter-desc">What's Fresh and New: udates</div>
      <div className="input-container">
        <input type="text" className='newsletter-input' placeholder='Your email' />
        <button className='newsletter-button'>
            <IoMdSend className='icon'/>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
