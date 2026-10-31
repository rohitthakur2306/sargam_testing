import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import "../components/About.css";

import aboutHero from "../assests/sargammain2.png";
import storyImage from "../assests/sargammain3.png";
import meenakshiImage from "../assests/MinakshiYadav.png";
import neerajImage from "../assests/NeerajJha.png";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="about-hero-premium">

          <div className="about-hero-bg-circle circle-one"></div>
          <div className="about-hero-bg-circle circle-two"></div>

          <div className="about-hero-copy reveal-up">

            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              ABOUT SARGAM HEALTHCARE
            </div>

            <h1>
              Where Every
              <br />
              <span>Patient Matters.</span>
            </h1>

            <p>
              Sargam Health care was founded on a simple yet powerful
              belief—that healthcare should be built on compassion, honesty,
              scientific excellence and respect for human dignity.
            </p>

            <div className="hero-trust-row">
              <span>Patient First</span>
              <span>Evidence Based</span>
              <span>Compassionate Care</span>
            </div>

          </div>


          <div className="about-hero-visual reveal-up">

            <div className="hero-image-frame">

              <div className="image-corner top-left"></div>
              <div className="image-corner bottom-right"></div>

              <img
                src={aboutHero}
                alt="Sargam Healthcare"
              />

            </div>

            <div className="hero-image-badge">
              <strong>05+</strong>
              <span>Years of<br />Trusted Care</span>
            </div>

          </div>


          <div className="hero-bottom-note">
            <span>01</span>
            <p>Discover Our Story</p>
            <i></i>
          </div>

        </section>


        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <section className="about-trust-strip">

          <div className="trust-item">
            <strong>15,000+</strong>
            <span>Patients Served</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <strong>10+</strong>
            <span>Medical Experts</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <strong>24×7</strong>
            <span>Healthcare Support</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <strong>2020</strong>
            <span>Established</span>
          </div>

        </section>


        {/* =====================================================
            OUR FOUNDATION
        ===================================================== */}

        <section className="about-story-premium">

          <div className="story-visual reveal-left">

            <div className="story-image-wrap">

              <img
                src={storyImage}
                alt="Sargam Healthcare"
              />

              <div className="story-image-overlay"></div>

            </div>

            <div className="story-number">
              <span>OUR</span>
              <strong>01</strong>
            </div>

            <div className="story-years">
              <strong>5+</strong>
              <span>Years of<br />Healthcare</span>
            </div>

          </div>


          <div className="story-content reveal-right">

            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              OUR FOUNDATION
            </div>

            <h2>
              Healthcare Built On
              <br />
              <span>Compassion, Trust & Human Dignity.</span>
            </h2>

            <div className="content-rule"></div>

            <p>
              Sargam Health care was founded on a simple yet powerful
              belief—that healthcare should be built on compassion, honesty,
              scientific excellence and respect for every human life.
            </p>

            <p>
              We understand that visiting a hospital can be one of the most
              vulnerable moments in a person's life, and every patient deserves
              reassurance, clear communication and genuine care.
            </p>

            <div className="story-values">

              <div>
                <span>01</span>
                <p>Compassion Before Treatment</p>
              </div>

              <div>
                <span>02</span>
                <p>Evidence-Based Medical Care</p>
              </div>

              <div>
                <span>03</span>
                <p>Honest & Transparent Communication</p>
              </div>

              <div>
                <span>04</span>
                <p>Equal Respect For Every Patient</p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MISSION / VISION / VALUES
        ===================================================== */}

        <section className="purpose-section">

          <div className="purpose-heading reveal-up">

            <div className="section-eyebrow center">
              <span className="eyebrow-line"></span>
              OUR PURPOSE
              <span className="eyebrow-line"></span>
            </div>

            <h2>
              Guided By Purpose.
              <br />
              <span>Driven By Compassion.</span>
            </h2>

            <p>
              Every decision at Sargam Health care is guided by our commitment
              to ethical medical practice, patient dignity and evidence-based
              healthcare.
            </p>

          </div>


          <div className="purpose-grid">

            <article className="purpose-card mission reveal-left">

              <div className="purpose-card-top">
                <span>01</span>
                <div className="purpose-icon">↗</div>
              </div>

              <span className="purpose-label">OUR MISSION</span>

              <h3>Better Healthcare With Human Care.</h3>

              <p>
                To deliver ethical, evidence-based, affordable and
                patient-centred healthcare with compassion, transparency and
                clinical excellence.
              </p>

              <div className="purpose-card-line"></div>

            </article>


            <article className="purpose-card vision reveal-up">

              <div className="purpose-card-top">
                <span>02</span>
                <div className="purpose-icon">◉</div>
              </div>

              <span className="purpose-label">OUR VISION</span>

              <h3>Building A More Trusted Healthcare System.</h3>

              <p>
                To become one of the most trusted community healthcare
                institutions by combining modern medicine with genuine human
                care, integrity and continuous innovation.
              </p>

              <div className="purpose-card-line"></div>

            </article>


            <article className="purpose-card values reveal-right">

              <div className="purpose-card-top">
                <span>03</span>
                <div className="purpose-icon">✦</div>
              </div>

              <span className="purpose-label">OUR CORE VALUES</span>

              <h3>Principles That Guide Us.</h3>

              <div className="values-list">

                <span>Patient First</span>
                <span>Compassion</span>
                <span>Integrity</span>
                <span>Clinical Excellence</span>
                <span>Transparency</span>
                <span>Respect</span>

              </div>

              <div className="purpose-card-line"></div>

            </article>

          </div>


          <div className="purpose-statement reveal-up">
            <span>OUR BELIEF</span>
            <h3>
              “Where compassion guides every decision,
              science supports every treatment.”
            </h3>
          </div>

        </section>


        {/* =====================================================
            DIFFERENCE
        ===================================================== */}

        <section className="difference-section">

          <div className="difference-heading reveal-up">

            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              THE SARGAM DIFFERENCE
            </div>

            <h2>
              Healthcare That Begins
              <br />
              <span>With Humanity.</span>
            </h2>

            <p>
              At Sargam Healthcare, our greatest strength is not our building
              or our equipment—it is the way we care for people.
            </p>

          </div>


          <div className="difference-grid">

            {[
              [
                "01",
                "We Listen First",
                "Every patient deserves to be heard. We carefully understand concerns, answer questions and ensure every individual feels respected."
              ],
              [
                "02",
                "Evidence-Based Care",
                "Clinical decisions are based on scientific evidence, medical ethics and the patient's best interests."
              ],
              [
                "03",
                "Every Patient Matters",
                "Every patient receives the same dignity, compassion and professional commitment."
              ],
              [
                "04",
                "Transparent Communication",
                "We explain diagnosis, investigations and treatment clearly so patients can make informed healthcare decisions."
              ],
              [
                "05",
                "Families As Partners",
                "We encourage families to actively participate in care through collaboration, communication and empathy."
              ],
              [
                "06",
                "Continuous Improvement",
                "Through learning, innovation and continuous improvement, we strive to deliver better care every day."
              ],
            ].map(([number, title, description]) => (

              <article
                className="difference-card reveal-up"
                key={number}
              >

                <span className="difference-number">
                  {number}
                </span>

                <div className="difference-icon">
                  +
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <span className="difference-arrow">↗</span>

              </article>

            ))}

          </div>


          <div className="difference-philosophy reveal-up">

            <span>OUR PHILOSOPHY</span>

            <h2>
              Healthcare Is Built On Trust,
              <br />
              <span>Not Privilege.</span>
            </h2>

            <p>
              At Sargam Healthcare, we believe illness does not recognise
              wealth, influence, profession, religion or social status—and
              neither should healthcare. Every patient deserves the same
              respect, careful evaluation, honest advice and compassionate
              treatment.
            </p>

          </div>

        </section>


        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <section className="journey-section">

          <div className="journey-heading reveal-up">

            <div className="section-eyebrow center">
              <span className="eyebrow-line"></span>
              OUR JOURNEY
              <span className="eyebrow-line"></span>
            </div>

            <h2>
              Growing With Trust,
              <br />
              <span>Guided By Purpose.</span>
            </h2>

            <p>
              Since our establishment in 2020, Sargam Health care has
              continued to grow with one clear objective—delivering
              compassionate, ethical and patient-centred healthcare.
            </p>

          </div>


          <div className="journey-line">

            <div className="journey-item reveal-left">

              <div className="journey-year">
                2020
              </div>

              <div className="journey-dot"></div>

              <div className="journey-content">
                <span>THE BEGINNING</span>
                <h3>Starting With A Purpose.</h3>
                <p>
                  Sargam Health care was established as a multi-specialty
                  hospital in Samalka, New Delhi with the vision of making
                  quality healthcare affordable, accessible and compassionate.
                </p>
              </div>

            </div>


            <div className="journey-item reveal-right">

              <div className="journey-year">
                TODAY
              </div>

              <div className="journey-dot"></div>

              <div className="journey-content">
                <span>GROWING WITH THE COMMUNITY</span>
                <h3>Serving With Experience.</h3>
                <p>
                  Today, Sargam Health care continues to serve patients through
                  experienced doctors, modern infrastructure, 24×7 patient care
                  and ethical medical practice.
                </p>
              </div>

            </div>


            <div className="journey-item reveal-left">

              <div className="journey-year">
                NEXT
              </div>

              <div className="journey-dot"></div>

              <div className="journey-content">
                <span>THE FUTURE</span>
                <h3>Building Tomorrow's Healthcare.</h3>
                <p>
                  Our journey continues with a vision to strengthen specialist
                  care, adopt advanced technologies and become one of the most
                  trusted healthcare institutions serving our community.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            LEADERSHIP
        ===================================================== */}

        <section className="leadership-premium">

          <div className="leadership-heading reveal-up">

            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              LEADERSHIP & MANAGEMENT
            </div>

            <h2>
              Leading With Vision.
              <br />
              <span>Serving With Compassion.</span>
            </h2>

            <p>
              Leadership at Sargam Health care is about creating a culture
              where compassion, professionalism, ethical medical practice and
              patient trust remain at the heart of every decision.
            </p>

          </div>


          <div className="leadership-cards">

            {/* MINAKSHI */}

            <article className="leader-card reveal-left">

              <div className="leader-photo">

                <img
                  src={meenakshiImage}
                  alt="Smt. Minakshi Yadav"
                />

                <div className="leader-photo-label">
                  <span>01</span>
                  LEADERSHIP
                </div>

              </div>

              <div className="leader-info">

                <span className="leader-role">
                  MANAGING DIRECTOR & PROPRIETOR
                  <br />
                  FOUNDER & MANAGING TRUSTEE — SWASTHAM TRUST
                </span>

                <h3>Smt. Minakshi Yadav</h3>

                <div className="leader-line"></div>

                <p>
                  Smt. Minakshi Yadav is the Founder and Managing Trustee
                  associated with Swastham Trust. Her vision is centred around
                  making quality healthcare accessible, ethical and
                  compassionate for every individual.
                </p>

                <p>
                  With experience in public communication, healthcare
                  awareness, media and social welfare, she continues to
                  strengthen community healthcare initiatives while guiding
                  the long-term vision and values of Sargam Health care.
                </p>

              </div>

            </article>


            {/* NEERAJ */}

            <article className="leader-card reverse reveal-right">

              <div className="leader-info">

                <span className="leader-role">
                  CEO & BUSINESS PARTNER
                </span>

                <h3>Dr. Neeraj Jha</h3>

                <div className="leader-line"></div>

                <p>
                  Dr. Neeraj Jha is an MD Physician and serves as the Chief
                  Executive Officer and Business Partner at Sargam Health care.
                  He combines clinical expertise with strategic leadership to
                  enhance patient care, operational excellence and sustainable
                  healthcare development.
                </p>

                <p>
                  His focus remains on building a patient-first healthcare
                  ecosystem by integrating evidence-based medical practice,
                  technology, innovation and efficient healthcare management.
                </p>

              </div>

              <div className="leader-photo">

                <img
                  src={neerajImage}
                  alt="Dr. Neeraj Jha"
                />

                <div className="leader-photo-label">
                  <span>02</span>
                  LEADERSHIP
                </div>

              </div>

            </article>

          </div>


          <div className="leadership-closing reveal-up">

            <span>ONE VISION</span>

            <h2>
              Building A Healthcare Institution
              <br />
              <span>Where Every Patient Matters.</span>
            </h2>

          </div>

        </section>


        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <section className="numbers-section">

          <div className="numbers-heading reveal-up">

            <div className="section-eyebrow center">
              <span className="eyebrow-line"></span>
              HEALTHCARE BY NUMBERS
              <span className="eyebrow-line"></span>
            </div>

            <h2>
              Every Number Reflects
              <br />
              <span>A Life We Have Touched.</span>
            </h2>

            <p>
              Behind every consultation, diagnosis and recovery is a patient
              who trusted us with their health.
            </p>

          </div>


          <div className="numbers-grid">

            {[
              ["15,000+", "Patients Served", "Trusted by thousands of patients and families."],
              ["10+", "Medical Experts", "Experienced doctors across multiple specialties."],
              ["24/7", "Healthcare Support", "Round-the-clock medical support."],
              ["100%", "Ethical Care", "Guided by ethics, transparency and evidence."],
              ["98%", "Patient Satisfaction", "Built through compassionate care and trust."],
              ["365", "Days Of Commitment", "Dedicated to serving patients every day."],
            ].map(([number, title, description], index) => (

              <article
                className="number-card reveal-up"
                key={title}
              >

                <span className="number-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{number}</strong>

                <h3>{title}</h3>

                <p>{description}</p>

              </article>

            ))}

          </div>


          <div className="numbers-quote reveal-up">
            <span>THE IMPACT</span>
            <h3>
              “Every patient we serve inspires us to continue
              delivering healthcare with compassion, integrity and excellence.”
            </h3>
          </div>

        </section>


        {/* =====================================================
            PROMISE
        ===================================================== */}

        <section className="promise-section">

          <div className="promise-heading reveal-up">

            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              OUR PROMISE
            </div>

            <h2>
              A Promise We
              <br />
              <span>Live Every Day.</span>
            </h2>

            <p>
              Our promise is not defined by advertisements or claims—it is
              reflected in every conversation, diagnosis, treatment and
              relationship we build.
            </p>

          </div>


          <div className="promise-grid">

            {[
              ["01", "We Listen With Patience"],
              ["02", "We Treat With Compassion"],
              ["03", "We Practice Evidence-Based Medicine"],
              ["04", "We Communicate Honestly"],
              ["05", "We Respect Every Individual"],
              ["06", "We Never Stop Improving"],
            ].map(([number, title]) => (

              <div
                className="promise-item reveal-up"
                key={number}
              >

                <span>{number}</span>

                <h3>{title}</h3>

                <i>↗</i>

              </div>

            ))}

          </div>


          <div className="promise-statement reveal-up">

            <span>THE SARGAM HEALTH CARE PHILOSOPHY</span>

            <h2>
              We Do Not Promise Miracles.
            </h2>

            <h3>
              We Promise Something Far More Meaningful.
            </h3>

            <p>
              We promise to listen with patience, communicate with honesty,
              practise evidence-based medicine, treat every patient with
              dignity, protect confidentiality and continue improving
              ourselves every single day.
            </p>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="about-final-cta">

          <div className="cta-glow"></div>

          <div className="cta-content reveal-up">

            <div className="section-eyebrow light">
              <span className="eyebrow-line"></span>
              YOUR HEALTH. OUR RESPONSIBILITY.
            </div>

            <h2>
              Experience Healthcare
              <br />
              <span>Where Every Patient Matters.</span>
            </h2>

            <p>
              Whether you are looking for preventive healthcare, specialist
              consultation, emergency medical support or long-term treatment,
              our team is committed to providing compassionate, ethical and
              evidence-based healthcare.
            </p>

            <div className="cta-actions">

              <a
                href="/book-appointment"
                className="cta-primary-premium"
              >
                Book Appointment
                <span>↗</span>
              </a>

              <a
                href="/doctorspage"
                className="cta-secondary-premium"
              >
                Meet Our Doctors
                <span>↗</span>
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}