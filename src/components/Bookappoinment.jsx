import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";

import "./BookAppointment.css";

import heroImage from "../assests/alldoctorsimage.jpeg";

import drRohit from "../assests/rohittiwari.png";
import drNeeraj from "../assests/NeerajJha.png";
import drLokesh from "../assests/lokeshGarg.png";
import drAmit from "../assests/AmitBeniwal.png";
import drMishra from "../assests/rkmishra.png";
import drBachu from "../assests/bacchu-sir-img.png";

const APPOINTMENT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0lCDGmvocuWkljy0JHFxsiiDOglLjCKQAqKkzbO98BNsa5A/viewform";

const doctors = [
  {
    id: 1,
    name: "Dr. Rohit Kumar Tiwari",
    speciality: "Cardiology",
    experience: "8+ Years Experience",
    image: drRohit,
    profile: "/doctors/dr-rohit-kumar-tiwari",
  },
  {
    id: 2,
    name: "Dr. Neeraj Jha",
    speciality: "General Medicine",
    experience: "13+ Years Experience",
    image: drNeeraj,
    profile: "/doctors/dr-neeraj-jha",
  },
  {
    id: 3,
    name: "Dr. Lokesh Garg",
    speciality: "Orthopaedics",
    experience: "25+ Years Experience",
    image: drLokesh,
    profile: "/doctors/dr-lokesh-garg",
  },
  {
    id: 4,
    name: "Dr. Amit Beniwal",
    speciality: "Internal Medicine",
    experience: "19+ Years Experience",
    image: drAmit,
    profile: "/doctors/dr-amit-beniwal",
  },
  {
    id: 5,
    name: "Prof. (Dr.) R. K. Mishra",
    speciality: "Trauma & Orthopaedics",
    experience: "25+ Years Experience",
    image: drMishra,
    profile: "/doctors/dr-rk-mishra",
  },
  {
    id: 6,
    name: "Prof. (Dr.) Bachu Narayan Singh",
    speciality: "Community Medicine",
    experience: "20+ Years Experience",
    image: drBachu,
    profile: "/doctors/dr-bachu-narayan-singh",
  },
];

const BookAppointment = () => {
  const scrollToForm = () => {
    document
      .getElementById("appointment-request")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="appointment-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="appointment-hero"
          style={{
            "--appointment-hero-image": `url(${heroImage})`,
          }}
        >
          <div className="appointment-hero-bg" />
          <div className="appointment-hero-overlay" />

          <div className="appointment-hero-inner">

            <div className="appointment-hero-content">

              <div className="appointment-eyebrow">
                <span />
                SARGAM HEALTHCARE · APPOINTMENTS
              </div>

              <h1>
                Healthcare that
                <br />
                starts with a
                <em> conversation.</em>
              </h1>

              <p>
                Connect with our experienced specialists and
                take the first step towards the right care for
                you and your family.
              </p>

              <div className="appointment-hero-actions">

                <button
                  onClick={scrollToForm}
                  className="appointment-main-btn"
                >
                  Book Appointment
                  <span>↗</span>
                </button>

                <a
                  href="tel:+919354030578"
                  className="appointment-call-btn"
                >
                  Call Hospital
                  <span>↗</span>
                </a>

              </div>

              <div className="appointment-trust-row">

                <span>
                  ✓ Experienced Specialists
                </span>

                <span>
                  ✓ Patient First Care
                </span>

                <span>
                  ✓ Easy Appointment Process
                </span>

              </div>

            </div>


            <div className="appointment-hero-panel">

              <div className="hero-panel-top">
                <span>APPOINTMENT SUPPORT</span>

                <div className="hero-status">
                  <i />
                  Available
                </div>
              </div>

              <div className="hero-panel-icon">
                +
              </div>

              <h3>
                Need help choosing
                a specialist?
              </h3>

              <p>
                Our team can help guide you towards
                the right consultation.
              </p>

              <a href="tel:+919354030578">
                Speak to our team
                <span>↗</span>
              </a>

            </div>

          </div>

          <div className="appointment-hero-footer">

            <span>01</span>

            <div />

            <p>
              Your care journey begins here
            </p>

          </div>
        </section>


        {/* =====================================================
            QUICK INFO
        ===================================================== */}

        <section className="appointment-quick">

          <div className="appointment-container">

            <div className="quick-grid">

              <div className="quick-item">
                <span>01</span>

                <div>
                  <small>STEP ONE</small>
                  <strong>Choose your specialist</strong>
                </div>
              </div>

              <div className="quick-item">
                <span>02</span>

                <div>
                  <small>STEP TWO</small>
                  <strong>Send your details</strong>
                </div>
              </div>

              <div className="quick-item">
                <span>03</span>

                <div>
                  <small>STEP THREE</small>
                  <strong>Our team confirms</strong>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DOCTORS
        ===================================================== */}

        <section className="appointment-doctors">

          <div className="appointment-container">

            <div className="appointment-section-heading">

              <div>

                <span>
                  OUR SPECIALISTS
                </span>

                <h2>
                  Find the right
                  <br />
                  <em>specialist for you.</em>
                </h2>

              </div>

              <p>
                Explore our experienced medical team and
                choose the specialist you would like to
                consult.
              </p>

            </div>


            <div className="appointment-doctor-grid">

              {doctors.map((doctor) => (

                <article
                  className="appointment-doctor-card"
                  key={doctor.id}
                >

                  <div className="doctor-card-image">

                    <div className="doctor-image-bg" />

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                    />

                    <span className="doctor-number">
                      0{doctor.id}
                    </span>

                  </div>


                  <div className="doctor-card-content">

                    <span className="doctor-speciality">
                      {doctor.speciality}
                    </span>

                    <h3>
                      {doctor.name}
                    </h3>

                    <p>
                      {doctor.experience}
                    </p>


                    <div className="doctor-card-actions">

                      <Link
                        to={doctor.profile}
                        className="doctor-profile-btn"
                      >
                        View Profile
                      </Link>

                      <button
                        onClick={scrollToForm}
                        className="doctor-book-btn"
                      >
                        Book
                        <span>↗</span>
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            APPOINTMENT FORM
        ===================================================== */}

        <section
          className="appointment-request"
          id="appointment-request"
        >

          <div className="appointment-container">

            <div className="appointment-request-heading">

              <span>
                APPOINTMENT REQUEST
              </span>

              <h2>
                Let's get your
                <br />
                <em>consultation started.</em>
              </h2>

              <p>
                Share your basic details and preferred
                consultation. Our hospital team will contact
                you to guide you through the confirmation.
              </p>

            </div>


            <div className="appointment-workspace">

              <div className="appointment-workspace-info">

                <div className="workspace-number">
                  01
                </div>

                <span>
                  SIMPLE · SECURE · PATIENT FIRST
                </span>

                <h3>
                  Tell us what
                  <br />
                  you need.
                </h3>

                <p>
                  Complete the appointment request form.
                  You don't need to figure everything out
                  yourself — our team will assist you.
                </p>


                <div className="workspace-points">

                  <div>
                    <i>✓</i>
                    <span>
                      Share your consultation requirement
                    </span>
                  </div>

                  <div>
                    <i>✓</i>
                    <span>
                      Select your preferred specialist
                    </span>
                  </div>

                  <div>
                    <i>✓</i>
                    <span>
                      Receive confirmation from our team
                    </span>
                  </div>

                </div>


                <div className="workspace-call">

                  <span>
                    PREFER TO TALK?
                  </span>

                  <a href="tel:+919354030578">
                    +91 9354030578
                    <b>↗</b>
                  </a>

                </div>

              </div>


              <div className="appointment-form-card">

                <div className="form-card-header">

                  <div>
                    <span>
                      STEP 01
                    </span>

                    <h3>
                      Appointment Details
                    </h3>
                  </div>

                  <div className="form-secure">
                    <i>✓</i>
                    Secure
                  </div>

                </div>


                <div className="form-frame">

                  <iframe
                    title="Sargam Healthcare Appointment Form"
                    src={`${APPOINTMENT_FORM}?embedded=true`}
                    width="100%"
                    height="720"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading…
                  </iframe>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY SARGAM
        ===================================================== */}

        <section className="appointment-reassurance">

          <div className="appointment-container">

            <div className="appointment-section-heading">

              <div>

                <span>
                  WHY SARGAM HEALTHCARE
                </span>

                <h2>
                  Care designed
                  <br />
                  around <em>people.</em>
                </h2>

              </div>

              <p>
                From your first enquiry to your consultation,
                our focus remains simple — make healthcare
                easier, clearer and more compassionate.
              </p>

            </div>


            <div className="reassurance-grid">

              <div className="reassurance-card">
                <span>01</span>

                <div className="reassurance-icon">
                  +
                </div>

                <h3>
                  Experienced Doctors
                </h3>

                <p>
                  Consult experienced healthcare
                  professionals across multiple
                  specialities.
                </p>
              </div>


              <div className="reassurance-card">
                <span>02</span>

                <div className="reassurance-icon">
                  ◷
                </div>

                <h3>
                  Easy Access
                </h3>

                <p>
                  Simple appointment requests with
                  direct support from our hospital team.
                </p>
              </div>


              <div className="reassurance-card">
                <span>03</span>

                <div className="reassurance-icon">
                  ✓
                </div>

                <h3>
                  Patient First
                </h3>

                <p>
                  Compassionate care focused on
                  every patient's individual needs.
                </p>
              </div>


              <div className="reassurance-card">
                <span>04</span>

                <div className="reassurance-icon">
                  ♡
                </div>

                <h3>
                  Affordable Care
                </h3>

                <p>
                  Quality healthcare designed to
                  remain accessible to families.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="appointment-final">

          <div className="appointment-final-glow" />

          <div className="appointment-final-content">

            <span>
              READY WHEN YOU ARE
            </span>

            <h2>
              Your next step
              <br />
              starts <em>here.</em>
            </h2>

            <p>
              Book a consultation with Sargam Healthcare
              and let our team help you find the right care.
            </p>

            <div className="appointment-final-actions">

              <button
                onClick={scrollToForm}
                className="final-book-btn"
              >
                Book Appointment
                <span>↗</span>
              </button>

              <a
                href="tel:+919354030578"
                className="final-call-btn"
              >
                Call Hospital
                <span>↗</span>
              </a>

            </div>

          </div>

          <span className="final-section-number">
            03
          </span>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default BookAppointment;