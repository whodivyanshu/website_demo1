import React from 'react'
import './body2.css';

const Body2 = () => {
    return (
        <div className='body21'>

            <div className='body2'>
                <div className="left1">
                    <h1>Making real estate <br /> investments

                        <span style={{ color: "#4e0668" }}>  Transparent</span>

                    </h1>
                    <p>12-18% returns <br />
                        starting from only ₹5,000</p>
                    <button>Explore Opportunities</button>
                </div>
                <div className="right1">
                    <img src="https://aasthy.com/static/media/hero-location-image.72e4d501.svg" alt="" />
                </div>

            </div>
            <div className="body22" style={{display: "flex", justifyContent: "space-between"}}>
                <div >

                    <ul>
                        <li>50M+
                            <br />
                            Data Points</li>
                        <li>
                            98% <br />
                            Data Accuracy
                        </li>
                    </ul>
                </div>
                <div >
                    <ul>

                        <li>300+ <br />
                            Cities</li>

                        <li>500+ <br />
                            Investors</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body2