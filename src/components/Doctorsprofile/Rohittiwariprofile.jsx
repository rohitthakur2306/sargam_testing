import doctorImage from "../../assests/rohittiwari.png";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
// import "../landingpage/landing.css";
import "../Doctorsprofile/Doctors.css";
// import { useNavigate } from "react-router-dom";
// import useScrollReveal from "../../hooks/useScrollReveal";

export default function Rohittiwariprofile() {
  // useScrollReveal();
  // const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="doctor-profile">
        {/* Breadcrumb */}

        <section className="breadcrumb-section reveal-left">
          <div className="container">
            <span>Home</span>

            <span> / </span>

            <span>Doctors</span>

            <span> / </span>

            <strong>Dr. Rohit Kumar Tiwari</strong>
          </div>
        </section>

        {/* Hero Section */}

        <section className="profile-hero">
          <div className="profile-image">
            <img
              src={doctorImage}
              alt="Dr Rohit Kumar Tiwari | Sargam Healthcare"
            />
          </div>

          <div className="profile-content">
            <span className="doctor-tag">MEDICAL SUPERINTENDENT</span>

            <h1 className="reveal-left">Dr. Rohit Kumar Tiwari</h1>

            <h3>Critical Care Medicine • Cardiology • Emergency Medicine</h3>

            <div className="qualification-strip">
              <span className="reveal-left">MBBS</span>

              <span className="reveal-left">MEM (Emergency Medicine)</span>

              <span className="reveal-left">Fellowship in Critical Care</span>

              <span className="reveal-left">Fellowship in Cardiology</span>
            </div>

            <p className="reveal-up">
              Dr. Rohit Kumar Tiwari is an experienced Critical Care Physician,
              Cardiology Specialist and Emergency Medicine professional
              dedicated to providing evidence-based, compassionate and
              patient-centred healthcare. At Sargam Healthcare, his focus is on
              delivering timely diagnosis, advanced critical care management,
              emergency stabilization and comprehensive cardiac care while
              ensuring every patient receives personalized medical attention.
            </p>

            <div className="hero-highlights">
              <div>✓ Senior Resident – Cardiology</div>

              <div>✓ Critical Care & ICU Specialist</div>

              <div>✓ Emergency Medicine Expert</div>

              <div>✓ Evidence Based Treatment</div>
            </div>

            <div className="profile-buttons">
              <button
                className="reveal-up"
                onClick={() => (window.location.href = "/book-appointment")}
              >
                Book Consultation
              </button>

              <button
                className="outline-btn reveal-up"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sargam Healthcare
              </button>
            </div>
          </div>
        </section>

        {/* Statistics */}

        <section className="doctor-stats">
          <div className="stat-box reveal-left">
            <h2 className="reveal-up">8+</h2>

            <span>Years of Clinical Experience</span>
          </div>

          <div className="stat-box reveal-left">
            <h2 className="reveal-up">15000+</h2>

            <span>Critical Care & ICU Cases</span>
          </div>

          <div className="stat-box reveal-left">
            <h2 className="reveal-up">24/7</h2>

            <span>Emergency & Critical Care</span>
          </div>

          <div className="stat-box reveal-left">
            <h2 className="reveal-up">2018</h2>

            <span>Clinical Practice Since</span>
          </div>
        </section>

        {/* About Doctor */}

        <section className="about-doctor-section">
          <div className="section-title">
            <span>ABOUT THE DOCTOR</span>

            <h2 className="reveal-up">
              Dr. Rohit Kumar Tiwari – Critical Care & Cardiology Specialist at
              Sargam Healthcare
            </h2>
          </div>

          <div className="about-content">
            <p className="reveal-scale">
              Dr. Rohit Kumar Tiwari is a highly experienced physician
              specializing in Critical Care Medicine, Emergency Medicine and
              Cardiology. With years of extensive clinical practice, he has
              dedicated his professional journey to treating critically ill
              patients requiring advanced medical intervention, continuous
              monitoring and multidisciplinary care.
            </p>

            <p className="reveal-scale">
              Throughout his career, Dr. Rohit Kumar Tiwari has managed more
              than 1500 critically ill ICU and CCU patients, including
              individuals requiring ventilator support, emergency cardiac
              management, advanced life support and intensive monitoring. His
              approach combines clinical expertise with compassionate
              communication, ensuring that patients and their families remain
              informed and supported during every stage of treatment.
            </p>

            <p className="reveal-scale">
              At Sargam Healthcare, Dr. Rohit Kumar Tiwari plays a key role in
              strengthening emergency medicine services, critical care protocols
              and patient safety initiatives. His philosophy focuses on accurate
              diagnosis, rapid intervention, evidence-based clinical decisions
              and affordable healthcare solutions that improve long-term patient
              outcomes.
            </p>

            <p className="reveal-scale">
              Beyond clinical responsibilities, Dr. Rohit Kumar Tiwari actively
              contributes to improving healthcare quality, mentoring young
              medical professionals and implementing standardized treatment
              pathways that enhance patient care. His commitment to excellence
              aligns with the vision of Sargam Healthcare to provide modern,
              ethical and accessible healthcare services for every family.
            </p>
          </div>
        </section>

        {/* Qualifications */}

        <section className="qualification-section">
          <div className="section-title">
            <span>EDUCATION & QUALIFICATIONS</span>

            <h2 className="reveal-up">
              Professional Medical Education & Clinical Training
            </h2>
          </div>

          <div className="qualification-timeline">
            <div className="qualification-card reveal-left">
              <div className="qualification-year">MBBS</div>

              <div>
                <h3>Bachelor of Medicine & Bachelor of Surgery</h3>

                <p>
                  Completed medical graduation with comprehensive clinical
                  exposure across Internal Medicine, General Surgery,
                  Cardiology, Emergency Medicine, Intensive Care, Orthopaedics,
                  Neurology, Obstetrics & Gynaecology and Community Medicine.
                </p>
              </div>
            </div>

            <div className="qualification-card reveal-left">
              <div className="qualification-year">MEM</div>

              <div>
                <h3>Master in Emergency Medicine</h3>

                <p>
                  Specialized training in emergency medicine, trauma management,
                  critical care, ventilator management, advanced cardiac life
                  support, sepsis management and intensive care.
                </p>
              </div>
            </div>

            <div className="qualification-card reveal-left">
              <div className="qualification-year">Fellowship</div>

              <div>
                <h3>Advanced Clinical Fellowships</h3>

                <p>
                  Fellowship in Critical Care Medicine, Fellowship in
                  Cardiology, Fellowship in Diabetology and Fellowship in
                  Rheumatology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}

        <section className="expertise-section">
          <div className="section-title">
            <span>CLINICAL EXPERTISE</span>

            <h2 className="reveal-up">Areas of Medical Expertise</h2>
          </div>

          <div className="expertise-grid">
            <div className="reveal-left">Critical Care Medicine</div>

            <div className="reveal-left">Emergency Medicine</div>

            <div className="reveal-left">Cardiology</div>

            <div className="reveal-left">Coronary Care Unit (CCU)</div>

            <div className="reveal-left">Intensive Care Unit (ICU)</div>

            <div className="reveal-left">Acute Coronary Syndrome</div>

            <div className="reveal-left">Heart Failure Management</div>

            <div className="reveal-left">Cardiogenic Shock</div>

            <div className="reveal-left">Septic Shock Management</div>

            <div className="reveal-left">Ventilator Management</div>

            <div className="reveal-left">Advanced Cardiac Monitoring</div>

            <div className="reveal-left">Emergency Stabilization</div>
          </div>
        </section>

        {/* Clinical Procedures */}

        <section className="procedures-section">
          <div className="section-title">
            <span>PROCEDURAL EXPERTISE</span>

            <h2 className="reveal-up">
              Advanced Clinical Skills & Critical Care Procedures
            </h2>
          </div>

          <div className="procedure-grid">
            <div className="procedure-card reveal-left">
              <h3>Airway & Ventilation</h3>

              <ul>
                <li>Endotracheal Intubation</li>

                <li>Mechanical Ventilation</li>

                <li>Non-Invasive Ventilation</li>

                <li>ARDS Management</li>
              </ul>
            </div>

            <div className="procedure-card reveal-left">
              <h3>Critical Care Procedures</h3>

              <ul>
                <li>Central Venous Cannulation</li>

                <li>Arterial Line Placement</li>

                <li>Chest Drain Insertion</li>

                <li>Ultrasound Guided Procedures</li>
              </ul>
            </div>

            <div className="procedure-card reveal-left">
              <h3>Cardiology</h3>

              <ul>
                <li>ECG Interpretation</li>

                <li>ACS Management</li>

                <li>Arrhythmia Management</li>

                <li>Heart Failure Care</li>
              </ul>
            </div>

            <div className="procedure-card reveal-left">
              <h3>Emergency Medicine</h3>

              <ul>
                <li>Emergency Resuscitation</li>

                <li>Shock Management</li>

                <li>Trauma Stabilization</li>

                <li>Advanced Life Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}

        <section className="experience-section">
          <div className="section-title">
            <span>PROFESSIONAL JOURNEY</span>

            <h2 className="reveal-up">Clinical Experience & Leadership</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item reveal-left">
              <div className="timeline-year reveal-up">Present</div>

              <div>
                <h3>Medical Superintendent</h3>

                <span>Sargam Healthcare</span>

                <p className="reveal-up">
                  Leading clinical excellence, strengthening patient safety,
                  emergency medicine, critical care services, quality healthcare
                  delivery and multidisciplinary patient management.
                </p>
              </div>
            </div>

            <div className="timeline-item reveal-left">
              <div className="timeline-year reveal-up">2025</div>

              <div>
                <h3>Senior Resident – Cardiology & CCU</h3>

                <span>High Acuity Cardiac Care</span>

                <p className="reveal-up">
                  Managing critically ill cardiac patients, acute coronary
                  syndromes, advanced heart failure, arrhythmias,
                  ventilator-supported patients and intensive cardiac
                  monitoring.
                </p>
              </div>
            </div>

            <div className="timeline-item reveal-left">
              <div className="timeline-year reveal-up">2021</div>

              <div>
                <h3>Critical Care & Emergency Medicine</h3>

                <span>Intensive Clinical Practice</span>

                <p className="reveal-up">
                  Worked extensively in emergency medicine, intensive care,
                  sepsis management, respiratory failure, trauma care and
                  advanced life support.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Doctor */}

        <section className="why-doctor-section">
          <div className="section-title">
            <span>WHY CHOOSE</span>

            <h2 className="reveal-up">
              Why Patients Trust Dr. Rohit Kumar Tiwari
            </h2>
          </div>

          <div className="why-grid">
            <div className="why-card reveal-left">
              <h3>Evidence-Based Treatment</h3>

              <p className="reveal-up">
                Every treatment plan follows internationally accepted medical
                guidelines and evidence-based clinical practices to ensure safe
                and effective patient care.
              </p>
            </div>

            <div className="why-card reveal-left">
              <h3>Critical Care Expertise</h3>

              <p className="reveal-up">
                Extensive experience in managing critically ill patients
                requiring ICU, CCU, ventilator support and advanced cardiac
                monitoring.
              </p>
            </div>

            <div className="why-card reveal-left">
              <h3>Patient-Centered Care</h3>

              <p className="reveal-up">
                Every patient receives individual attention, transparent
                communication and compassionate medical care throughout the
                treatment journey.
              </p>
            </div>

            <div className="why-card reveal-left">
              <h3>Modern Clinical Approach</h3>

              <p className="reveal-up">
                Combining advanced medical knowledge with modern critical care
                techniques for improved patient outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Patient Care Philosophy */}

        <section className="philosophy-section">
          <div className="section-title">
            <span>PATIENT CARE PHILOSOPHY</span>

            <h2 className="reveal-up">
              Every Patient Deserves Timely, Compassionate & Quality Healthcare
            </h2>
          </div>

          <div className="philosophy-content reveal-left">
            <p>
              Dr. Rohit Kumar Tiwari believes that excellent healthcare begins
              with accurate diagnosis, compassionate communication and
              evidence-based clinical decision making.
            </p>

            <p>
              At Sargam Healthcare, his mission is to ensure that every patient,
              from routine consultations to critically ill ICU admissions,
              receives timely medical attention, advanced treatment options and
              complete transparency throughout their healthcare journey.
            </p>

            <p>
              His commitment to continuous learning, multidisciplinary
              collaboration and ethical medical practice helps deliver better
              clinical outcomes while maintaining the highest standards of
              patient safety and trust.
            </p>
          </div>
        </section>

        {/* FAQ */}

        <section className="faq-section">
          <div className="section-title">
            <span>FREQUENTLY ASKED QUESTIONS</span>

            <h2 className="reveal-up">Questions Patients Frequently Ask</h2>
          </div>

          <div className="faq-container">
            <div className="faq-item reveal-left">
              <h3>What conditions does Dr. Rohit Kumar Tiwari treat?</h3>

              <p className="reveal-up">
                Dr. Rohit Kumar Tiwari specializes in Critical Care Medicine,
                Emergency Medicine, Cardiology, ICU & CCU care, ventilator
                management, heart failure, cardiac emergencies, sepsis
                management and advanced critical patient monitoring.
              </p>
            </div>

            <div className="faq-item reveal-left">
              <h3>
                Does Dr. Rohit Kumar Tiwari provide emergency consultations?
              </h3>

              <p className="reveal-up">
                Yes. At Sargam Healthcare, emergency medical assessment,
                critical care consultation and advanced patient stabilization
                services are available for patients requiring urgent care.
              </p>
            </div>

            <div className="faq-item reveal-left">
              <h3>How can I book an appointment?</h3>

              <p className="reveal-up">
                Patients can easily schedule their consultation through the
                online appointment booking system available on the Sargam
                Healthcare website or by contacting the hospital directly.
              </p>
            </div>

            <div className="faq-item reveal-up">
              <h3>Why choose Sargam Healthcare?</h3>

              <p className="reveal-left">
                Sargam Healthcare combines experienced doctors, modern
                healthcare facilities, evidence-based treatment, affordable
                medical services and compassionate patient care under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Related Doctors */}

        <section className="related-doctors">
          <div className="section-title">
            <span>OUR SPECIALISTS</span>

            <h2 className="reveal-up">
              Meet Other Medical Experts at Sargam Healthcare
            </h2>
          </div>

          <div className="related-grid">
            <div className="related-card reveal-left">
              <h3>Dr. Neeraj Jha</h3>

              <p>MD Physician</p>
            </div>

            <div className="related-card reveal-left">
              <h3>Dr. Lokesh Garg</h3>

              <p>Orthopaedic & Joint Replacement Specialist</p>
            </div>

            <div className="related-card reveal-left">
              <h3>Dr. Amit Beniwal</h3>

              <p>Internal Medicine & Diabetes Specialist</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}

        <section className="doctor-cta">
          <div className="doctor-cta-content">
            <span>BOOK YOUR CONSULTATION</span>

            <h2 className="reveal-up">
              Consult Dr. Rohit Kumar Tiwari at Sargam Healthcare
            </h2>

            <p className="reveal-up">
              Whether you require expert critical care consultation, emergency
              medical assessment or advanced cardiac care, Dr. Rohit Kumar
              Tiwari and the medical team at Sargam Healthcare are committed to
              providing compassionate, evidence-based and affordable healthcare
              for every patient.
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
