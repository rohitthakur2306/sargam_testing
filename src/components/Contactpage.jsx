import { Link } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

import "./Contact.css";

import heroImage from "../assests/alldoctorsimage.jpeg";
import minakshiImage from "../assests/MinakshiYadav.png";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd586WAsGJAmr98ic0g20M7K9G2fwWSZUkX43aIOuV87j6T0A/viewform";

export default function Contact() {
  const contactCards = [
    {
      number: "01",
      icon: "✚",
      title: "Emergency",
      subtitle: "24×7 Emergency Assistance",
      value: "+91 9354030578",
      action: "Call Now",
      href: "tel:+919354030578",
      featured: true,
    },
    {
      number: "02",
      icon: "◷",
      title: "Appointments",
      subtitle: "Book Your Consultation",
      value: "Mon – Sat · 9:00 AM – 8:00 PM",
      action: "Book Appointment",
      href: "/book-appointment",
    },
    {
      number: "03",
      icon: "✉",
      title: "Email",
      subtitle: "Reach Our Team",
      value: "sargamheathcarereception@gmail.com",
      action: "Send Email",
      href: "mailto:sargamheathcarereception@gmail.com",
    },
  ];

  const departments = [
    {
      number: "01",
      icon: "✚",
      title: "Emergency",
      description: "24×7 Emergency Medical Support",
    },
    {
      number: "02",
      icon: "＋",
      title: "General Medicine",
      description: "Consultation & Routine Healthcare",
    },
    {
      number: "03",
      icon: "⌁",
      title: "Orthopaedics",
      description: "Bone, Joint & Spine Care",
    },
    {
      number: "04",
      icon: "♡",
      title: "Critical Care",
      description: "Intensive Care & Emergency Support",
    },
    {
      number: "05",
      icon: "⊕",
      title: "Laboratory",
      description: "Diagnostics & Medical Tests",
    },
    {
      number: "06",
      icon: "▦",
      title: "Administration",
      description: "General Enquiries & Assistance",
    },
  ];

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer:
        "Appointments can be booked online, through our enquiry form, or by calling the hospital reception.",
    },
    {
      question: "Is emergency service available 24×7?",
      answer: "Yes. Our emergency services are available round the clock.",
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes. We assist patients with multiple insurance providers.",
    },
    {
      question: "Can I collect reports online?",
      answer:
        "Please contact our reception for report availability and collection process.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="contact-hero"
          style={{
            "--contact-hero-image": `url(${heroImage})`,
          }}
        >
          <div className="contact-hero-bg" />
          <div className="contact-hero-overlay" />

          <div className="contact-hero-inner">
            <div className="contact-hero-content">
              <div className="contact-eyebrow">
                <span />
                SARGAM HEALTHCARE · CONTACT
              </div>

              <h1>
                We're Here
                <br />
                <em>To Help You.</em>
              </h1>

              <p>
                Whether you need an appointment, medical guidance, emergency
                assistance, or have a general enquiry, our team is ready to
                help.
              </p>

              <div className="contact-hero-actions">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn contact-btn-light"
                >
                  Submit Your Query
                  <span>↗</span>
                </a>

                <Link
                  to="/book-appointment"
                  className="contact-btn contact-btn-outline"
                >
                  Book Appointment
                  <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="contact-hero-side">
              <div className="hero-side-label">PATIENT SUPPORT</div>

              <div className="hero-side-number">
                24<span>/</span>7
              </div>

              <p>
                Emergency assistance and patient support whenever you need it.
              </p>

              <a href="tel:+919354030578">
                +91 9354030578
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="contact-hero-bottom">
            <span>01</span>

            <div />

            <p>Compassionate care starts with listening</p>
          </div>
        </section>

        {/* =====================================================
            QUICK CONTACT
        ===================================================== */}

        <section className="contact-quick-section">
          <div className="contact-container">
            <div className="contact-section-intro compact">
              <div>
                <span>GET IN TOUCH</span>

                <h2>
                  Reach the right
                  <br />
                  <em>team, faster.</em>
                </h2>
              </div>

              <p>
                Choose the most convenient way to connect with Sargam
                Healthcare.
              </p>
            </div>

            <div className="contact-card-grid">
              {contactCards.map((item) => (
                <div
                  className={`contact-card ${item.featured ? "featured" : ""}`}
                  key={item.number}
                >
                  <div className="contact-card-top">
                    <span className="contact-card-number">{item.number}</span>

                    <div className="contact-card-icon">{item.icon}</div>
                  </div>

                  <div className="contact-card-body">
                    <span className="contact-card-label">{item.subtitle}</span>

                    <h3>{item.title}</h3>

                    <p>{item.value}</p>
                  </div>

                  <a href={item.href} className="contact-card-action">
                    {item.action}
                    <span>↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOSPITAL EXPERIENCE
        ===================================================== */}

        <section className="contact-hospital-section">
          <div className="contact-container">
            <div className="hospital-layout">
              <div className="hospital-image">
                <div className="hospital-image-bg" />

                <img src={minakshiImage} alt="Sargam Healthcare" />

                <div className="hospital-image-caption">
                  <span>SG</span>
                  <div>
                    <strong>Sargam Healthcare</strong>
                    <small>Samalka · New Delhi</small>
                  </div>
                </div>
              </div>

              <div className="hospital-content">
                <div className="contact-section-tag">ABOUT OUR HOSPITAL</div>

                <h2>
                  A healthcare
                  <br />
                  experience built
                  <br />
                  around <em>you.</em>
                </h2>

                <p className="hospital-description">
                  Located in the heart of Samalka, New Delhi, Sargam Healthcare
                  is committed to providing compassionate, affordable and
                  evidence-based healthcare with modern infrastructure and
                  experienced medical professionals.
                </p>

                <div className="hospital-details">
                  <div className="hospital-detail">
                    <span className="detail-icon">⌖</span>

                    <div>
                      <small>VISIT US</small>
                      <strong>
                        Sargam Healthcare,
                        <br />
                        Samalka, New Delhi
                      </strong>
                    </div>
                  </div>

                  <div className="hospital-detail">
                    <span className="detail-icon">◷</span>

                    <div>
                      <small>WORKING HOURS</small>
                      <strong>
                        Monday – Saturday
                        <br />
                        9:00 AM – 8:00 PM
                      </strong>
                    </div>
                  </div>

                  <div className="hospital-detail">
                    <span className="detail-icon emergency">✚</span>

                    <div>
                      <small>EMERGENCY</small>
                      <strong>Available 24×7</strong>
                    </div>
                  </div>

                  <div className="hospital-detail">
                    <span className="detail-icon">＋</span>

                    <div>
                      <small>FACILITIES</small>
                      <strong>
                        Pharmacy · Laboratory
                        <br />
                        Surgery · Ortho · Cardiology · Pedia
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ENQUIRY
        ===================================================== */}

        <section className="contact-enquiry-section">
          <div className="contact-container">
            <div className="enquiry-panel">
              <div className="enquiry-content">
                <div className="contact-section-tag light">PATIENT SUPPORT</div>

                <h2>
                  Have a question?
                  <br />
                  <em>Let's talk.</em>
                </h2>

                <p>
                  Whether you want to book an appointment, enquire about our
                  services, discuss insurance, organise a health camp, or simply
                  need medical guidance, we're here to help.
                </p>

                <div className="enquiry-features">
                  <span>✓ Appointment Assistance</span>
                  <span>✓ Doctor Consultation</span>
                  <span>✓ Insurance Support</span>
                  <span>✓ Medical Reports</span>
                  <span>✓ Corporate Tie-Ups</span>
                  <span>✓ Health Camps</span>
                </div>
              </div>

              <div className="enquiry-action">
                <div className="enquiry-action-icon">↗</div>

                <span>ONLINE ENQUIRY</span>

                <h3>
                  Send us your
                  <br />
                  message.
                </h3>

                <p>
                  Complete our enquiry form and our team will get back to you.
                </p>

                <a href={FORM_URL} target="_blank" rel="noreferrer">
                  Open Enquiry Form
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DEPARTMENTS
        ===================================================== */}

        <section className="contact-departments-section">
          <div className="contact-container">
            <div className="contact-section-intro">
              <div>
                <span>OUR DEPARTMENTS</span>

                <h2>
                  Need help?
                  <br />
                  <em>Start here.</em>
                </h2>
              </div>

              <p>
                Our dedicated departments ensure every patient receives the
                right guidance and timely assistance.
              </p>
            </div>

            <div className="department-grid">
              {departments.map((department) => (
                <div className="department-card" key={department.number}>
                  <div className="department-card-top">
                    <span>{department.number}</span>

                    <div>{department.icon}</div>
                  </div>

                  <h3>{department.title}</h3>

                  <p>{department.description}</p>

                  <span className="department-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            LOCATION
        ===================================================== */}

        <section className="contact-location-section">
          <div className="contact-container">
            <div className="location-header">
              <div>
                <span>VISIT US</span>

                <h2>
                  Find Sargam
                  <br />
                  <em>Healthcare.</em>
                </h2>
              </div>

              <p>
                We're conveniently located in Samalka, New Delhi. Plan your
                visit or contact our reception for assistance.
              </p>
            </div>

            <div className="location-map-wrapper">
              <div className="location-map">
                <iframe
                  title="Sargam Healthcare Location"
                  src="https://www.google.com/maps?q=Sargam_Healthcare&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="location-overlay-card">
                <span>OUR LOCATION</span>

                <h3>Sargam Healthcare</h3>

                <p>
                  Samalka,
                  <br />
                  New Delhi, India
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sargam+Healthcare+Samalka+New+Delhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="contact-faq-section">
          <div className="contact-container">
            <div className="faq-layout">
              <div className="faq-heading">
                <span>FAQ</span>

                <h2>
                  Questions?
                  <br />
                  We've got
                  <br />
                  <em>answers.</em>
                </h2>

                <p>
                  Can't find what you're looking for? Contact our team and we'll
                  be happy to assist you.
                </p>

                <Link to="/book-appointment" className="faq-link">
                  Talk to our team
                  <span>↗</span>
                </Link>
              </div>

              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="faq-item"
                    open={index === 0}
                  >
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>

                      <strong>{faq.question}</strong>

                      <i>+</i>
                    </summary>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-final-cta">
          <div className="contact-final-glow" />

          <div className="contact-final-content">
            <div className="contact-section-tag light">SARGAM HEALTHCARE</div>

            <h2>
              When you need
              <br />
              <em>care, we're here.</em>
            </h2>

            <p>
              Our healthcare professionals are available to provide timely,
              compassionate and quality care whenever you need us.
            </p>

            <div className="final-actions">
              <a href="tel:+919354030578" className="final-primary">
                Call Hospital
                <span>↗</span>
              </a>

              <Link to="/book-appointment" className="final-secondary">
                Book Appointment
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="final-number">03</div>
        </section>
      </main>

      <Footer />
    </>
  );
}
