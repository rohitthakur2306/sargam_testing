import "../landingpage/Whysargam.css";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function WhySargamHealthcare() {
  useScrollReveal();

  const pillars = [
    {
      number: "01",
      title: "Affordable Healthcare",
      text: "Quality treatment should never become a financial burden. We focus on effective medical care with transparent and accessible pricing.",
    },
    {
      number: "02",
      title: "Experienced Doctors",
      text: "Our healthcare professionals bring clinical expertise, thoughtful diagnosis and compassionate care to every patient.",
    },
    {
      number: "03",
      title: "Built on Trust",
      text: "We believe lasting healthcare relationships are built through consistency, transparency, ethical practice and genuine care.",
    },
    {
      number: "04",
      title: "Future-Ready Care",
      text: "We continuously improve our technology, systems and patient experience to build a more connected and accessible healthcare ecosystem.",
    },
  ];

  return (
    <section className="why-sargam-premium">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="why-sargam-grid" />

      <div className="why-sargam-glow" />


      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="why-sargam-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="why-sargam-header reveal-up">

          <div className="why-sargam-eyebrow">

            <span />

            WHY SARGAM HEALTHCARE

          </div>


          <h2>
            Healthcare designed
            <br />

            <em>
              around people.
            </em>
          </h2>


          <p>
            We are building a healthcare ecosystem where clinical
            excellence, affordability and human connection come
            together — because better healthcare should feel
            accessible, trustworthy and personal.
          </p>

        </div>


        {/* =================================================
            PROOF SECTION
        ================================================= */}

        <div className="why-sargam-proof">


          {/* LEFT STATEMENT */}

          <div className="why-sargam-statement reveal-left">

            <span className="statement-label">
              OUR APPROACH
            </span>

            <h3>
              More than treatment.
              <br />
              <span>
                A relationship built on care.
              </span>
            </h3>

            <p>
              Every patient interaction is an opportunity to
              build confidence, simplify healthcare and make
              people feel genuinely cared for.
            </p>

          </div>


          {/* RIGHT METRICS */}

          <div className="why-sargam-metrics reveal-right">

            <div className="why-metric">

              <strong>
                25K<span>+</span>
              </strong>

              <small>
                Patients Served
              </small>

            </div>


            <div className="why-metric">

              <strong>
                10<span>+</span>
              </strong>

              <small>
                Healthcare Experts
              </small>

            </div>


            <div className="why-metric">

              <strong>
                95<span>%</span>
              </strong>

              <small>
                Patient Satisfaction
              </small>

            </div>


            <div className="why-metric">

              <strong>
                5<span>+</span>
              </strong>

              <small>
                Years of Trust
              </small>

            </div>

          </div>

        </div>


        {/* =================================================
            PILLARS HEADER
        ================================================= */}

        <div className="why-pillars-heading reveal-bottom">

          <span>
            WHAT WE STAND FOR
          </span>

          <p>
            Four principles guide every decision we make.
          </p>

        </div>


        {/* =================================================
            PILLARS
        ================================================= */}

        <div className="why-pillars">

          {pillars.map((pillar) => (

            <div
              className="why-pillar reveal-up"
              key={pillar.number}
            >

              <div className="why-pillar-number">

                {pillar.number}

              </div>


              <div className="why-pillar-main">

                <h3>
                  {pillar.title}
                </h3>

                <p>
                  {pillar.text}
                </p>

              </div>


              <div className="why-pillar-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            CLOSING STATEMENT
        ================================================= */}

        <div className="why-sargam-closing reveal-bottom">

          <div className="closing-mark">
            +
          </div>

          <div>

            <span>
              OUR PROMISE
            </span>

            <h3>
              Better healthcare should be
              <em> within everyone's reach.</em>
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}