import React from 'react'
import "./InvestItem.css";

const InvestItem = () => {
  return (
    <div className="invest-item">
      <div className="invest-img">
        <h6 style={{color: "white", fontSize: "10px", padding: "10px", fontFamily: "monospace"}}>Hebron Avenue <br />
Bangalore</h6>
      </div>
      <p style={{ padding: "0px 10px" }}>1 Unit</p>
      <hr className='hr' />
      <div className="item-dis">
        <h6>Min. investment: ₹5,000</h6>
        <p>Funded: ₹1,17,05,000 (100%)</p>
        <hr className='hrr' />
        <h5>GENERATING RETURNS</h5>
      </div>
      <hr className='hr' />
      <div className="item-invest">
        <div className="invest-left">
          
            <span style={{fontFamily: "fantasy"}}>Investors <br />  <span style={{fontWeight: "bold"}} >160</span></span>
        </div>
        <div className="invest-right">
        <span style={{fontFamily: "fantasy"}} >Returns (CAGR)
 <br /> <span style={{fontWeight: "bold"}} >13.75%</span></span>

        </div>
      </div>

    </div>
  )
}

export default InvestItem