import React, { useState } from "react";
import "./doctors.css";
import Data from "./data";

const Doctors = () => {
  const [doctorsMenu, setdoctorsMenu] = useState(Data);

  const filter = (title) => {
    setdoctorsMenu(Data.filter((doctor) => doctor.title === title));
  };

  return (
    <section id="doctors">
      <h2>OUR DOCTORS</h2>
      <div className="container doctors-container">
        <div className="left-side">
          <ul>
            <li onClick={() => setdoctorsMenu(Data)}>All</li>
            <li onClick={() => filter("Neurologist")}>Neurologist</li>
            <li onClick={() => filter("Radiologist")}>Radiologist</li>
            <li onClick={() => filter("Psychatrist")}>Psychatrist</li>
            <li onClick={() => filter("Dermatologist")}>Dermatologist</li>
            <li onClick={() => filter("Otolaryngologist")}>Otolaryngologist</li>
            <li onClick={() => filter("Ophthalmologist")}>Ophthalmologist</li>
            <li onClick={() => filter("Nephrologist")}>Nephrologist</li>
            <li onClick={() => filter("Cardiologist")}>Cardiologist</li>
            <li onClick={() => filter("Gynecologist")}>Gynecologist</li>
            <li onClick={() => filter("Pediatrician")}>Pediatrician</li>
          </ul>
        </div>
        <div className="right-side">
          {doctorsMenu.map((item) => (
            <div className="right-side-in" key={item.id}>
              <div className="photos">
                <div className="colors"></div>
                <img src={item.images} alt="Doctors Image" />
              </div>
              <div className="details">
                <h5>{item.name}</h5>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

//       </div>
//     </section>
