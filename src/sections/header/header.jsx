import "./header.css";
import React from "react";
import HeaderImage from "../../assests/doc.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="small-sides">
          <h3>Make Health Your Priority</h3>
          <div className="equipment">
            <h2>Trendy Equipment</h2>
            <p>
              We are adopting telemedicine equipmentto facilitate remote patient
              consultation making healthcare more accessible and convenient
            </p>
          </div>
        </div>

        <div className="headerimage">
          <div className="cicle"></div>
          <img src={HeaderImage} alt="Header Image" />
        </div>

        <div className="small-sides">
          <div className="doc-number">
            <h2>Over 400+</h2>
            <span>Doctors and Nurses</span>
          </div>
          <div className="patient-number">
            <h2>Over 1k</h2>
            <span>Happy Patients</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
