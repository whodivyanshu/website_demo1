import React from 'react';
import "./InvestItem.css";

const InvestItem = (props) => {

  const { funded, generatereturns, image, investment, investors, location, name, returns, percentagefunded } = props;
  const investImgStyle = {
    backgroundImage: `url("${image}")`
  };

  return (
    <div className="invest-item">
      <div className="invest-img" style={investImgStyle}>
        <h6 style={{color: "white", fontSize: "10px", padding: "10px", fontFamily: "monospace"}}>{name}<br />
{location}</h6>
      </div>
      <p style={{ padding: "0px 10px" }}>1 Unit</p>
      <hr className='hr' />
      <div className="item-dis">
        <h6>Min. investment: ₹{investment}</h6>
        <p>Funded: ₹{funded} ({percentagefunded}%)</p>
        <hr className='hrr' />
        {generatereturns ? (
          <h5>GENERATING RETURNS</h5>
        ) : (
          <h5>FULLY REFUNDED</h5>
        )}
      </div>
      <hr className='hr' />
      <div className="item-invest">
        <div className="invest-left">
          
            <span style={{fontFamily: "inherit"}}>Investors <br />  <span style={{fontWeight: "bold"}} >{investors}</span></span>
        </div>
        <div className="invest-right">
        <span style={{fontFamily: "inherit"}} >Returns (CAGR)
 <br /> <span style={{fontWeight: "bold"}} >{returns}%</span></span>

        </div>
      </div>

    </div>
  )
}

export default InvestItem