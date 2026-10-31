import { Link } from "react-router-dom";
import "../landingpage/AppointmentCTA.css";

export default function AppointmentCTA() {
  return (
    <section className="appointment-cta-premium">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="appointment-cta-grid" />

      <div className="appointment-cta-glow appointment-glow-one" />
      <div className="appointment-cta-glow appointment-glow-two" />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="appointment-cta-inner">


        {/* Top label */}

        <div className="appointment-cta-eyebrow">

          <span />

          READY TO GET STARTED?

          <span />

        </div>


        {/* Heading */}

        <h2 className="appointment-cta-heading">

          Your Health Deserves
          <br />

          <em>Expert Care</em>

        </h2>


        {/* Description */}

        <p className="appointment-cta-description">

          Connect with experienced doctors, receive quality treatment and
          compassionate care at affordable prices. Schedule your consultation
          today with Sargam Healthcare.

        </p>


        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="appointment-cta-actions">

          <Link
            to="/book-appointment"
            className="appointment-primary-btn"
          >

            <span>
              Book Appointment
            </span>

            <span className="appointment-btn-arrow">
              ↗
            </span>

          </Link>


          <a
            href="tel:"
            className="appointment-secondary-btn"
          >

            <span className="appointment-call-icon">
              +
            </span>

            <span>
              Call Now
            </span>

          </a>

        </div>


        {/* =================================================
            TRUST FOOTER
        ================================================= */}

        <div className="appointment-cta-footer">

          <div className="appointment-footer-line" />

          <span>
            EXPERIENCED DOCTORS
          </span>

          <i />

          <span>
            PATIENT-CENTRIC CARE
          </span>

          <i />

          <span>
            AFFORDABLE HEALTHCARE
          </span>

        </div>

      </div>

    </section>
  );
}