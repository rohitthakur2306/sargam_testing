import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";

import "./hero.css";

export default function Hero() {
  useScrollReveal();

  return (
    <section className="premium-hero">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="premium-hero-grid" />
      <div className="premium-hero-glow premium-hero-glow-one" />
      <div className="premium-hero-glow premium-hero-glow-two" />


      {/* =====================================================
          TOP BRAND LINE
      ===================================================== */}

      <div className="premium-hero-container">

        <div className="premium-hero-top reveal-left">

          <div className="premium-brand">

            <span className="premium-brand-mark">
              +
            </span>

            <div>
              <strong>
                SARGAM
              </strong>

              <span>
                HEALTHCARE
              </span>
            </div>

          </div>


          <div className="premium-top-status">

            <span className="status-dot" />

            <span>
              PATIENT-CENTRIC HEALTHCARE
            </span>

          </div>

        </div>


        {/* =================================================
            MAIN HERO
        ================================================= */}

        <div className="premium-hero-main">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="premium-hero-content">

            <div className="premium-eyebrow reveal-left">

              <span className="eyebrow-line" />

              TRUSTED HEALTHCARE PARTNER

            </div>


            <h1 className="premium-title reveal-bottom">

              Healthcare
              <br />

              <span>
                with a
              </span>

              <br />

              <em>
                human touch.
              </em>

            </h1>


            <p className="premium-description reveal-left">

              Experienced specialists, modern medical facilities,
              and compassionate care — thoughtfully brought together
              to make quality healthcare accessible to every family.

            </p>


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="premium-actions reveal-bottom">

              <Link
                to="/book-appointment"
                className="premium-primary-button"
              >

                <span>
                  Book an Appointment
                </span>

                <b>
                  ↗
                </b>

              </Link>


              <Link
                to="/doctorspage"
                className="premium-secondary-button"
              >

                <span className="secondary-circle">
                  →
                </span>

                Meet Our Specialists

              </Link>

            </div>


            {/* =================================================
                TRUST
            ================================================= */}

            <div className="premium-trust reveal-bottom">

              <div className="trust-item">

                <strong>
                  15K<span>+</span>
                </strong>

                <small>
                  Patients cared for
                </small>

              </div>


              <div className="trust-divider" />


              <div className="trust-item">

                <strong>
                  10<span>+</span>
                </strong>

                <small>
                  Medical specialists
                </small>

              </div>


              <div className="trust-divider" />


              <div className="trust-item">

                <strong>
                  24<span>/7</span>
                </strong>

                <small>
                  Patient support
                </small>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="premium-visual reveal-right">


            {/* Decorative orbit */}

            <div className="visual-orbit visual-orbit-one" />

            <div className="visual-orbit visual-orbit-two" />


            {/* Main medical interface */}

            <div className="medical-interface">


              {/* Top */}

              <div className="interface-top">

                <div>

                  <span>
                    SARGAM
                  </span>

                  <strong>
                    CARE
                  </strong>

                </div>

                <span className="interface-live">
                  LIVE
                </span>

              </div>


              {/* Central symbol */}

              <div className="medical-core">

                <div className="core-ring core-ring-one" />

                <div className="core-ring core-ring-two" />

                <div className="core-center">

                  <span>
                    +
                  </span>

                </div>

              </div>


              {/* Care information */}

              <div className="interface-care">

                <span>
                  YOUR CARE
                </span>

                <strong>
                  Begins with trust.
                </strong>

              </div>


              {/* Bottom */}

              <div className="interface-bottom">

                <div>
                  <small>
                    SPECIALISTS
                  </small>

                  <strong>
                    10+
                  </strong>
                </div>


                <div>
                  <small>
                    PATIENTS
                  </small>

                  <strong>
                    15K+
                  </strong>
                </div>


                <div>
                  <small>
                    SUPPORT
                  </small>

                  <strong>
                    24/7
                  </strong>
                </div>

              </div>

            </div>


            {/* =================================================
                SMALL FLOATING TRUST ELEMENTS
            ================================================= */}

            <div className="visual-note visual-note-top">

              <span>
                ✓
              </span>

              <div>
                <small>
                  CARE STANDARD
                </small>

                <strong>
                  Patient First
                </strong>
              </div>

            </div>


            <div className="visual-note visual-note-bottom">

              <div className="rating-star">
                ★
              </div>

              <div>
                <strong>
                  4.9
                </strong>

                <small>
                  Patient experience
                </small>
              </div>

            </div>


            {/* Vertical label */}

            <div className="visual-side-label">
              QUALITY • TRUST • CARE
            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM BRAND MESSAGE
        ================================================= */}

        <div className="premium-bottom">

          <div className="bottom-message">

            <span className="bottom-line" />

            <p>
              Modern medicine.
              <br />
              Meaningful care.
            </p>

          </div>


          <div className="bottom-scroll">

            <span>
              SCROLL TO EXPLORE
            </span>

            <b>
              ↓
            </b>

          </div>

        </div>

      </div>

    </section>
  );
}