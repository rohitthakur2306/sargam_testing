import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

import "./Doctorpage.css";

import doctor1 from "../assests/rohittiwari.png";
import doctor2 from "../assests/NeerajJha.png";
import doctor3 from "../assests/lokeshGarg.png";
import doctor5 from "../assests/AmitBeniwal.png";
import doctor6 from "../assests/rkmishra.png";
import doctor7 from "../assests/bacchu-sir-img.png";

const doctors = [
    {
      id: "dr-rohit-kumar-tiwari",
      name: "Dr. Rohit Kumar Tiwari",
      specialization:
        "Critical Care Medicine • Cardiology • Emergency Medicine",
      designation: "Medical Superintendent",
      qualification:
        "Physician & Cardiologist • Critical Care Specialist",
      experience:
        "8+ Years Experience",
      image: doctor1,
      featured: true,
    },

    {
      id: "dr-neeraj-jha",
      name: "Dr. Neeraj Jha",
      specialization:
        "MD Physician • Internal Medicine • Healthcare Leadership",
      designation: "CEO & Business Partner",
      qualification:
        "MD Physician",
      experience:
        "13+ Years Clinical Trials • 4.2+ Years Clinical Practice",
      image: doctor2,
      featured: true,
    },

    {
      id: "dr-lokesh-garg",
      name: "Dr. Lokesh Garg",
      specialization:
        "Orthopaedics • Joint Replacement • Spine Surgery",
      designation: "Visiting Consultant",
      qualification:
        "MBBS • MS Orthopaedics",
      experience:
        "Orthopaedic & Joint Replacement Care",
      image: doctor3,
      featured: false,
    },

    {
      id: "dr-amit-beniwal",
      name: "Dr. Amit Beniwal",
      designation: "Senior Consultant Physician",
      specialization:
        "Internal Medicine • Diabetes Care",
      qualification:
        "MBBS • M.Med • MRCP • Fellow Diabetology",
      experience:
        "19+ Years Experience",
      image: doctor5,
      featured: false,
    },

    {
      id: "dr-rk-mishra",
      name: "Prof. (Dr.) R. K. Mishra",
      specialization:
        "Forensic Medicine • Trauma Surgery",
      designation:
        "Forensic Traumatologist & Orthopaedic Trauma Specialist",
      qualification:
        "HOD – Forensic Medicine & Traumatology",
      experience:
        "25+ Years Experience",
      image: doctor6,
      featured: false,
    },

    {
      id: "dr-bachu-narayan-singh",
      name: "Prof. (Dr.) Bachu Narayan Singh",
      specialization:
        "Community Medicine • Public Health",
      designation:
        "Dean & Professor, Community Medicine",
      qualification:
        "Public Health & Clinical Medicine",
      experience:
        "20+ Years Experience",
      image: doctor7,
      featured: false,
    },
  ];

export default function Doctors() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");



  const departments = [
    "All",
    "Critical Care",
    "Physician",
    "Orthopaedics",
    "Trauma",
    "Community Medicine",
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const search = searchTerm.toLowerCase().trim();

      const searchMatch =
        !search ||
        doctor.name.toLowerCase().includes(search) ||
        doctor.specialization.toLowerCase().includes(search) ||
        doctor.designation?.toLowerCase().includes(search) ||
        doctor.qualification?.toLowerCase().includes(search);

      const departmentMatch =
        selectedDepartment === "All" ||
        doctor.specialization
          .toLowerCase()
          .includes(selectedDepartment.toLowerCase());

      return searchMatch && departmentMatch;
    });
  }, [searchTerm, selectedDepartment]);

  const featuredDoctors = doctors.filter(
    (doctor) => doctor.featured
  );

  const openProfile = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate(`/doctors/${id}`);
  };

  return (
    <>
      <Navbar />

      <main className="doctor-page-container">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="doctor-page-hero">

          <div className="doctor-page-hero-pattern"></div>

          <div className="doctor-page-content">

            <div className="doctor-page-eyebrow">
              <span className="eyebrow-line"></span>
              SARGAM HEALTHCARE
              <span className="eyebrow-line"></span>
            </div>

            <h1>
              Meet the minds
              <br />
              behind <span>better care.</span>
            </h1>

            <p>
              Our multidisciplinary team of experienced physicians and
              specialists combines clinical expertise, ethical practice
              and compassionate care to serve every patient with confidence.
            </p>

            <div className="doctor-page-trust-row">
              <span>✓ Experienced Specialists</span>
              <span>✓ Patient-First Care</span>
              <span>✓ Evidence-Based Medicine</span>
            </div>

            {/* SEARCH */}

            <div className="doctor-page-search-wrapper">

              <div className="doctor-page-search-icon">
                ⌕
              </div>

              <input
                type="text"
                placeholder="Search by doctor, speciality or designation..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
              />

              {searchTerm && (
                <button
                  type="button"
                  className="doctor-page-clear-search"
                  onClick={() => setSearchTerm("")}
                >
                  ×
                </button>
              )}

              <div className="doctor-search-count">
                {filteredDoctors.length} Doctors
              </div>

            </div>

          </div>

          <div className="doctor-page-hero-number">
            <span>01</span>
            <small>MEDICAL TEAM</small>
          </div>

        </section>


        {/* =====================================================
            FILTERS
        ===================================================== */}

        <section className="doctor-page-filter-section">

          <div className="doctor-page-filter-inner">

            <div className="filter-heading">
              <span>EXPLORE</span>
              <strong>Specialities</strong>
            </div>

            <div className="doctor-page-filter-wrapper">

              {departments.map((department) => (

                <button
                  key={department}
                  type="button"
                  className={
                    selectedDepartment === department
                      ? "doctor-page-filter active"
                      : "doctor-page-filter"
                  }
                  onClick={() =>
                    setSelectedDepartment(department)
                  }
                >
                  {department}
                </button>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURED DOCTORS
        ===================================================== */}

        <section className="doctor-page-featured">

          <div className="doctor-page-title">

            <div>
              <span>MEDICAL LEADERSHIP</span>

              <h2>
                Featured Specialists
              </h2>
            </div>

            <p>
              Meet the professionals helping shape clinical excellence,
              patient care and the vision of Sargam Healthcare.
            </p>

          </div>


          <div className="doctor-page-featured-grid">

            {featuredDoctors.map((doctor, index) => (

              <article
                className="doctor-page-featured-card"
                key={doctor.id}
              >

                <div
                  className="doctor-page-featured-image"
                  style={{
                    "--doctor-image": `url(${doctor.image})`,
                  }}
                >

                  <div className="doctor-image-blur"></div>

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                  <span className="featured-index">
                    0{index + 1}
                  </span>

                  <span className="featured-status">
                    FEATURED SPECIALIST
                  </span>

                </div>


                <div className="doctor-page-featured-content">

                  <div className="doctor-card-meta">
                    <span>
                      {doctor.designation}
                    </span>

                    <span>↗</span>
                  </div>

                  <h3>
                    {doctor.name}
                  </h3>

                  <h5>
                    {doctor.specialization}
                  </h5>

                  <p>
                    {doctor.qualification}
                  </p>

                  <div className="featured-bottom">

                    <span>
                      {doctor.experience}
                    </span>

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="doctor-page-primary-btn"
                      onClick={() =>
                        window.scrollTo(0, 0)
                      }
                    >
                      View Profile
                      <span>→</span>
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            ALL DOCTORS
        ===================================================== */}

        <section className="doctor-page-doctors">

          <div className="doctor-page-title">

            <div>
              <span>OUR MEDICAL TEAM</span>

              <h2>
                Experienced Specialists
              </h2>
            </div>

            <p>
              Find the right medical expert for your healthcare needs.
              Explore specialties, experience and professional expertise.
            </p>

          </div>


          <div className="doctor-results-bar">

            <span>
              Showing{" "}
              <strong>{filteredDoctors.length}</strong>{" "}
              medical professionals
            </span>

            {(searchTerm ||
              selectedDepartment !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("All");
                }}
              >
                Clear filters ×
              </button>
            )}

          </div>


          <div className="doctor-page-grid">

            {filteredDoctors.map((doctor, index) => (

              <article
                key={doctor.id}
                className="doctor-page-card"
                onClick={() => openProfile(doctor.id)}
              >

                {/* IMAGE */}

                <div
                  className="doctor-page-card-image"
                  style={{
                    "--doctor-image": `url(${doctor.image})`,
                  }}
                >

                  <div className="doctor-image-blur"></div>

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                  <span className="doctor-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="doctor-page-experience-tag">
                    {doctor.experience}
                  </span>

                  <div className="doctor-card-hover">
                    <span>View Profile</span>
                    <strong>↗</strong>
                  </div>

                </div>


                {/* BODY */}

                <div className="doctor-page-card-body">

                  <div className="doctor-card-topline">
                    <span>MEDICAL SPECIALIST</span>
                    <span>↗</span>
                  </div>

                  <h3>
                    {doctor.name}
                  </h3>

                  {doctor.designation && (
                    <h5 className="doctor-page-designation">
                      {doctor.designation}
                    </h5>
                  )}

                  <p className="doctor-page-speciality">
                    {doctor.specialization}
                  </p>

                  {doctor.qualification && (
                    <div className="doctor-page-qualification">

                      <span>
                        QUALIFICATION
                      </span>

                      <p>
                        {doctor.qualification}
                      </p>

                    </div>
                  )}

                  <div className="doctor-page-card-footer">

                    <span>
                      {doctor.experience}
                    </span>

                    <Link
                      onClick={(event) => {
                        event.stopPropagation();
                        window.scrollTo(0, 0);
                      }}
                      to={`/doctors/${doctor.id}`}
                      className="doctor-page-view-btn"
                    >
                      Profile
                      <span>→</span>
                    </Link>

                  </div>

                </div>

              </article>

            ))}


            {/* EMPTY */}

            {filteredDoctors.length === 0 && (

              <div className="doctor-page-empty">

                <div className="empty-icon">
                  ?
                </div>

                <h3>
                  No doctors found
                </h3>

                <p>
                  We couldn't find a doctor matching your
                  current search or speciality filter.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("All");
                  }}
                >
                  View All Doctors
                </button>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            IMPACT
        ===================================================== */}

        <section className="doctor-page-stats">

          <div className="doctor-page-stats-header">

            <span>
              OUR MEDICAL IMPACT
            </span>

            <h2>
              Experience you can trust.
            </h2>

          </div>


          <div className="doctor-page-stats-wrapper">

            <div className="doctor-page-stat-card">
              <span>01</span>
              <h2>10+</h2>
              <p>Experienced Specialists</p>
            </div>

            <div className="doctor-page-stat-card">
              <span>02</span>
              <h2>15K+</h2>
              <p>Patients Served</p>
            </div>

            <div className="doctor-page-stat-card">
              <span>03</span>
              <h2>24×7</h2>
              <p>Emergency Support</p>
            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="doctor-page-cta">

          <div className="doctor-page-cta-decoration"></div>

          <div className="doctor-page-cta-box">

            <span className="doctor-page-cta-tag">
              SARGAM HEALTHCARE
            </span>

            <h2>
              The right doctor
              <br />
              can make a difference.
            </h2>

            <p>
              Whether you need a routine consultation, specialist
              opinion, emergency care or long-term treatment,
              our medical team is here to help.
            </p>

            <div className="doctor-page-cta-buttons">

              <button
                onClick={() =>
                  (window.location.href =
                    "/book-appointment")
                }
                className="doctor-page-primary-btn"
              >
                Book Appointment
                <span>→</span>
              </button>

              <button
                onClick={() =>
                  (window.location.href = "/contact")
                }
                className="doctor-page-secondary-btn"
              >
                Contact Hospital
              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}