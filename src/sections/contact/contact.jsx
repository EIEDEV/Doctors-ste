import React from "react";
import "./contact.css";
import Logo from "../../assests/IMG-20230623-WA0003.jpg";
import { CiLocationOn } from "react-icons/ci";
import { BsInfoCircle, BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BiLogIn } from "react-icons/bi";

import { FcPrivacy } from "react-icons/fc";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="name">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="locatio">
            <div className="location">
              <h6>
                <CiLocationOn />
              </h6>
              <p>5, Olukoya Street, Lagos, Nigeria</p>
            </div>
            <div className="location">
              <h6>
                <BsTelephone />
              </h6>
              <p>000-000-0000</p>
            </div>
            <div className="location">
              <h6>
                <TfiEmail />
              </h6>
              <p>healthcheck@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="Account">
          <h4>Account</h4>
          <div className="location">
            <h6>
              <BiLogIn />
            </h6>
            <p>Sign-in</p>
          </div>
        </div>
        <div className="about">
          <h4>Company</h4>
          <div className="location">
            <h6>
              <BsInfoCircle />
            </h6>
            <p>Hospital Info</p>
          </div>
        </div>
        <div className="Resources">
          <h4>Resources</h4>
          <div className="location">
            <h6>
              <FcPrivacy />
            </h6>
            <p>Security Privacy & Terms</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
