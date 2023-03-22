import React from 'react'
import d1 from "./Content/DiceOne.png"
import d2 from "./Content/DiceTwo.png"
function Home() {
    
  return (
    <div className='home' id='home'>
        <p id='roll'>Roll The <span style={{
            fontFamily:"Montserrat Medium",
            color:"#6eee8b"
        }}>Dice</span>!<br /> For <span style={{
            fontFamily:"Montserrat Medium",
        }}>Fund</span></p>
        <div className='dices'>
          <img src={d1} className="d1" alt="" />
          <img src={d2} className="d2" alt="" />
        </div>
    </div>
  )
}

export default Home