import React from 'react'
import donation from "./Content/Donate.png"
import rambo from "./Content/rambo.png"
import charfi from "./Content/charfi.png"
import ammar from "./Content/ammar.png"
function AboutUs() {
  return (
    <div>
        <div className='about' id='about'>
        <h1>Who Are We?</h1>
        <div className='members'>
            <div className='memb1' >
            <img src={rambo}/>
                <h2>Rami Tounsi</h2>
                <p>Web Developer<br /> Sfax, TN</p>
            </div>
            <div className='memb2' >
            <img src={charfi}/>
                <h2>Aziz Charfi</h2>
                <p>Designer <br /> Sfax, TN</p>
            </div>
            <div className='memb3' >
            <img src={ammar}/>
                <h2>Aziz Ammar</h2>
                <p>Web Developer<br /> Sfax, TN</p>
            </div>
        </div>
        </div>
        <div className='whatis'>
        <img src={donation} alt="" />
            <h2>What is DiceFunds ?</h2>
            <p><span style={{
                fontWeight:"bold"
            }}>DiceFunds</span> is a website that you can play activities automatically generates donations from ads for charities whom helps to avoid poverty. <br />
            The Donator also can donate money directly to our fondations.</p>
            
        </div>

    </div>
  )
}

export default AboutUs