import React, { useState } from 'react'
import click from "./Content/Click.png"
import guess from "./Content/Guess.png"
import mathe from "./Content/Math.png"
import ad1 from "./Content/ad1.png"
import ad2 from "./Content/ad2.png"
import panda from "./Content/panda.JPG"
function Activities() {
  const[num1,setNum1]= useState(Math.floor(Math.random()*10))
  const[num2,setNum2]= useState(Math.floor(Math.random()*10))
  var clicks = 0;
  function laclick() {
      clicks++;
      if (clicks <= 350) {
          document.getElementById("clicks").innerHTML = clicks;}
  };

  function handleRes(){
    var inpt = document.getElementById("inpt").value
    console.log(num1*num2)
    if(num1*num2 == inpt){
      alert("good job!")
    }else{
      alert("Try again!")
    }
  }
  function handlePanda(){
    var panda = document.getElementById("panda").value
    if(panda =="panda"){
      alert("Good job !")
    }else{
      alert("Try again !")
    }
  }
  function handlePause(id){
    id.style.animationPlayState = 'paused'
  }
  
  return (
    <div>
    <div className='activities' id='activities'>
      <h1>Activities</h1>
      <div className='activity'>
        <div className='act1'>
          <img src={guess} alt="" />
          <button><a href='#guess'>Guess The Animal</a></button>
        </div>
        <div className='act2'>
        <img src={mathe} alt="" />
        <button><a href='#math'>Mathematics</a></button>
        </div>
        <div className='act3'>
        <img src={click}/>
        <button><a href='#click'>Clicker</a></button>
        </div>
       </div>
       <div className='roll-dice'>
        <h1>Roll the dice to play <br/> one of the three activities randomly!</h1>
        <div className='dices'>
  <a href="#click"><div className='dice1' id='dice1' onClick={()=>handlePause(document.getElementById("dice1"))}><p>Clicker</p></div></a>
  <a href="#math"> <div className='dice2' id='dice2' onClick={()=>handlePause(document.getElementById("dice2"))}><p>Mathematics</p></div></a>
  <a href="#guess"> <div className='dice3' id='dice3' onClick={()=>handlePause(document.getElementById("dice3"))}><p>Guess The Animal</p></div></a>
        </div>
       </div>
      </div>
      <div className='acts'>
      <div className='activitie1' id='guess'>
      <h2>Guess The Animal</h2>
        <div className='ad1'>
          <img src={ad1} alt="" />
        </div>
        <div className='ad2'>
          <img src={ad2} />
        </div>
        <div className='content1'>
          <img src={panda} />
          <input type="text" id='panda' />
          <button onClick={handlePanda}>Check Answer</button>
        </div>
      </div>
      <div className='activitie2' id='math'>
      <h2>Mathematics</h2>
        <div className='ad3'>
          <img src={ad1} alt="" />
        </div>
        <div className='ad4'>
          <img src={ad2} alt="" />
        </div>
        <div className='content2'>
          <p><span id='a'>{num1}</span> X <span id='b'>{num2}</span></p>
          <input type="number" id='inpt' />
          <button onClick={handleRes}>Check Answer</button>
        </div>
      </div>
      <div className='activitie3' id='click'>
      <h2>Clicker</h2>
        <div className='ad5'>
          <img src={ad1} alt="" />
        </div>
        <div className='ad6'>
          <img src={ad2} alt="" />
        </div>
        <div className='content3'>
        <p>Clicks: <a id="clicks">0</a></p>
        <button onClick={laclick}>click here!</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Activities