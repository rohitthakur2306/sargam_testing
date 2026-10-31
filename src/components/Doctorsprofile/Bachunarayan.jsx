import doctorImage from "../../assests/bacchu-sir-img.png";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
import "../landingpage/landing.css";

export default function DrBachuNarayanSinghProfile() {
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

            <strong>Prof. (Dr.) Bachu Narayan Singh</strong>
          </div>
        </section>

        {/* Hero */}

        <section className="profile-hero">
          <div className="profile-image">
            <img src={doctorImage} alt="Prof. (Dr.) Bachu Narayan Singh" />
          </div>

          <div className="profile-content">
            <span className="doctor-tag">DEAN & PROFESSOR</span>

            <h1>Prof. (Dr.) Bachu Narayan Singh</h1>

            <h3>
              MD (Community Medicine) Public Health & Preventive Medicine
              Specialist
            </h3>

            <div className="qualification-strip">
              <span>20+ Years Experience</span>

              <span>Dean & Professor</span>

              <span>Community Medicine</span>

              <span>Public Health</span>
            </div>

            <p>
              Prof. (Dr.) Bachu Narayan Singh is an experienced academician,
              physician and public health expert with more than two decades of
              experience in Community Medicine, Preventive Healthcare, Clinical
              Practice and Medical Education. As Dean & Professor, he has
              dedicated his career to improving healthcare through education,
              research, disease prevention and patient-centred medical practice
              while mentoring the next generation of healthcare professionals.
            </p>

            <div className="hero-highlights">
              <div>✓ Public Health Expert</div>

              <div>✓ Dean & Professor</div>

              <div>✓ Medical Education</div>

              <div>✓ Community Healthcare</div>
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
            <h2>30+</h2>

            <span>Years Experience</span>
          </div>

          <div className="stat-box">
            <h2>MD</h2>

            <span>Community Medicine</span>
          </div>

          <div className="stat-box">
            <h2>Dean</h2>

            <span>Medical Leadership</span>
          </div>

          <div className="stat-box">
            <h2>Research</h2>

            <span>Public Health</span>
          </div>
        </section>

        {/* About */}

        <section className="about-doctor-section">
          <div className="section-title">
            <span>ABOUT THE DOCTOR</span>

            <h2>Academic Leadership & Public Health Excellence</h2>
          </div>

          <div className="about-content">
            <p>
              Prof. (Dr.) Bachu Narayan Singh is a highly respected medical
              academician and public health specialist with an extensive career
              dedicated to Community Medicine, Preventive Healthcare, Clinical
              Practice and Medical Education. Throughout more than two decades
              of professional experience, he has worked across academic
              institutions, hospitals and public health organizations while
              actively contributing to healthcare improvement through education,
              research and patient care.
            </p>

            <p>
              He currently serves as Dean & Professor of Community Medicine,
              providing academic leadership, mentoring undergraduate and
              postgraduate medical students and promoting evidence-based public
              health practices. His expertise extends beyond classroom teaching,
              combining clinical experience with health policy, epidemiology and
              community outreach initiatives.
            </p>

            <p>
              At Sargam Healthcare, Prof. (Dr.) Bachu Narayan Singh contributes
              his experience in preventive medicine, community health and
              medical education while supporting the hospital's commitment
              towards ethical, patient-focused and scientifically driven
              healthcare.
            </p>
          </div>
        </section>

        {/* Qualifications */}

        <section className="qualification-section">
          <div className="section-title">
            <span>MEDICAL EDUCATION</span>

            <h2>Qualifications & Academic Background</h2>
          </div>

          <div className="qualification-timeline">
            <div className="qualification-card">
              <div className="qualification-year">MBBS</div>

              <div>
                <h3>Bachelor of Medicine & Bachelor of Surgery</h3>

                <p>
                  Completed MBBS from SKMCH, Muzaffarpur, building a strong
                  foundation in clinical medicine and patient care.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">MD</div>

              <div>
                <h3>Doctor of Medicine Community Medicine</h3>

                <p>
                  Completed MD in Community Medicine with specialization in
                  Public Health, Epidemiology and Preventive Medicine.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">Dean</div>

              <div>
                <h3>Academic Leadership</h3>

                <p>
                  Leading academic programs, faculty development, medical
                  education and research initiatives while promoting excellence
                  in healthcare education.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">Research</div>

              <div>
                <h3>Public Health Research</h3>

                <p>
                  Actively involved in research focused on community medicine,
                  epidemiology, disease prevention and healthcare improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Areas of Expertise */}

        <section className="expertise-section">
          <div className="section-title">
            <span>AREAS OF EXPERTISE</span>

            <h2>Community Healthcare & Medical Leadership</h2>
          </div>

          <div className="expertise-grid">
            <div>Community Medicine</div>

            <div>Public Health</div>

            <div>Preventive Medicine</div>

            <div>Epidemiology</div>

            <div>Maternal & Child Health</div>

            <div>Health Program Management</div>

            <div>Medical Education</div>

            <div>Clinical Research</div>
          </div>
        </section>

        {/* Professional Journey */}

        <section className="experience-section">
          <div className="section-title">
            <span>PROFESSIONAL JOURNEY</span>

            <h2>Experience & Academic Leadership</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-year">Present</div>

              <div>
                <h3>Dean & Professor</h3>

                <span>Community Medicine</span>

                <p>
                  Providing academic leadership, faculty development and medical
                  education while promoting evidence-based public health
                  practices and strengthening healthcare delivery through
                  teaching, research and institutional development.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Earlier</div>

              <div>
                <h3>Professor & Head of Department</h3>

                <span>Community Medicine</span>

                <p>
                  Served in various academic and healthcare institutions,
                  mentoring undergraduate and postgraduate medical students,
                  conducting research and supporting community health
                  initiatives focused on disease prevention and healthcare
                  awareness.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">20+</div>

              <div>
                <h3>Clinical & Public Health Practice</h3>

                <span>Community Healthcare</span>

                <p>
                  More than two decades of experience in community medicine,
                  preventive healthcare, epidemiology, clinical practice and
                  healthcare administration, contributing towards improved
                  public health outcomes and quality medical education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Contributions */}

        <section className="why-doctor-section">
          <div className="section-title">
            <span>RESEARCH & ACADEMIC CONTRIBUTIONS</span>

            <h2>Advancing Public Health Through Knowledge</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Medical Education</h3>

              <p>
                Dedicated to teaching, mentoring and guiding future healthcare
                professionals through structured medical education, academic
                leadership and evidence-based clinical training.
              </p>
            </div>

            <div className="why-card">
              <h3>Research & Publications</h3>

              <p>
                Actively involved in research related to community medicine,
                epidemiology and preventive healthcare while contributing to
                scientific literature through publications, presentations and
                academic collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Healthcare Philosophy */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>HEALTHCARE PHILOSOPHY</span>

            <h2>Prevention, Education & Better Communities</h2>
          </div>

          <div className="philosophy-content">
            <p>
              Prof. (Dr.) Bachu Narayan Singh believes that the strongest
              healthcare system begins long before a patient reaches the
              hospital. Preventive medicine, community awareness, health
              education and timely intervention play a vital role in creating
              healthier individuals and healthier communities.
            </p>

            <p>
              His vision is centered on combining clinical expertise, academic
              excellence and public health initiatives to improve healthcare
              accessibility while empowering future healthcare professionals
              through continuous learning and ethical medical practice.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="doctor-cta">
          <div className="doctor-cta-content">
            <span>CONSULT WITH OUR EXPERT</span>

            <h2>
              Connect With
              <br />
              Prof. (Dr.) Bachu Narayan Singh
            </h2>

            <p>
              Consult Prof. (Dr.) Bachu Narayan Singh at Sargam Healthcare for
              expert guidance supported by decades of experience in Community
              Medicine, Public Health, Preventive Healthcare and Medical
              Education.
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
