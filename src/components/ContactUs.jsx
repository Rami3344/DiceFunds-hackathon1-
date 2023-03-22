import React from 'react'
import contLog from"./Content/contLog.png"
function ContactUs() {
  
  return (
    <div className='contact' id='contact'>
        <div className='contact-logo'>
          <img src={contLog} alt="" />
        </div>
        <h2>Contact Us!</h2>
        <div className='socials'>
          <h3>Our Socials:</h3>
          <p>E-mail: dicefunds@fake.com</p>
          <p>Phone: +216 99 999 999</p>
          <p>Address:Route De Tunis Km6,<br/>Sakiet Ezzit,<br/>Sfax, Tunisia</p>
        </div>
        <div className='inpts'>
        <input type="text" placeholder='Full Name'/>
        <input type="number" placeholder='Phone Number' />
        <input type="email" placeholder='E-Mail' />
        <textarea name="" id="" placeholder='Your Message' cols="20" rows="5"></textarea>
        <button>Send !</button>
        </div>
    </div>
  )
}

export default ContactUs