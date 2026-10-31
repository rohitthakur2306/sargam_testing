import "../landingpage/healthcareservices.css";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function HealthcareServices() {
  useScrollReveal();

  const services = [
    {
      number: "01",
      title: "24×7 Emergency Care",
      description:
        "Immediate medical attention and emergency response services available round the clock to ensure patient safety and timely care.",
      featured: true,
      label: "Always Available",
    },
    {
      number: "02",
      title: "Expert Doctor Consultation",
      description:
        "Medicine, Cardiology, Orthopedics, ENT and Pediatrics consultations from experienced specialists.",
    },
    {
      number: "03",
      title: "OPD • IPD • Daycare",
      description:
        "Complete outpatient, inpatient and daycare facilities designed for efficient treatment and recovery.",
    },
    {
      number: "04",
      title: "Advanced Diagnostics",
      description:
        "Blood Tests, X-Ray, Ultrasound, CT Scan and MRI through trusted diagnostic partners.",
    },
    {
      number: "05",
      title: "Fully Equipped OT",
      description:
        "Modern operation theatre facilities supporting safe and efficient surgical procedures.",
    },
    {
      number: "06",
      title: "General & Laparoscopic Surgery",
      description:
        "Advanced surgical procedures including minimally invasive laparoscopic surgeries performed by experienced specialists.",
    },
    {
      number: "07",
      title: "In-House Pharmacy",
      description:
        "Convenient access to prescribed medicines and healthcare products within the hospital premises.",
    },
  ];

  const promises = [
    {
      title: "Affordable Healthcare",
      description:
        "High quality treatment with transparent pricing and patient focused care.",
    },
    {
      title: "Experienced Specialists",
      description:
        "Dedicated healthcare professionals delivering trusted medical care.",
    },
    {
      title: "Modern Infrastructure",
      description:
        "Advanced facilities designed for comfort, safety and better healthcare outcomes.",
    },
  ];

  return (
    <section className="services-premium">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="services-bg-grid" />

      <div className="services-bg-glow" />


      <div className="services-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <header className="services-header-premium reveal-up">

          <div className="services-eyebrow">
            <span />
            OUR HEALTHCARE SERVICES
          </div>


          <div className="services-heading-row">

            <h2>
              Comprehensive Medical Care
              <br />
              <em>Under One Roof</em>
            </h2>


            <p>
              Sargam Healthcare provides a complete range of healthcare
              services including emergency care, specialist consultations,
              diagnostics, surgery, inpatient care and pharmacy support.
              Our mission is to deliver affordable, accessible and trusted
              healthcare for every patient and family.
            </p>

          </div>

        </header>


        {/* =================================================
            FEATURED EMERGENCY SERVICE
        ================================================= */}

        <div className="featured-service-premium reveal-up">

          <div className="featured-service-number">
            01
          </div>


          <div className="featured-service-main">

            <span>
              CRITICAL & EMERGENCY CARE
            </span>

            <h3>
              24×7 Emergency Care
            </h3>

            <p>
              Immediate medical attention and emergency response services
              available round the clock to ensure patient safety and timely care.
            </p>

          </div>


          <div className="featured-service-status">

            <div className="service-status-dot" />

            <div>
              <small>
                AVAILABILITY
              </small>

              <strong>
                Always Available
              </strong>
            </div>

          </div>

        </div>


        {/* =================================================
            SERVICES HEADER
        ================================================= */}

        <div className="services-list-header reveal-bottom">

          <span>
            OUR SERVICES
          </span>

          <p>
            Complete care across every stage of your healthcare journey.
          </p>

        </div>


        {/* =================================================
            SERVICE GRID
        ================================================= */}

        <div className="services-grid-premium">

          {services.slice(1).map((service) => (

            <article
              className="service-card-premium reveal-up"
              key={service.number}
            >

              <div className="service-card-top">

                <span className="service-card-number">
                  {service.number}
                </span>

                <span className="service-card-arrow">
                  ↗
                </span>

              </div>


              <div className="service-card-body">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            BOTTOM PROMISES
        ================================================= */}

        <div className="services-promise-header reveal-bottom">

          <span>
            WHY PATIENTS CHOOSE US
          </span>

        </div>


        <div className="services-promises">

          {promises.map((promise, index) => (

            <div
              className="service-promise reveal-up"
              key={promise.title}
            >

              <span className="promise-number">
                0{index + 1}
              </span>

              <div>

                <h3>
                  {promise.title}
                </h3>

                <p>
                  {promise.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            CLOSING
        ================================================= */}

        <div className="services-closing reveal-up">

          <div className="services-closing-mark">
            +
          </div>

          <div>

            <span>
              SARGAM HEALTHCARE
            </span>

            <h3>
              One place.
              <em> Complete care.</em>
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}