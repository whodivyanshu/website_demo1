import React from 'react';
import './navbar.css';


const Navbar = () => {
  const imgsrc = "data:image/png;base64,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"
  return (

    <nav className="navbar">
      <div className="navbar-logo">
        <img src={imgsrc} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item" style={{color: "#4e0668", fontWeight:"bold" }}>Home</li>
        <li className="navbar-menu-item">Investments</li>
        <li className="navbar-menu-item">Heatmap</li>
        <li className="navbar-menu-item dropdown">
            <a href="/" className='dropdown-toggle'>More ▼</a>
          <ul className="dropdown-menu">
            <li className="dropdown-menu-item">Option 1</li>
            <li className="dropdown-menu-item">Option 2</li>
            <li className="dropdown-menu-item">Option 3</li>
          </ul>
        </li>

        
        <li className='navbar-btn navbar-menu-item' style={{color: "#4e0668"}}> <img id='imgg' width="20" height="20"  src="https://img.icons8.com/fluency-systems-regular/48/4E0668/gift--v1.png" alt="gift--v1"/> Refer & Earn</li>
        <li className="navbar-menu-item"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/4E0668/headset.png" alt="headset"/></li>
        <li className="navbar-menu-item userid">
            D
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
