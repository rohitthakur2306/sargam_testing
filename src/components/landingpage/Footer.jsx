import { Link } from "react-router-dom";

import logo from "../../assests/logo.png";
import linkdinimage from "../../assests/linkdin_logo.png";

import "../landingpage/Footer.css";

export default function Footer() {
  const medicalServices = [
    "Emergency Care",
    "ICU & CCU",
    "Diagnostics",
    "Surgery",
    "Pharmacy",
  ];

  const specialists = [
    {
      name: "Dr. Rohit Kumar Tiwari",
      path: "/doctors/dr-rohit-kumar-tiwari",
    },
    {
      name: "Dr. Neeraj Jha",
      path: "/doctors/dr-neeraj-jha",
    },
    {
      name: "Dr. Lokesh Garg",
      path: "/doctors/dr-lokesh-garg",
    },
  ];

  return (
    <footer className="footer-premium">

      {/* =====================================================
          FOOTER BACKGROUND
      ===================================================== */}

      <div className="footer-grid" />
      <div className="footer-glow" />


      <div className="footer-container">


        {/* =================================================
            BRAND / INTRO
        ================================================= */}

        <div className="footer-brand-premium">

          <div className="footer-brand-top">

            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt="Sargam Healthcare"
                className="footer-logo-premium"
              />
            </Link>


            <a
              href="https://www.linkedin.com/in/sargam-health-care-662825418/"
              target="_blank"
              rel="noreferrer"
              className="footer-linkedin"
              aria-label="Sargam Healthcare LinkedIn"
            >
              <img
                src={linkdinimage}
                alt="LinkedIn"
              />
            </a>

          </div>


          <div className="footer-brand-copy">

            <span>
              SARGAM HEALTHCARE
            </span>

            <h2>
              Trusted Healthcare.
              <br />
              <em>Compassionate Care.</em>
            </h2>

            <p>
              Sargam Healthcare is committed to providing affordable,
              accessible and quality healthcare through experienced doctors,
              modern facilities and patient-first treatment.
            </p>

          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="footer-actions-premium">

            <Link
              to="/book-appointment"
              className="footer-primary-btn"
            >
              <span>
                Book Appointment
              </span>

              <span>
                ↗
              </span>
            </Link>


            <Link
              to="/contact"
              className="footer-secondary-btn"
            >
              Contact Us
            </Link>

          </div>

        </div>


        {/* =================================================
            NAVIGATION AREA
        ================================================= */}

        <div className="footer-navigation">


          {/* Quick Links */}

          <div className="footer-column">

            <span className="footer-column-label">
              EXPLORE
            </span>

            <h3>
              Quick Links
            </h3>


            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/doctorspage">
              Doctors
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/* Medical Services */}

          <div className="footer-column">

            <span className="footer-column-label">
              CARE
            </span>

            <h3>
              Medical Services
            </h3>


            {medicalServices.map((service) => (
              <span
                className="footer-static-link"
                key={service}
              >
                {service}
              </span>
            ))}

          </div>


          {/* Specialists */}

          <div className="footer-column">

            <span className="footer-column-label">
              EXPERTISE
            </span>

            <h3>
              Our Specialists
            </h3>


            {specialists.map((doctor) => (
              <Link
                key={doctor.path}
                to={doctor.path}
              >
                {doctor.name}
              </Link>
            ))}

          </div>


          {/* Contact */}

          <div className="footer-column footer-contact-column">

            <span className="footer-column-label">
              CONNECT
            </span>

            <h3>
              Contact Information
            </h3>


            <a href="tel:+919354030578">
              +91 9354030578
            </a>


            <a href="mailto:sargamheathcarereception@gmail.com">
              sargamheathcarereception@gmail.com
            </a>


            <p>
              Address: Khasra No 77, Old Delhi Gurugram Rd,
              opp. Indian Bank, D Block, Samalka,
              New Delhi, Delhi 110097
            </p>

          </div>

        </div>


        {/* =================================================
            TRUST METRICS
        ================================================= */}

        <div className="footer-trust-premium">

          <div className="footer-trust-intro">

            <span>
              OUR COMMITMENT
            </span>

            <p>
              Healthcare built around people.
            </p>

          </div>


          <div className="footer-metric">

            <strong>
              24<span>/7</span>
            </strong>

            <small>
              Emergency Support
            </small>

          </div>


          <div className="footer-metric">

            <strong>
              15K<span>+</span>
            </strong>

            <small>
              Patients Treated
            </small>

          </div>


          <div className="footer-metric">

            <strong>
              10<span>+</span>
            </strong>

            <small>
              Healthcare Experts
            </small>

          </div>


          <div className="footer-metric">

            <strong>
              Affordable
            </strong>

            <small>
              Quality Care
            </small>

          </div>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="footer-bottom-premium">

          <p>
            © 2026 Sargam Healthcare. All Rights Reserved.
          </p>


          <div className="footer-bottom-right">

            <span>
              PATIENT FIRST
            </span>

            <i />

            <span>
              QUALITY CARE
            </span>

            <i />

            <span>
              TRUST
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}