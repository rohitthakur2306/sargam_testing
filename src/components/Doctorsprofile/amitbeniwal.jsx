import doctorImage from "../../assests/AmitBeniwal.png";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
import "../landingpage/landing.css";

export default function DrAmitBeniwalProfile() {
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

            <strong>Dr. Amit Beniwal</strong>
          </div>
        </section>

        {/* Hero */}

        <section className="profile-hero">
          <div className="profile-image">
            <img src={doctorImage} alt="Dr. Amit Beniwal" />
          </div>

          <div className="profile-content">
            <span className="doctor-tag">CONSULTANT PHYSICIAN</span>

            <h1>Dr. Amit Beniwal</h1>

            <h3>MBBS (AFMC) • M.Med • MRCP</h3>

            <div className="qualification-strip">
              <span>19+ Years Experience</span>

              <span>MRCP</span>

              <span>Fellow Diabetology</span>

              <span>RCP London</span>
            </div>

            <p>
              Dr. Amit Beniwal is an experienced Consultant Physician with more
              than 19 years of clinical experience. His medical career reflects
              a strong commitment to evidence-based medicine, ethical clinical
              practice and patient-centred healthcare. With internationally
              recognized qualifications and years of practical experience, he
              focuses on delivering comprehensive medical care with compassion
              and professionalism.
            </p>

            <div className="hero-highlights">
              <div>✓ 19+ Years Experience</div>

              <div>✓ International Qualification</div>

              <div>✓ Patient First Care</div>

              <div>✓ Evidence Based Medicine</div>
            </div>

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

        {/* Statistics */}

        <section className="doctor-stats">
          <div className="stat-box">
            <h2>19+</h2>

            <span>Years Experience</span>
          </div>

          <div className="stat-box">
            <h2>MRCP</h2>

            <span>United Kingdom</span>
          </div>

          <div className="stat-box">
            <h2>AFMC</h2>

            <span>MBBS Graduate</span>
          </div>

          <div className="stat-box">
            <h2>RCP</h2>

            <span>London Fellowship</span>
          </div>
        </section>

        {/* About */}

        <section className="about-doctor-section">
          <div className="section-title">
            <span>ABOUT THE DOCTOR</span>

            <h2>
              Dr. Amit Beniwal
              <br />
              Consultant Physician
            </h2>
          </div>

          <div className="about-content">
            <p>
              Dr. Amit Beniwal is an experienced Consultant Physician associated
              with Sargam Healthcare. He has completed his MBBS from the Armed
              Forces Medical College (AFMC), followed by M.Med, MRCP and
              Fellowship in Diabetology from the Royal College of Physicians,
              London.
            </p>

            <p>
              With over nineteen years of clinical experience, Dr. Amit Beniwal
              has been dedicated to providing high-quality medical consultation
              based on scientific evidence, clinical expertise and compassionate
              patient care. His approach emphasizes accurate diagnosis, clear
              communication and personalized treatment plans.
            </p>

            <p>
              At Sargam Healthcare, he is committed to maintaining the highest
              standards of medical practice while ensuring that every patient
              receives respectful, transparent and comprehensive healthcare in a
              comfortable environment.
            </p>
          </div>
        </section>

        {/* Qualifications */}

        <section className="qualification-section">
          <div className="section-title">
            <span>QUALIFICATIONS</span>

            <h2>Medical Education & Professional Training</h2>
          </div>

          <div className="qualification-timeline">
            <div className="qualification-card">
              <div className="qualification-year">MBBS</div>

              <div>
                <h3>Armed Forces Medical College (AFMC)</h3>

                <p>
                  Completed Bachelor of Medicine & Bachelor of Surgery with a
                  strong foundation in modern clinical medicine.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">M.Med</div>

              <div>
                <h3>Master of Medicine</h3>

                <p>
                  Advanced postgraduate medical education with continued focus
                  on patient-centred clinical practice and evidence-based
                  treatment.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">MRCP</div>

              <div>
                <h3>Member of the Royal College of Physicians</h3>

                <p>
                  Internationally recognised professional qualification
                  demonstrating advanced standards in internal medicine and
                  patient care.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">RCP</div>

              <div>
                <h3>Fellowship in Diabetology</h3>

                <p>
                  Fellowship from the Royal College of Physicians, London,
                  enhancing expertise in diabetes management and evidence-based
                  medical care.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Areas of Expertise */}

        <section className="expertise-section">
          <div className="section-title">
            <span>CLINICAL EXPERTISE</span>

            <h2>Areas of Medical Practice</h2>
          </div>

          <div className="expertise-grid">
            <div>General Medicine</div>

            <div>Adult Healthcare</div>

            <div>Diabetes Management</div>

            <div>Preventive Healthcare</div>

            <div>Lifestyle Disorders</div>

            <div>Clinical Consultation</div>

            <div>Evidence-Based Medicine</div>

            <div>Long-Term Patient Care</div>
          </div>
        </section>

        {/* Professional Experience */}

        <section className="experience-section">
          <div className="section-title">
            <span>PROFESSIONAL EXPERIENCE</span>

            <h2>Clinical Journey</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-year">Present</div>

              <div>
                <h3>Consultant Physician</h3>

                <span>Sargam Healthcare</span>

                <p>
                  Providing comprehensive medical consultation, patient
                  evaluation and evidence-based treatment with a focus on
                  quality healthcare, compassionate patient care and long-term
                  wellness.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">19+</div>

              <div>
                <h3>Clinical Experience</h3>

                <span>Physician Practice</span>

                <p>
                  More than nineteen years of experience in clinical medicine,
                  delivering patient-centred healthcare through ethical medical
                  practice, accurate diagnosis and continuous professional
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Highlights */}

        <section className="why-doctor-section">
          <div className="section-title">
            <span>PROFESSIONAL HIGHLIGHTS</span>

            <h2>Experience & Medical Excellence</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>International Qualifications</h3>

              <p>
                Dr. Amit Beniwal has completed MBBS (AFMC), M.Med, MRCP and
                Fellowship in Diabetology from the Royal College of Physicians,
                London, reflecting his commitment to maintaining international
                standards of medical practice.
              </p>
            </div>

            <div className="why-card">
              <h3>Patient-Centred Care</h3>

              <p>
                Every consultation is focused on understanding individual
                patient needs, providing clear communication, evidence-based
                treatment and long-term health management for better clinical
                outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>HEALTHCARE PHILOSOPHY</span>

            <h2>Caring Beyond Treatment</h2>
          </div>

          <div className="philosophy-content">
            <p>
              Dr. Amit Beniwal believes that quality healthcare begins with
              listening to patients, understanding their concerns and building
              trust through transparent communication. Every treatment plan
              should be personalized, scientifically guided and focused on
              improving both immediate health outcomes and long-term wellbeing.
            </p>

            <p>
              At Sargam Healthcare, his goal is to provide accessible, ethical
              and compassionate medical care while encouraging preventive
              healthcare and healthy lifestyle practices that contribute to a
              better quality of life for every patient.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="doctor-cta">
          <div className="doctor-cta-content">
            <span>BOOK YOUR CONSULTATION</span>

            <h2>Consult Dr. Amit Beniwal</h2>

            <p>
              Schedule your appointment with Dr. Amit Beniwal at Sargam
              Healthcare and receive professional, patient-focused medical care
              supported by decades of clinical experience and internationally
              recognised medical qualifications.
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
