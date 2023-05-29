import React from 'react'
import './body1.css';
const Body1 = () => {
  return (
    <div className='body1'>
        <div className="left">
            <h1>We are now live on <br />
Playstore and Appstore!</h1>
<p>Tracking your investments got <br />
a whole lot easier!</p>
        </div>
        <div className="mid">
            <button className='appbtn'> <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/google-play--v1.png" alt="google-play--v1"/> Google Play</button>
            <button className='appbtn' > <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/mac-os.png" alt="mac-os"/>App Store</button>
        </div>
        <div className="right">
            <img src="https://aasthy.com/static/media/aasthy-app-props-desktop.c5e1c3c6.png" alt="" />
        </div>
    </div>
  )
}

export default Body1