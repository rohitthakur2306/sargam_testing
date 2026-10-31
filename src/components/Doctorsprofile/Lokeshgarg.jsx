import doctorImage from "../../assests/lokeshGarg.png";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
import "../landingpage/landing.css";

export default function DrLokeshGargProfile() {
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

            <strong>Dr. Lokesh Garg</strong>
          </div>
        </section>

        {/* Hero Section */}

        <section className="profile-hero">
          <div className="profile-image">
            <img src={doctorImage} alt="Dr. Lokesh Garg" />
          </div>

          <div className="profile-content">
            <span className="doctor-tag">VISITING CONSULTANT</span>

            <h1>Dr. Lokesh Garg</h1>

            <h3>MBBS, MS (Orthopaedic)</h3>

            <div className="qualification-strip">
              <span>Joint Replacement</span>

              <span>Spine Surgery</span>

              <span>Orthopaedic Oncology</span>

              <span>Sports Injury</span>
            </div>

            <p>
              Dr. Lokesh Garg is a Visiting Consultant at Sargam Healthcare with
              expertise in Orthopaedics, Joint Replacement, Spine Surgery and
              Orthopaedic Oncology. He believes in providing personalized,
              evidence-based treatment with modern surgical techniques to help
              patients regain mobility, reduce pain and improve their quality of
              life.
            </p>

            <div className="hero-highlights">
              <div>✓ Joint Replacement</div>

              <div>✓ Spine Surgery</div>

              <div>✓ Orthopaedic Oncology</div>

              <div>✓ Advanced Patient Care</div>
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

            <span>Canada Trained</span>
          </div>

          <div className="stat-box">
            <h2>MS</h2>

            <span>Orthopaedics</span>
          </div>
        </section>

        {/* About */}

        <section className="about-doctor-section">
          <div className="section-title">
            <span>ABOUT THE DOCTOR</span>

            <h2>
              Dr. Lokesh Garg
              <br />
              Orthopaedic & Joint Replacement Specialist
            </h2>
          </div>

          <div className="about-content">
            <p>
              Dr. Lokesh Garg is an experienced Orthopaedic Surgeon and Visiting
              Consultant at Sargam Healthcare, specializing in Joint
              Replacement, Spine Surgery and Orthopaedic Oncology. His approach
              combines advanced surgical expertise with patient-focused care to
              help individuals recover faster and return to an active lifestyle.
            </p>

            <p>
              Having completed MBBS and MS (Orthopaedic), Dr. Garg has developed
              expertise in managing complex bone and joint disorders,
              musculoskeletal injuries, degenerative conditions and orthopaedic
              cancers. His treatment philosophy focuses on accurate diagnosis,
              personalized treatment planning and long-term rehabilitation.
            </p>

            <p>
              At Sargam Healthcare, Dr. Lokesh Garg works closely with patients
              requiring advanced orthopaedic consultation, providing modern
              treatment solutions with compassion, transparency and clinical
              excellence.
            </p>
          </div>
        </section>

        {/* Qualifications */}

        <section className="qualification-section">
          <div className="section-title">
            <span>EDUCATION & PROFESSIONAL TRAINING</span>

            <h2>Medical Qualifications</h2>
          </div>

          <div className="qualification-timeline">
            <div className="qualification-card">
              <div className="qualification-year">MBBS</div>

              <div>
                <h3>Bachelor of Medicine & Bachelor of Surgery</h3>

                <p>
                  Strong medical foundation in patient diagnosis, emergency care
                  and evidence-based clinical practice.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">MS</div>

              <div>
                <h3>Master of Surgery (Orthopaedics)</h3>

                <p>
                  Specialized training in Orthopaedic Surgery with expertise in
                  bone, joint and musculoskeletal disorders.
                </p>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-year">KKT</div>

              <div>
                <h3>International Training</h3>

                <p>
                  Among the first Indian Orthopaedic Surgeons to receive
                  specialized KKT training from Canada for advanced spinal
                  treatment techniques.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Expertise */}

        <section className="expertise-section">
          <div className="section-title">
            <span>AREAS OF EXPERTISE</span>

            <h2>Clinical Expertise & Special Interests</h2>
          </div>

          <div className="expertise-grid">
            <div>Joint Replacement Surgery</div>

            <div>Hip Replacement</div>

            <div>Knee Replacement</div>

            <div>Spine Surgery</div>

            <div>Orthopaedic Oncology</div>

            <div>Pelvis Surgery</div>

            <div>Sports Injury Management</div>

            <div>Trauma & Fracture Care</div>
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
              <div className="timeline-year">Present</div>

              <div>
                <h3>Visiting Consultant</h3>

                <span>Sargam Healthcare</span>

                <p>
                  Providing expert consultation for joint replacement,
                  orthopaedic disorders, spine conditions and musculoskeletal
                  injuries, helping patients receive advanced orthopaedic care
                  closer to home.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Current</div>

              <div>
                <h3>Consultant Orthopaedic Oncology & Joint Replacement</h3>

                <span>SHALBY Sanar International Hospital</span>

                <p>
                  Managing complex orthopaedic oncology cases, joint replacement
                  surgeries and advanced reconstructive procedures using modern
                  surgical techniques.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Earlier</div>

              <div>
                <h3>Consultant Orthopaedic Surgeon</h3>

                <span>BLK Max • Narayana • Asian Institute</span>

                <p>
                  Worked with leading hospitals, gaining extensive experience in
                  orthopaedic oncology, trauma care, joint replacement and
                  musculoskeletal surgery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Contributions */}

        <section className="why-doctor-section">
          <div className="section-title">
            <span>ACADEMIC CONTRIBUTIONS</span>

            <h2>Research & Professional Excellence</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Research Publications</h3>

              <p>
                Authored more than twenty-five research papers published in
                National and International medical journals, contributing to the
                advancement of orthopaedic knowledge and evidence-based
                practice.
              </p>
            </div>

            <div className="why-card">
              <h3>Academic & Conference Faculty</h3>

              <p>
                Regular speaker, panelist and chairperson at state, national and
                international orthopaedic conferences, sharing clinical
                experience and modern surgical practices.
              </p>
            </div>
          </div>
        </section>

        {/* Patient Philosophy */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>PATIENT CARE PHILOSOPHY</span>

            <h2>Restoring Mobility, Improving Lives</h2>
          </div>

          <div className="philosophy-content">
            <p>
              Dr. Lokesh Garg believes that every patient deserves personalized
              orthopaedic care supported by accurate diagnosis, transparent
              communication and advanced surgical techniques. His treatment
              approach focuses on relieving pain, restoring mobility and helping
              patients return to their daily lives with confidence.
            </p>

            <p>
              At Sargam Healthcare, he works closely with patients to provide
              ethical, evidence-based and compassionate orthopaedic care while
              ensuring the highest standards of clinical excellence.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="doctor-cta">
          <div className="doctor-cta-content">
            <span>BOOK A CONSULTATION</span>

            <h2>Consult Dr. Lokesh Garg</h2>

            <p>
              Schedule your appointment with Dr. Lokesh Garg at Sargam
              Healthcare for expert orthopaedic consultation, joint replacement
              guidance, spine care and advanced bone and joint treatment.
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
