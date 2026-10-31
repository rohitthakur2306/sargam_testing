import { useNavigate } from "react-router-dom";
import "../landingpage/doctor.css";
import doctor1 from "../../assests/rohittiwari.png";
import doctor2 from "../../assests/NeerajJha.png";
import doctor3 from "../../assests/lokeshGarg.png";
import doctor4 from "../../assests/MinakshiYadav.png";
import doctor5 from "../../assests/AmitBeniwal.png";
import doctor6 from "../../assests/rkmishra.png";
import doctor7 from "../../assests/bacchu-sir-img.png";
export default function Doctors() {
  const navigate = useNavigate();
  const doctors = [
    {
      id: "dr-rohit-kumar-tiwari",
      name: "Dr. Rohit Kumar Tiwari",
      specialization:
        "Critical Care Medicine • Cardiology • Emergency Medicine",
      qualification:
        "Physician & Cardiologist • Critical Care Specialist • Intensivist",
      experience: "8+ Years Experience • ICU & CCU Management",
      image: doctor1,
      imagePosition: "center top",
    },
    {
      id: "dr-neeraj-jha",
      name: "Dr. Neeraj Jha",
      specialization:
        "MD Physician • Clinical Research • Healthcare Leadership",
      qualification: "MD Physician • CEO & Business Partner",
      experience: "Clinical Trials: 13 Years • Clinical Practice: 4.2 Years",
      image: doctor2,
      imagePosition: "center top",
    },
    {
      id: "dr-lokesh-garg",
      name: "Dr. Lokesh Garg",
      specialization:
        "Orthopaedics • Joint Replacement • Spine Surgery • Orthopaedic Oncology",
      qualification: "MBBS, MS (Orthopaedic) • Visiting Consultant",
      experience: "Orthopaedic Surgery • Joint Replacement • Spine Care",
      image: doctor3,
      imagePosition: "center top",
    },
    {
      id: "dr-amit-beniwal",
      name: "Dr. Amit Beniwal",
      specialization: "Internal Medicine • Diabetes Care",
      qualification:
        "MBBS (AFMC), M.Med, MRCP, Fellow Diabetology (Royal College of Physicians, London)",
      experience: "19+ Years Experience",
      image: doctor5,
      imagePosition: "center top",
    },
    {
      id: "dr-rk-mishra",
      name: "Prof. (Dr.) R. K. Mishra",
      specialization: "Forensic Medicine • Traumatology • Orthopaedic Trauma",
      qualification: "HOD – Forensic Medicine & Traumatology (HIMSR)",
      experience:
        "25+ Years Clinical Experience • Geriatric Orthopaedics • Trauma Surgery",
      image: doctor6,
      imagePosition: "center top",
    },
    {
      id: "dr-bachu-narayan-singh",
      name: "Prof. (Dr.) Bachu Narayan Singh",
      specialization: "Community Medicine • Public Health • Clinical Medicine",
      qualification: "Dean & Professor, Community Medicine",
      experience: "20+ Years Experience • Public Health • Clinical Practice",
      image: doctor7,
      imagePosition: "center top",
    },
  ];
  const goToProfile = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/doctors/${id}`);
  };
  return (
    <main className="doctors-page">
      {" "}
      {/* ===================================================== PAGE INTRO ===================================================== */}{" "}
      <section className="doctors-hero-intro">
        {" "}
        <div className="doctors-intro-content">
          {" "}
          <span className="eyebrow">
            {" "}
            SARGAM HEALTHCARE • MEDICAL TEAM{" "}
          </span>{" "}
          <h1>
            {" "}
            Experienced Minds. <br /> <span>Compassionate Care.</span>{" "}
          </h1>{" "}
          <p>
            {" "}
            Meet the experienced physicians, specialists and healthcare leaders
            who bring together clinical expertise, modern medicine and
            compassionate patient care at Sargam Healthcare.{" "}
          </p>{" "}
        </div>{" "}
        <div className="intro-accent">
          {" "}
          <span>01</span> <div></div> <span>MEDICAL EXCELLENCE</span>{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== MEDICAL SUPERINTENDENT ===================================================== */}{" "}
      <section className="superintendent-section">
        {" "}
        <div className="section-heading superintendent-heading">
          {" "}
          <span>MEDICAL LEADERSHIP</span> <h2> Medical Superintendent </h2>{" "}
          <p>
            {" "}
            Experienced medical leadership focused on clinical excellence,
            patient safety and compassionate healthcare delivery.{" "}
          </p>{" "}
        </div>{" "}
        <article className="featured-doctor">
          {" "}
          {/* IMAGE */}{" "}
          <div
            className="featured-image"
            style={{ "--doctor-bg": `url(${doctor1})` }}
          >
            {" "}
            <div className="featured-image-backdrop"></div>{" "}
            <img
              src={doctor1}
              alt="Dr. Rohit Kumar Tiwari"
              style={{ objectPosition: "center top" }}
            />{" "}
            <div className="image-badge"> Medical Superintendent </div>{" "}
            <div className="featured-image-label">
              {" "}
              <span>CLINICAL LEADERSHIP</span>{" "}
              <strong>Critical Care • Emergency Medicine</strong>{" "}
            </div>{" "}
          </div>{" "}
          {/* CONTENT */}{" "}
          <div className="featured-content">
            {" "}
            <span className="featured-tag"> FEATURED MEDICAL LEADER </span>{" "}
            <h2> Dr. Rohit Kumar Tiwari </h2> <h4> Medical Superintendent </h4>{" "}
            <p>
              {" "}
              Dr. Rohit Kumar Tiwari is an experienced Critical Care Specialist
              and Intensivist with more than 8 years of dedicated experience in
              managing critically ill patients.{" "}
            </p>{" "}
            <p>
              {" "}
              Since 2018, he has been actively involved in Critical Care
              Medicine, Intensive Care Units (ICU) and Coronary Care Units
              (CCU), providing advanced care for critically sick and
              ventilator-supported patients.{" "}
            </p>{" "}
            <p>
              {" "}
              Throughout his career, he has successfully managed and treated
              more than 1500+ ICU and CCU patients, delivering evidence-based
              treatment, emergency interventions and compassionate care during
              the most critical stages of illness.{" "}
            </p>{" "}
            {/* STATS */}{" "}
            <div className="featured-stats">
              {" "}
              <div>
                {" "}
                <strong>8+</strong> <span>Years Experience</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <strong>1500+</strong> <span>ICU & CCU Cases</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <strong>2018</strong> <span>Practicing Since</span>{" "}
              </div>{" "}
            </div>{" "}
            <button
              className="primary-profile-btn"
              onClick={() => goToProfile("dr-rohit-kumar-tiwari")}
            >
              {" "}
              View Full Profile <span>→</span>{" "}
            </button>{" "}
          </div>{" "}
        </article>{" "}
      </section>{" "}
      {/* ===================================================== MEDICAL TEAM ===================================================== */}{" "}
      <section className="medical-team-section">
        {" "}
        <div className="doctors-header">
          {" "}
          <div>
            {" "}
            <span>OUR MEDICAL TEAM</span>{" "}
            <h2> Meet Our Healthcare Experts </h2>{" "}
          </div>{" "}
          <p>
            {" "}
            Our team of experienced healthcare professionals is committed to
            delivering compassionate treatment, accurate diagnosis and
            exceptional patient care.{" "}
          </p>{" "}
        </div>{" "}
        <div className="doctor-grid">
          {" "}
          {doctors.map((doctor, index) => (
            <article
              key={doctor.id}
              className="doctor-card"
              onClick={() => goToProfile(doctor.id)}
            >
              {" "}
              {/* IMAGE STAGE */}{" "}
              <div
                className="doctor-image"
                style={{ "--doctor-bg": `url(${doctor.image})` }}
              >
                {" "}
                <div className="doctor-image-backdrop"></div>{" "}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={{
                    objectPosition: doctor.imagePosition || "center top",
                  }}
                />{" "}
                <div className="doctor-number">
                  {" "}
                  {String(index + 1).padStart(2, "0")}{" "}
                </div>{" "}
                <div className="doctor-image-overlay">
                  {" "}
                  <span>View Profile</span> <strong>→</strong>{" "}
                </div>{" "}
              </div>{" "}
              {/* INFORMATION */}{" "}
              <div className="doctor-info">
                {" "}
                <div className="doctor-info-top">
                  {" "}
                  <span className="doctor-label"> SPECIALIST </span>{" "}
                  <span className="doctor-arrow"> ↗ </span>{" "}
                </div>{" "}
                <h3> {doctor.name} </h3>{" "}
                <p className="doctor-specialization">
                  {" "}
                  {doctor.specialization}{" "}
                </p>{" "}
                <p className="doctor-qualification"> {doctor.qualification} </p>{" "}
                <div className="doctor-card-footer">
                  {" "}
                  <span className="doctor-experience">
                    {" "}
                    {doctor.experience}{" "}
                  </span>{" "}
                  <button
                    className="view-profile-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      goToProfile(doctor.id);
                    }}
                    type="button"
                  >
                    {" "}
                    Profile <span>→</span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {/* ===================================================== LEADERSHIP & MANAGEMENT ===================================================== */}{" "}
      <section className="leadership-section">
        {" "}
        <div className="leadership-header">
          {" "}
          <span> LEADERSHIP & MANAGEMENT </span>{" "}
          <h2>
            {" "}
            Guiding The Vision <br /> <span>Of Sargam Healthcare</span>{" "}
          </h2>{" "}
          <p>
            {" "}
            Behind every successful healthcare institution is a leadership team
            committed to patient care, operational excellence, community welfare
            and continuous innovation.{" "}
          </p>{" "}
        </div>{" "}
        <div className="management-grid">
          {" "}
          {/* ================================================= MINAKSHI — FEATURED ================================================= */}{" "}
          <article className="management-featured-card">
            {" "}
            <div
              className="management-featured-image"
              style={{ "--doctor-bg": `url(${doctor4})` }}
            >
              {" "}
              <div className="management-image-backdrop"></div>{" "}
              <img
                src={doctor4}
                alt="Smt. Minakshi Yadav"
                style={{ objectPosition: "center top" }}
              />{" "}
              <div className="management-image-badge"> LEADERSHIP </div>{" "}
            </div>{" "}
            <div className="management-featured-content">
              {" "}
              <span className="management-tag">
                {" "}
                MANAGING DIRECTOR • PROPRIETOR{" "}
              </span>{" "}
              <h3> Smt. Minakshi Yadav </h3>{" "}
              <h4> Managing Director & Proprietor — Sargam Health Care </h4>{" "}
              <p>
                {" "}
                Smt. Minakshi Yadav is the Managing Director and Proprietor of
                Sargam Health Care and Founder & Managing Trustee of Swastham
                Trust.{" "}
              </p>{" "}
              <p>
                {" "}
                Through her leadership and commitment to healthcare awareness,
                community welfare and patient-centric initiatives, she
                contributes towards building a stronger and more accessible
                healthcare ecosystem.{" "}
              </p>{" "}
              <div className="management-stats">
                {" "}
                <div>
                  {" "}
                  <strong>MD</strong> <span>Sargam Health Care</span>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <strong>Founder</strong> <span>Swastham Trust</span>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <strong>Vision</strong> <span>Community Welfare</span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="management-signature">
                {" "}
                <span>LEADERSHIP WITH PURPOSE</span> <div></div>{" "}
              </div>{" "}
            </div>{" "}
          </article>{" "}
          {/* ================================================= ROHIT + NEERAJ ================================================= */}{" "}
          <div className="management-secondary-grid">
            {" "}
            {/* ROHIT */}{" "}
            <article
              className="management-card"
              onClick={() => goToProfile("dr-rohit-kumar-tiwari")}
            >
              {" "}
              <div
                className="management-card-image"
                style={{ "--doctor-bg": `url(${doctor1})` }}
              >
                {" "}
                <div className="management-card-backdrop"></div>{" "}
                <img src={doctor1} alt="Dr. Rohit Kumar Tiwari" />{" "}
                <div className="management-small-badge">
                  {" "}
                  MEDICAL SUPERINTENDENT{" "}
                </div>{" "}
              </div>{" "}
              <div className="management-card-content">
                {" "}
                <span> CLINICAL LEADERSHIP </span>{" "}
                <h3> Dr. Rohit Kumar Tiwari </h3>{" "}
                <h4> Medical Superintendent </h4>{" "}
                <p>
                  {" "}
                  Critical Care Specialist and Intensivist with extensive
                  experience in ICU, CCU and emergency care.{" "}
                </p>{" "}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToProfile("dr-rohit-kumar-tiwari");
                  }}
                >
                  {" "}
                  View Medical Profile <span>→</span>{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
            {/* NEERAJ */}{" "}
            <article
              className="management-card"
              onClick={() => goToProfile("dr-neeraj-jha")}
            >
              {" "}
              <div
                className="management-card-image"
                style={{ "--doctor-bg": `url(${doctor2})` }}
              >
                {" "}
                <div className="management-card-backdrop"></div>{" "}
                <img src={doctor2} alt="Dr. Neeraj Jha" />{" "}
                <div className="management-small-badge">
                  {" "}
                  CEO & BUSINESS PARTNER{" "}
                </div>{" "}
              </div>{" "}
              <div className="management-card-content">
                {" "}
                <span> HEALTHCARE LEADERSHIP </span> <h3> Dr. Neeraj Jha </h3>{" "}
                <h4> CEO & Business Partner </h4>{" "}
                <p>
                  {" "}
                  MD Physician with extensive experience in clinical practice,
                  research and healthcare leadership.{" "}
                </p>{" "}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToProfile("dr-neeraj-jha");
                  }}
                >
                  {" "}
                  View Profile <span>→</span>{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
          {/* ================================================= BOARD OF TRUSTEES ================================================= */}{" "}
          <article className="trustee-section-card">
            {" "}
            <div className="trustee-mark"> ST </div>{" "}
            <div className="trustee-content">
              {" "}
              <span className="trustee-eyebrow">
                {" "}
                SWASTHAM TRUST • BOARD OF TRUSTEES{" "}
              </span>{" "}
              <h3>
                {" "}
                Strengthening Healthcare <br /> Through Responsible
                Leadership{" "}
              </h3>{" "}
              <p>
                {" "}
                Dr. Rohit Kumar Tiwari, M.B.B.S., MEM (Emergency Medicine),
                Physician & Cardiologist and Medical Superintendent, Sargam
                Health Care, has joined the Swastham Trust Board of
                Trustees.{" "}
              </p>{" "}
              <p>
                {" "}
                With his medical experience, vast knowledge, ethical healthcare
                practice, professional expertise and commitment to serving
                society, Dr. Rohit brings valuable knowledge and a strong sense
                of responsibility to the Trust.{" "}
              </p>{" "}
              <div className="trustee-message">
                {" "}
                <strong> Welcome to the Board of Trustees </strong>{" "}
                <span>
                  {" "}
                  We look forward to his active contribution, guidance and
                  support in furthering the vision, mission and objectives of
                  the Trust.{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="trustee-side">
              {" "}
              <span> BOARD MEMBER </span>{" "}
              <strong>
                {" "}
                Dr. Rohit <br /> Kumar Tiwari{" "}
              </strong>{" "}
              <small> Sargam Health Care </small>{" "}
            </div>{" "}
          </article>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
