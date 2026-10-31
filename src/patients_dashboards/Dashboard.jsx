import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import "../patients_dashboards/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);

  const [monthlyRevenue, setMonthlyRevenue] = useState(0);

  const [showAdmitModal, setShowAdmitModal] = useState(false);

  const [showDischargeModal, setShowDischargeModal] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [paidAmount, setPaidAmount] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    disease: "",
    address: "",
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "patients"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPatients(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "patient_tracking"),
      (snapshot) => {
        let total = 0;

        snapshot.forEach((doc) => {
          total += Number(doc.data().paidAmount || 0);
        });

        setMonthlyRevenue(total);
      },
    );

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdmitPatient = async () => {
    try {
      await addDoc(collection(db, "patients"), {
        ...formData,

        admittedAt: Timestamp.now(),

        createdAt: Timestamp.now(),

        status: "active",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        disease: "",
        address: "",
      });

      setShowAdmitModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone?.includes(searchTerm),
  );

  const openDischargeModal = (patient) => {
    setSelectedPatient(patient);

    setShowDischargeModal(true);
  };

  const confirmDischarge = async () => {
    try {
      const admittedAt = selectedPatient.admittedAt.toDate();

      const dischargedAt = new Date();

      const totalStayMinutes = Math.floor(
        (dischargedAt.getTime() - admittedAt.getTime()) / 60000,
      );

      await addDoc(collection(db, "patient_tracking"), {
        patientId: selectedPatient.id,

        patientName: selectedPatient.name,

        phone: selectedPatient.phone,

        email: selectedPatient.email || "",

        age: selectedPatient.age || "",

        gender: selectedPatient.gender || "",

        disease: selectedPatient.disease || "",

        address: selectedPatient.address || "",

        admittedAt: selectedPatient.admittedAt,

        dischargedAt: Timestamp.now(),

        totalStayMinutes,

        paidAmount: Number(paidAmount),

        createdAt: Timestamp.now(),
      });

      await deleteDoc(doc(db, "patients", selectedPatient.id));

      setPaidAmount("");

      setShowDischargeModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeDifference = (timestamp) => {
    if (!timestamp) return "0m";

    const diff = Date.now() - timestamp.toDate().getTime();

    const minutes = Math.floor(diff / 60000);

    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    }

    return `${minutes}m`;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Welcome To Sargam Healthcare</h1>

          <p>Manage Admissions, Discharges & Revenue</p>
        </div>

        <div className="header-actions">
          <button
            className="check-data-btn"
            onClick={() => navigate("/Blog-page")}
          >
            Read all blogs
          </button>
          <button
            className="check-data-btn"
            onClick={() => navigate("/create-blog")}
          >
            Write blogs
          </button>
          <button
            className="check-data-btn"
            onClick={() => navigate("/admin/patients")}
          >
            Check Data
          </button>

          <button className="admit-btn" onClick={() => setShowAdmitModal(true)}>
            Admit New Patient
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{patients.length}</h2>
          <p>Active Patients</p>
        </div>

        <div className="stat-card">
          <h2>₹{monthlyRevenue}</h2>
          <p>Revenue</p>
        </div>

        <div className="stat-card">
          <h2>{patients.length}</h2>
          <p>Today's Admissions</p>
        </div>
      </div>

      <div className="patients-section">
        <div className="patients-header">
          <h2>Recent Patients</h2>

          <input
            type="text"
            placeholder="Search Patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="patients-table">
          <div className="table-head">
            <div>Name</div>
            <div>Phone</div>
            <div>Date</div>
            <div>Time</div>
            <div>Duration</div>
            <div>Action</div>
          </div>

          {filteredPatients.map((patient) => (
            <div key={patient.id} className="table-row">
              <div>{patient.name}</div>

              <div>{patient.phone}</div>

              <div>{patient.admittedAt?.toDate()?.toLocaleDateString()}</div>

              <div>{patient.admittedAt?.toDate()?.toLocaleTimeString()}</div>

              <div>{getTimeDifference(patient.admittedAt)}</div>

              <div>
                <button
                  className="discharge-btn"
                  onClick={() => openDischargeModal(patient)}
                >
                  Discharge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAdmitModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Admit New Patient</h2>

            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="disease"
              placeholder="Disease"
              value={formData.disease}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />

            <div className="modal-actions">
              <button onClick={() => setShowAdmitModal(false)}>Cancel</button>

              <button className="save-btn" onClick={handleAdmitPatient}>
                Admit Patient
              </button>
            </div>
          </div>
        </div>
      )}

      {showDischargeModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Discharge Patient</h2>

            <p>Patient: {selectedPatient?.name}</p>

            <p>Disease: {selectedPatient?.disease}</p>

            <p>Time Stayed: {getTimeDifference(selectedPatient?.admittedAt)}</p>

            <input
              type="number"
              placeholder="Paid Amount"
              value={paidAmount}
              onChange={(e) => setPaidAmount(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={() => setShowDischargeModal(false)}>
                Cancel
              </button>

              <button
                className="discharge-confirm-btn"
                onClick={confirmDischarge}
              >
                Confirm Discharge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
