import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

import "./HealthLibrary.css";

import fever from "../assests/health/fever.jpg";
import diabetes from "../assests/health/diabetes.jpg";
import thyroid from "../assests/health/thyroid.jpg";
import pcos from "../assests/health/pcos.jpg";
import backpain from "../assests/health/backpain.jpg";
import migraine from "../assests/health/migraine.jpg";
import bp from "../assests/health/bloodpressure.jpg";
import acidity from "../assests/health/acidity.jpg";
import joint from "../assests/health/jointpain.jpg";
import skin from "../assests/health/skinallergy.jpg";

export default function HealthLibrary() {
  const [search, setSearch] = useState("");

  const diseases = [
    {
      id: "fever",

      title: "Fever",

      category: "General Medicine",

      image: fever,

      readTime: "5 min",

      description:
        "Understand the causes, symptoms and treatment options for fever.",
    },

    {
      id: "diabetes",

      title: "Diabetes",

      category: "Endocrinology",

      image: diabetes,

      readTime: "6 min",

      description:
        "Learn how diabetes develops and how it can be effectively managed.",
    },

    {
      id: "thyroid",

      title: "Thyroid Problems",

      category: "Endocrinology",

      image: thyroid,

      readTime: "5 min",

      description:
        "Know the warning signs of thyroid disorders and available treatments.",
    },

    {
      id: "pcos",

      title: "PCOS / PCOD",

      category: "Women's Health",

      image: pcos,

      readTime: "7 min",

      description:
        "Everything you should know about PCOS, hormones and reproductive health.",
    },

    {
      id: "back-pain",

      title: "Back Pain",

      category: "Orthopaedics",

      image: backpain,

      readTime: "6 min",

      description:
        "Causes of chronic back pain and when to seek specialist care.",
    },

    {
      id: "migraine",

      title: "Migraine & Headache",

      category: "Neurology",

      image: migraine,

      readTime: "5 min",

      description:
        "Differentiate between headaches and migraines with expert guidance.",
    },

    {
      id: "high-blood-pressure",

      title: "High Blood Pressure",

      category: "Cardiology",

      image: bp,

      readTime: "5 min",

      description: "Learn why hypertension is called the silent killer.",
    },

    {
      id: "acidity",

      title: "Acidity & Gastric Problems",

      category: "Gastroenterology",

      image: acidity,

      readTime: "4 min",

      description: "Understand acid reflux, gastritis and digestive disorders.",
    },

    {
      id: "joint-pain",

      title: "Joint Pain & Arthritis",

      category: "Orthopaedics",

      image: joint,

      readTime: "6 min",

      description:
        "Joint pain explained by specialists with diagnosis guidance.",
    },

    {
      id: "skin-allergy",

      title: "Skin Allergies",

      category: "Dermatology",

      image: skin,

      readTime: "5 min",

      description:
        "Know common causes of rashes, allergies and skin irritation.",
    },
  ];

  const filteredDiseases = useMemo(() => {
    return diseases.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <>
      <Navbar />

      <div className="health-library">
        <section className="library-hero">
          <div className="library-overlay"></div>

          <div className="library-bg-circle circle-1"></div>
          <div className="library-bg-circle circle-2"></div>

          <div className="library-content">
            <div className="library-badge">
              <span className="badge-dot"></span>
              DOCTOR VERIFIED HEALTH LIBRARY
            </div>

            <h1>
              Learn.
              <span> Understand.</span>
              <br />
              Live a Healthier Life.
            </h1>

            <p>
              Access trusted medical knowledge created to help you understand
              diseases, symptoms, prevention, treatment options and healthy
              lifestyle practices — reviewed by healthcare professionals at
              <strong> Sargam Healthcare.</strong>
            </p>

            <div className="library-search">
              <span className="search-icon">🔍</span>

              <input
                type="text"
                placeholder="Search disease, symptoms, treatment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="hero-mini-tags">
              <span>🫀 Heart Care</span>

              <span>🧠 Brain Health</span>

              <span>🩺 Diabetes</span>

              <span>👩 Women's Health</span>

              <span>🦴 Bones & Joints</span>
            </div>

            <div className="hero-library-stats">
              <div>
                <h3>10+</h3>

                <span>Health Guides</span>
              </div>

              <div>
                <h3>100%</h3>

                <span>Doctor Reviewed</span>
              </div>

              <div>
                <h3>24×7</h3>

                <span>Healthcare Support</span>
              </div>
            </div>
          </div>

          <div className="library-floating-card floating-one">
            <h4>Most Read</h4>

            <p>Diabetes Care Guide</p>
          </div>

          <div className="library-floating-card floating-two">
            <h4>Trending</h4>

            <p>High Blood Pressure</p>
          </div>
        </section>
        {/* =======================================================
    HEALTH CATEGORIES
======================================================= */}

        <section className="library-categories">
          <div className="library-section-heading">
            <span>EXPLORE BY SPECIALITY</span>

            <h2>Browse Health Topics</h2>

            <p>
              Find trusted medical information organised by speciality to help
              you understand symptoms, diseases and treatment options.
            </p>
          </div>

          <div className="category-wrapper">
            <div className="category-pill">General Medicine</div>

            <div className="category-pill">Cardiology</div>

            <div className="category-pill">Orthopaedics</div>

            <div className="category-pill">Neurology</div>

            <div className="category-pill">Diabetes</div>

            <div className="category-pill">Women's Health</div>

            <div className="category-pill">Dermatology</div>

            <div className="category-pill">Gastroenterology</div>
          </div>
        </section>

        {/* =======================================================
    FEATURED HEALTH GUIDE
======================================================= */}

        <section className="featured-health-guide">
          <div className="featured-guide-image">
            <img src={fever} alt="Featured Health Guide" />
          </div>

          <div className="featured-guide-content">
            <span className="featured-guide-tag">FEATURED HEALTH GUIDE</span>

            <h2>Understanding Fever: When Should You Visit A Doctor?</h2>

            <p>
              Fever is one of the most common symptoms experienced by patients.
              While many fevers are caused by minor viral infections and resolve
              with rest, persistent high fever may indicate a serious underlying
              condition requiring immediate medical attention.
            </p>

            <ul>
              <li>High temperature above 100.4°F</li>

              <li>Body pain & weakness</li>

              <li>Dehydration & chills</li>

              <li>Know when medical evaluation is necessary</li>
            </ul>

            <Link to="/health-library/fever" className="featured-guide-btn">
              Read Complete Guide →
            </Link>
          </div>
        </section>

        {/* =======================================================
    DISEASE LIST
======================================================= */}

        <section className="health-topics">
          <div className="library-section-heading">
            <span>POPULAR HEALTH GUIDES</span>

            <h2>Most Searched Symptoms & Diseases</h2>

            <p>
              Doctor-reviewed health guides covering the most common medical
              conditions searched by patients.
            </p>
          </div>

          <div className="health-grid">
            {filteredDiseases.map((item) => (
              <div className="health-card" key={item.id}>
                <div className="health-card-image">
                  <img src={item.image} alt={item.title} />

                  <span>{item.category}</span>
                </div>

                <div className="health-card-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="health-card-footer">
                    <div>
                      <strong>{item.readTime}</strong>

                      <span>Read</span>
                    </div>

                    <Link
                      to={`/health-library/${item.id}`}
                      className="read-guide-btn"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* =======================================================
    WHY TRUST SARGAM HEALTH LIBRARY
======================================================= */}

        <section className="why-library">
          <div className="library-section-heading">
            <span>WHY CHOOSE US</span>

            <h2>Trusted Medical Knowledge Backed By Experts</h2>

            <p>
              Every article published in our Health Learning Center is designed
              to educate patients using simple language while maintaining
              medical accuracy and evidence-based healthcare guidance.
            </p>
          </div>

          <div className="why-library-grid">
            <div className="why-card">
              <div className="why-icon">🩺</div>

              <h3>Doctor Reviewed</h3>

              <p>
                Medical content prepared and reviewed by experienced healthcare
                professionals.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📚</div>

              <h3>Evidence Based</h3>

              <p>
                Reliable health information based on accepted medical practices
                and clinical knowledge.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">❤️</div>

              <h3>Patient Friendly</h3>

              <p>
                Complex medical concepts explained in easy-to-understand
                language for every patient.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🔄</div>

              <h3>Regularly Updated</h3>

              <p>
                Our educational resources continue to grow with new health
                topics and updated medical recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* =======================================================
    QUICK HEALTH TIPS
======================================================= */}

        <section className="quick-health-tips">
          <div className="library-section-heading">
            <span>DAILY WELLNESS</span>

            <h2>Quick Health Tips</h2>

            <p>
              Small lifestyle improvements can make a significant difference to
              your long-term health.
            </p>
          </div>

          <div className="tips-grid">
            <div className="tip-card">
              <h3>💧 Stay Hydrated</h3>

              <p>
                Drink adequate water throughout the day to support your body's
                natural functions.
              </p>
            </div>

            <div className="tip-card">
              <h3>🥗 Eat Balanced Meals</h3>

              <p>
                Include fresh vegetables, fruits, whole grains and lean proteins
                in your daily diet.
              </p>
            </div>

            <div className="tip-card">
              <h3>🏃 Stay Active</h3>

              <p>
                Regular physical activity improves heart health, immunity and
                overall wellbeing.
              </p>
            </div>

            <div className="tip-card">
              <h3>😴 Prioritize Sleep</h3>

              <p>
                Aim for 7–8 hours of quality sleep every night for better
                physical and mental health.
              </p>
            </div>
          </div>
        </section>

        {/* =======================================================
    CALL TO ACTION
======================================================= */}

        <section className="library-cta">
          <div className="library-cta-content">
            <span>NEED PROFESSIONAL MEDICAL ADVICE?</span>

            <h2>
              Don't Ignore Your Symptoms. Consult Our Medical Specialists Today.
            </h2>

            <p>
              Our experienced team of doctors is here to help you with accurate
              diagnosis, personalized treatment and compassionate healthcare.
              Book an appointment or get in touch with our hospital for expert
              medical guidance.
            </p>

            <div className="library-cta-buttons">
              <Link to="/appointment" className="library-primary-btn">
                Book Appointment
              </Link>

              <Link to="/contact" className="library-secondary-btn">
                Contact Hospital
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
