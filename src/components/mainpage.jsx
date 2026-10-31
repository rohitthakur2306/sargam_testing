import "../index.css";
// import logo from "../assests/logo.png";
import Navbar from "./landingpage/Navbar";
import Hero from "./landingpage/hero";
import WhySargamHealthcare from "./landingpage/Whysargam";
import HealthcareServices from "./landingpage/HealthcareServices";
import Doctors from "./landingpage/Doctors";
import HealthcareFacilities from "./landingpage/HealthcareFacilities";
import Testimonials from "./landingpage/Testimonials";
import AppointmentCTA from "./landingpage/AppointmentCTA";
import Footer from "../components/landingpage/Footer";
export default function Home() {
  return (
    <div className="home">
      <div className="topbar">
        <p>24/7 Emergency Care • +91 9354030578</p>
        <p>sargamheathcarereception@gmail.com</p>
      </div>

      <Navbar />

      <Hero />

      <WhySargamHealthcare />
      <Doctors />
      <HealthcareFacilities />

      <HealthcareServices />

      <Testimonials />

      <AppointmentCTA />

      <Footer />
    </div>
  );
}
