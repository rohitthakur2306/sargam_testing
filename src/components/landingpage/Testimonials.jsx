import { useEffect, useState } from "react";
import "../landingpage/Testimonials.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Amit Sharma",
    city: "old delhi",
    review:
      "The doctors were extremely supportive and treatment was affordable. Every step of the treatment process was explained clearly and professionally.",
  },
  {
    name: "Priya Verma",
    city: "New delhi",
    review:
      "Excellent healthcare services with experienced doctors and caring staff. The entire experience was smooth and reassuring.",
  },
  {
    name: "Rajesh Singh",
    city: "Gurugram",
    review:
      "Very satisfied with the treatment. The doctors listened patiently and helped our family through a difficult medical situation.",
  },
  {
    name: "Anjali Gupta",
    city: "gurugram",
    review:
      "Clean environment, professional doctors and transparent treatment process. Highly recommended for quality healthcare.",
  },
];

export default function Testimonials() {
  useScrollReveal();

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section className="testimonials-premium">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="testimonials-bg-grid" />

      <div className="testimonials-bg-glow" />


      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="testimonials-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <header className="testimonials-header-premium reveal-up">

          <div className="testimonials-eyebrow">

            <span />

            PATIENT TESTIMONIALS

          </div>


          <div className="testimonials-heading-row">

            <h2>
              Trusted by
              <br />
              <em>thousands of families.</em>
            </h2>


            <p>
              Real experiences from patients and families who
              have trusted Sargam Healthcare throughout their
              healthcare journey.
            </p>

          </div>

        </header>


        {/* =================================================
            MAIN TESTIMONIAL AREA
        ================================================= */}

        <div className="testimonials-main">


          {/* =================================================
              LEFT TRUST PANEL
          ================================================= */}

          <aside className="testimonial-trust-panel reveal-left">

            <div className="testimonial-rating">

              <span>
                PATIENT EXPERIENCE
              </span>

              <strong>
                4.9 <small>★</small>
              </strong>

              <p>
                Average Rating
              </p>

            </div>


            <div className="testimonial-proof">

              <div>
                <strong>
                  15K<span>+</span>
                </strong>

                <small>
                  Patients
                </small>
              </div>


              <div>
                <strong>
                  95<span>%</span>
                </strong>

                <small>
                  Satisfaction
                </small>
              </div>


              <div>
                <strong>
                  98<span>%</span>
                </strong>

                <small>
                  Recommendation
                </small>
              </div>


              <div>
                <strong>
                  5<span>+</span>
                </strong>

                <small>
                  Years Trust
                </small>
              </div>

            </div>


            <div className="testimonial-trust-line">

              <span />

              <p>
                Care that patients
                <br />
                remember.
              </p>

            </div>

          </aside>


          {/* =================================================
              REVIEW
          ================================================= */}

          <div className="testimonial-review-area reveal-right">

            <div className="testimonial-quote-mark">
              “
            </div>


            <div
              className="testimonial-review"
              key={active}
            >

              <div className="testimonial-stars">
                ★★★★★
              </div>


              <blockquote>
                {current.review}
              </blockquote>


              <div className="testimonial-patient">

                <div className="patient-avatar">
                  {current.name.charAt(0)}
                </div>


                <div className="patient-details">

                  <strong>
                    {current.name}
                  </strong>

                  <span>
                    {current.city}
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div className="testimonial-navigation">

              <div className="testimonial-counter">

                <strong>
                  0{active + 1}
                </strong>

                <span>
                  / 0{testimonials.length}
                </span>

              </div>


              <div className="testimonial-dots">

                {testimonials.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    aria-label={`View testimonial ${index + 1}`}
                    className={
                      active === index
                        ? "testimonial-dot active"
                        : "testimonial-dot"
                    }
                    onClick={() => setActive(index)}
                  />

                ))}

              </div>


              <div className="testimonial-arrows">

                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setActive(
                      (active - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                >
                  ←
                </button>


                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setActive(
                      (active + 1) % testimonials.length
                    )
                  }
                >
                  →
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div className="testimonials-bottom reveal-up">

          <div className="testimonials-bottom-mark">
            +
          </div>


          <div>

            <span>
              THE SARGAM PROMISE
            </span>

            <h3>
              Every patient deserves to feel
              <em> heard, cared for and respected.</em>
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}