import React from 'react'
import './body3.css';
import InvestItem from './InvestItem';

const Body3 = () => {
  return (
    <div className='body3'>
      <h1>Fractional Investment Properties</h1>
      <p>These are specially curated Aasthy-exclusive fractional investment opportunities.</p>
      <div className="invest-items-container">

        <div className="invest-items">
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
          <InvestItem />
        </div>
      </div>
      
    </div>
  )
}

export default Body3