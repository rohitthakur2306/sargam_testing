import doctorImage from "../../assests/NeerajJha.png";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
import "../Doctorsprofile/Doctors.css";

export default function DrNeerajJhaProfile() {
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

            <strong>Dr. Neeraj Jha</strong>
          </div>
        </section>

        {/* Hero */}

        <section className="profile-hero">
          <div className="profile-image reveal-left">
            <img src={doctorImage} alt="Dr. Neeraj Jha" />
          </div>

          <div className="profile-content">
            <span className="doctor-tag">CEO & BUSINESS PARTNER</span>

            <h1>Dr. Neeraj Jha</h1>

            <h3>MD Physician • Internal Medicine</h3>

            <div className="qualification-strip">
              <span>MBBS</span>

              <span>MD Physician</span>

              <span>13+ Years Clinical Trials</span>

              <span>4.2+ Years Clinical Practice</span>
            </div>

            <p>
              Dr. Neeraj Jha is an experienced MD Physician and serves as the
              CEO & Business Partner of Sargam Healthcare. His commitment to
              evidence-based medicine, ethical healthcare practices and
              patient-first values has helped strengthen the hospital's vision
              of delivering affordable and accessible healthcare for every
              individual.
            </p>

            <div className="hero-highlights">
              <div>✓ MD Physician</div>

              <div>✓ CEO & Business Partner</div>

              <div>✓ Internal Medicine</div>

              <div>✓ Patient First Care</div>
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
            <h2>13+</h2>

            <span>Years in Clinical Research</span>
          </div>

          <div className="stat-box">
            <h2>4.2+</h2>

            <span>Years Clinical Practice</span>
          </div>

          <div className="stat-box">
            <h2>MD</h2>

            <span>Internal Medicine</span>
          </div>

          <div className="stat-box">
            <h2>CEO</h2>

            <span>Healthcare Leadership</span>
          </div>
        </section>

        {/* About */}

        <section className="about-doctor-section">
          <div className="section-title">
            <span>ABOUT THE DOCTOR</span>

            <h2>
              Dr. Neeraj Jha
              <br />
              MD Physician & CEO of Sargam Healthcare
            </h2>
          </div>

          <div className="about-content">
            <p>
              Dr. Neeraj Jha is a dedicated MD Physician with extensive
              experience in clinical research, patient care and healthcare
              management. As the CEO & Business Partner of Sargam Healthcare, he
              plays an important role in shaping the hospital's vision of
              providing affordable, ethical and high-quality medical services
              for patients across New Delhi and the NCR region.
            </p>

            <p>
              With over thirteen years of experience in clinical trials and more
              than four years of clinical practice, Dr. Neeraj Jha has
              contributed to evidence-based healthcare and patient-centered
              treatment approaches. His focus remains on accurate diagnosis,
              preventive healthcare and transparent communication, ensuring
              every patient receives personalized medical attention.
            </p>

            <p>
              At Sargam Healthcare, he works closely with the medical team to
              strengthen healthcare delivery, improve patient experience and
              promote continuous innovation in hospital services. His leadership
              reflects the organization's commitment to combining compassionate
              care with modern medical practices.
            </p>
          </div>
        </section>

        {/* Qualification */}

        <section className="qualification-section">
          <div className="section-title">
            <span>EDUCATION & PROFESSIONAL BACKGROUND</span>

            <h2>Medical Education & Professional Journey</h2>
          </div>

          <div className="qualification-timeline">
            <div className="qualification-card">
              <div className="qualification-year">MBBS</div>

              <div>
                <h3>Bachelor of Medicine & Bachelor of Surgery</h3>

                <p>
                  Completed medical education with comprehensive training in
                  diagnosis, patient care and evidence-based clinical practice.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">MD</div>

              <div>
                <h3>Doctor of Medicine (Physician)</h3>

                <p>
                  Specialized in Internal Medicine with a strong focus on
                  patient diagnosis, disease management and preventive
                  healthcare.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">13+</div>

              <div>
                <h3>Clinical Research & Trials</h3>

                <p>
                  More than thirteen years of experience in clinical trials,
                  contributing to research-driven healthcare and quality medical
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Expertise */}

        <section className="expertise-section">
          <div className="section-title">
            <span>AREAS OF EXPERTISE</span>

            <h2>Clinical Expertise & Professional Focus</h2>
          </div>

          <div className="expertise-grid">
            <div>Internal Medicine</div>

            <div>General Physician</div>

            <div>Preventive Healthcare</div>

            <div>Clinical Research</div>

            <div>Lifestyle Disorders</div>

            <div>Diabetes Management</div>

            <div>Hypertension Care</div>

            <div>Patient Counselling</div>
          </div>
        </section>

        {/* Leadership */}

        <section className="experience-section">
          <div className="section-title">
            <span>LEADERSHIP</span>

            <h2>Leadership at Sargam Healthcare</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-year">Present</div>

              <div>
                <h3>CEO & Business Partner</h3>

                <span>Sargam Healthcare</span>

                <p>
                  As the CEO & Business Partner of Sargam Healthcare, Dr. Neeraj
                  Jha contributes to hospital management, quality improvement
                  initiatives and patient-focused healthcare services. His
                  leadership is centered around ethical medical practices,
                  operational excellence and making quality healthcare more
                  accessible for every patient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>HEALTHCARE PHILOSOPHY</span>

            <h2>
              Building Healthcare Around Trust, Compassion & Clinical Excellence
            </h2>
          </div>

          <div className="philosophy-content">
            <p>
              Dr. Neeraj Jha believes that healthcare extends beyond diagnosis
              and treatment. It is about understanding every patient's needs,
              maintaining transparency throughout the treatment journey and
              ensuring that quality medical care remains affordable and
              accessible.
            </p>

            <p>
              His vision for Sargam Healthcare is to create a patient-centric
              healthcare environment where experienced doctors, modern medical
              facilities and compassionate care come together to improve health
              outcomes for individuals and families across Delhi NCR.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="doctor-cta">
          <div className="doctor-cta-content">
            <span>CONSULTATION</span>

            <h2>Book Your Consultation With Dr. Neeraj Jha</h2>

            <p>
              Connect with Dr. Neeraj Jha at Sargam Healthcare for professional
              medical guidance, evidence-based treatment and compassionate
              patient care. Our team is committed to delivering quality
              healthcare with a patient-first approach.
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
