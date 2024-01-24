import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./sections/header/header";
import Navbar from "./sections/navbar/navbar";
import Specialty from "./sections/specialty/specialty";
import Doctors from "./sections/doctors/doctors";
import Healthcare from "./sections/healthcare/healthcare";
import Ward from "./sections/wards/ward";
import Contact from "./sections/contact/contact";
import Review from "./sections/review/review";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Specialty />
      <Doctors />
      <Healthcare />
      <Ward />
      <Review />
      <Contact />
    </>
  );
}

export default App;
