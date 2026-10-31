import doctorImage from "../../assests/rkmishra.png";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
import "../landingpage/landing.css";

export default function DrRKMishraProfile() {
  return (
    <>
      <Navbar />

      <div className="doctor-profile">
        {/* Breadcrumb */}

        <section className="breadcrumb-section">
          <div className="container">
            <span>Home</span>

            <span>/</span>

            <span>Doctors</span>

            <span>/</span>

            <strong>Prof. (Dr.) R. K. Mishra</strong>
          </div>
        </section>

        {/* Hero */}

        <section className="profile-hero">
          <div className="profile-image">
            <img src={doctorImage} alt="Prof. (Dr.) R. K. Mishra" />
          </div>

          <div className="profile-content">
            <span className="doctor-tag">PROFESSOR • TRAUMA SPECIALIST</span>

            <h1>Prof. (Dr.) R. K. Mishra</h1>

            <h3>HOD, Forensic Medicine & Toxicology (HIMSR)</h3>

            <div className="qualification-strip">
              <span>25+ Years Experience</span>

              <span>Trauma Surgery</span>

              <span>Forensic Medicine</span>

              <span>KKT Canada</span>
            </div>

            <p>
              Prof. (Dr.) R. K. Mishra is an experienced medical professional
              with over twenty-five years of clinical, academic and medico-legal
              experience. His work combines patient care, medical education,
              trauma management and research with a commitment to clinical
              excellence and ethical healthcare. Throughout his professional
              journey, he has actively contributed to advancing trauma care,
              forensic medicine and academic training while continuing to
              support quality healthcare delivery.
            </p>

            <div className="hero-highlights">
              <div>✓ 25+ Years Experience</div>

              <div>✓ Trauma Specialist</div>

              <div>✓ Academic Leader</div>

              <div>✓ Research & Education</div>
            </div>

            <div className="profile-buttons">
              <button className="reveal-up" onClick={() => (window.location.href = "/book-appointment")}>
                Book Appointment
              </button>

              <button
                className="outline-btn reveal-up"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Hospital
              </button>
            </div>
          </div>
        </section>

        {/* Statistics */}

        <section className="doctor-stats">
          <div className="stat-box">
            <h2>25+</h2>

            <span>Years Experience</span>
          </div>

          <div className="stat-box">
            <h2>25+</h2>

            <span>Research Papers</span>
          </div>

          <div className="stat-box">
            <h2>KKT</h2>

            <span>Canada Training</span>
          </div>

          <div className="stat-box">
            <h2>HOD</h2>

            <span>Medical Education</span>
          </div>
        </section>

        {/* About */}

        <section className="about-doctor-section">
          <div className="section-title">
            <span>ABOUT THE DOCTOR</span>

            <h2>
              Prof. (Dr.) R. K. Mishra
              <br />
              Forensic Medicine, Trauma Care & Medical Education
            </h2>
          </div>

          <div className="about-content">
            <p>
              Prof. (Dr.) R. K. Mishra has dedicated more than twenty-five years
              to clinical practice, medical education and trauma care. His
              professional expertise spans forensic medicine, trauma surgery,
              geriatric orthopaedics and medico-legal sciences, making him one
              of the experienced names in his field.
            </p>

            <p>
              Throughout his career he has remained committed to improving
              patient outcomes, medical education and scientific learning. His
              work extends beyond clinical practice, contributing towards
              research, academic development and professional training for
              future healthcare professionals.
            </p>

            <p>
              At Sargam Healthcare, Prof. (Dr.) R. K. Mishra contributes with
              the same philosophy of ethical medical practice, evidence-based
              decision making and compassionate patient care. His extensive
              experience helps strengthen multidisciplinary healthcare services
              while ensuring quality standards for every patient.
            </p>
          </div>
        </section>

        {/* Qualification */}

        <section className="qualification-section">
          <div className="section-title">
            <span>QUALIFICATIONS & ACHIEVEMENTS</span>

            <h2>Professional Background</h2>
          </div>

          <div className="qualification-timeline">
            <div className="qualification-card">
              <div className="qualification-year">25+</div>

              <div>
                <h3>Years of Clinical Experience</h3>

                <p>
                  More than twenty-five years of professional experience in
                  trauma care, forensic medicine and clinical practice.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">KKT</div>

              <div>
                <h3>International Training</h3>

                <p>
                  Received specialized KKT (Canada) training for spinal
                  treatment techniques, enhancing advanced clinical
                  understanding of spine-related conditions.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">25+</div>

              <div>
                <h3>Research Publications</h3>

                <p>
                  Published more than twenty-five research papers in National
                  and International Medical Journals, reflecting continuous
                  academic contribution and evidence-based medical practice.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">HOD</div>

              <div>
                <h3>Medical Leadership</h3>

                <p>
                  Leading academic activities, teaching and professional
                  development while mentoring undergraduate and postgraduate
                  medical students.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Areas of Expertise */}

        <section className="expertise-section">
          <div className="section-title">
            <span>AREAS OF EXPERTISE</span>

            <h2>Clinical & Academic Expertise</h2>
          </div>

          <div className="expertise-grid">
            <div>Forensic Medicine</div>

            <div>Trauma Surgery</div>

            <div>Geriatric Orthopaedics</div>

            <div>Medico-Legal Consultation</div>

            <div>Spinal Treatment</div>

            <div>Medical Education</div>

            <div>Clinical Research</div>

            <div>Trauma Management</div>
          </div>
        </section>

        {/* Professional Experience */}

        <section className="experience-section">
          <div className="section-title">
            <span>PROFESSIONAL EXPERIENCE</span>

            <h2>Professional Journey</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-year">25+</div>

              <div>
                <h3>Clinical Practice</h3>

                <span>Trauma & Forensic Medicine</span>

                <p>
                  With more than twenty-five years of clinical experience, Prof.
                  (Dr.) R. K. Mishra has dedicated his career to trauma care,
                  forensic medicine, geriatric orthopaedics and patient-centred
                  healthcare while maintaining the highest standards of
                  professional ethics.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Present</div>

              <div>
                <h3>Academic Leadership</h3>

                <span>Professor & Medical Educator</span>

                <p>
                  Actively involved in medical education, mentoring
                  undergraduate and postgraduate students while contributing
                  towards academic excellence, clinical training and research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Contributions */}

        <section className="why-doctor-section">
          <div className="section-title">
            <span>RESEARCH & PROFESSIONAL CONTRIBUTIONS</span>

            <h2>Academic Excellence & Medical Leadership</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Research Publications</h3>

              <p>
                Authored more than twenty-five research papers published in
                National and International Medical Journals, contributing
                towards evidence-based medicine and scientific advancement in
                healthcare.
              </p>
            </div>

            <div className="why-card">
              <h3>Conferences & Professional Associations</h3>

              <p>
                Served in professional orthopaedic organizations and actively
                participated in numerous state, national and international
                conferences as a speaker, chairperson and panelist while
                supporting academic collaboration and knowledge sharing.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Membership */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>PROFESSIONAL LEADERSHIP</span>

            <h2>Beyond Clinical Practice</h2>
          </div>

          <div className="philosophy-content">
            <p>
              Prof. (Dr.) R. K. Mishra has actively contributed to medical
              education, academic leadership and professional development
              through participation in orthopaedic and medico-legal
              organizations. His experience includes serving in various
              professional roles, supporting legal and academic initiatives and
              participating in conferences focused on advancing clinical
              knowledge and healthcare standards.
            </p>

            <p>
              Alongside patient care, he has also served as an examiner for
              undergraduate and postgraduate medical students, reflecting his
              continued commitment to nurturing the next generation of
              healthcare professionals.
            </p>
          </div>
        </section>

        {/* Patient Care Philosophy */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>HEALTHCARE PHILOSOPHY</span>

            <h2>Knowledge, Experience & Compassion</h2>
          </div>

          <div className="philosophy-content">
            <p>
              Prof. (Dr.) R. K. Mishra believes that quality healthcare is built
              upon knowledge, integrity and compassion. Every patient deserves
              careful evaluation, ethical decision-making and treatment guided
              by scientific evidence and years of clinical experience.
            </p>

            <p>
              At Sargam Healthcare, his focus remains on delivering
              patient-first healthcare while encouraging continuous learning,
              research and multidisciplinary collaboration to improve overall
              healthcare outcomes.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="doctor-cta">
          <div className="doctor-cta-content">
            <span>BOOK CONSULTATION</span>

            <h2>
              Consult
              <br />
              Prof. (Dr.) R. K. Mishra
            </h2>

            <p>
              Schedule your consultation at Sargam Healthcare to receive
              professional guidance supported by decades of clinical experience,
              academic excellence and patient-centred medical care.
            </p>

            <div className="profile-buttons">
              <button
                className="reveal-up"
                onClick={() => (window.location.href = "/book-appointment")}
              >
                Book Appointment
              </button>

              <button
                className="outline-btn reveal-up"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Hospital
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
