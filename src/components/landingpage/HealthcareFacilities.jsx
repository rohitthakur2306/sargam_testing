import facilityImg from "../../assests/sargammain.png";
import "../landingpage/Healthcarefacilities.css";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function HealthcareFacilities() {
  useScrollReveal();

  return (
    <section className="facilities-premium">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="facilities-bg-grid" />

      <div className="facilities-bg-glow" />


      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="facilities-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="facilities-header-premium reveal-up">

          <div className="facilities-eyebrow">
            <span />
            OUR FACILITIES
          </div>

          <div className="facilities-heading-row">

            <h2>
              Modern Infrastructure
              <br />
              <em>Designed For Better Care</em>
            </h2>

            <p>
              Sargam Healthcare combines modern medical infrastructure,
              advanced treatment facilities and patient-focused healthcare
              environments to ensure safety, comfort and better outcomes.
            </p>

          </div>

        </div>


        {/* =================================================
            MAIN SHOWCASE
        ================================================= */}

        <div className="facility-showcase-premium">


          {/* -----------------------------------------------
              IMAGE
          ----------------------------------------------- */}

          <div className="facility-image-premium">

            <img
              src={facilityImg}
              alt="Healthcare Facility"
            />

            <div className="facility-image-overlay" />

            <div className="facility-image-label">
              <span>01</span>
              <p>QUALITY HEALTHCARE</p>
            </div>

          </div>


          {/* -----------------------------------------------
              CONTENT
          ----------------------------------------------- */}

          <div className="facility-content-premium">

            <span className="facility-content-eyebrow">
              QUALITY HEALTHCARE
            </span>

            <h3 className="reveal-bottom">
              Comprehensive Facilities For Every Patient
            </h3>

            <p className="reveal-bottom">
              From emergency support and critical care units to advanced
              diagnostics and operation theatres, our facilities are designed
              to deliver efficient, safe and compassionate healthcare services.
            </p>

            <div className="facility-content-line" />

          </div>

        </div>


        {/* =================================================
            FACILITIES
        ================================================= */}

        <div className="facilities-list-header reveal-up">

          <span>
            OUR INFRASTRUCTURE
          </span>

          <p>
            Built around safety, accessibility and patient comfort.
          </p>

        </div>


        <div className="facilities-grid-premium">


          {/* 01 */}

          <div className="facility-card-premium">

            <span className="facility-number">
              01
            </span>

            <div className="facility-card-content">

              <h3 className="reveal-left">
                24×7 Emergency Care
              </h3>

              <p className="reveal-right">
                Immediate medical support available round the clock.
              </p>

            </div>

            <span className="facility-arrow">
              ↗
            </span>

          </div>


          {/* 02 */}

          <div className="facility-card-premium">

            <span className="facility-number">
              02
            </span>

            <div className="facility-card-content">

              <h3 className="reveal-left">
                ICU & CCU Care
              </h3>

              <p className="reveal-right">
                Dedicated critical care units with continuous monitoring.
              </p>

            </div>

            <span className="facility-arrow">
              ↗
            </span>

          </div>


          {/* 03 */}

          <div className="facility-card-premium">

            <span className="facility-number">
              03
            </span>

            <div className="facility-card-content">

              <h3 className="reveal-left">
                Fully Equipped OT
              </h3>

              <p className="reveal-right">
                Modern operation theatres for safe surgical procedures.
              </p>

            </div>

            <span className="facility-arrow">
              ↗
            </span>

          </div>


          {/* 04 */}

          <div className="facility-card-premium">

            <span className="facility-number">
              04
            </span>

            <div className="facility-card-content">

              <h3 className="reveal-left">
                Advanced Diagnostics
              </h3>

              <p className="reveal-right">
                Blood Tests, X-Ray, USG, CT Scan and MRI support.
              </p>

            </div>

            <span className="facility-arrow">
              ↗
            </span>

          </div>


          {/* 05 */}

          <div className="facility-card-premium">

            <span className="facility-number">
              05
            </span>

            <div className="facility-card-content">

              <h3 className="reveal-left">
                In-House Pharmacy
              </h3>

              <p className="reveal-right">
                Easy access to medicines and healthcare products.
              </p>

            </div>

            <span className="facility-arrow">
              ↗
            </span>

          </div>


          {/* 06 */}

          <div className="facility-card-premium">

            <span className="facility-number">
              06
            </span>

            <div className="facility-card-content">

              <h3 className="reveal-left">
                Patient Friendly Rooms
              </h3>

              <p className="reveal-right">
                Comfortable environment focused on recovery and wellbeing.
              </p>

            </div>

            <span className="facility-arrow">
              ↗
            </span>

          </div>

        </div>


        {/* =================================================
            BANNER
        ================================================= */}

        <div className="facility-banner-premium reveal-up">

          <div className="facility-banner-mark">
            +
          </div>

          <div className="facility-banner-content">

            <span>
              SARGAM HEALTHCARE
            </span>

            <h3>
              Trusted By Thousands Of Families
            </h3>

            <p>
              Delivering affordable healthcare, experienced medical expertise
              and compassionate patient care under one roof.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}