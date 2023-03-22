import React from 'react'
import don from "./Content/don.png"
function Donation() {
  return (
    <div className='donation' id='donation'>
        <h1>Donate To Poverty Charities</h1>
        <div className='foundation'>
          <div className='found1'>
            <img src={don} alt="" />
            <h2>MTC Foundation</h2>
          </div>
          <div className='found2'>
            <img src={don} alt="" />
            <h2>MTC Foundation</h2>
          </div>
          <div className='found3'>
            <img src={don} alt="" />
            <h2>MTC Foundation</h2>
          </div>
          <div className='found4'>
            <img src={don} alt="" />
            <h2>MTC Foundation</h2>
          </div>

        </div>
    </div>
  )
}

export default Donation