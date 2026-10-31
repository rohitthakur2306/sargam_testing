import { useState, useEffect } from "react";

import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import "./PatientHistory.css";

export default function PatientHistory() {
  const [patients, setPatients] = useState([]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [lastDoc, setLastDoc] = useState(null);

  // const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [monthFilter, setMonthFilter] = useState("");

  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      // setLoading(true);

      const q = query(
        collection(db, "patient_tracking"),
        orderBy("createdAt", "desc"),
        limit(20),
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPatients(data);

      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    } catch (error) {
      console.log(error);
    }

    // setLoading(false);
  };

  const loadMore = async () => {
    try {
      const q = query(
        collection(db, "patient_tracking"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(20),
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPatients([...patients, ...data]);

      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone?.includes(searchTerm);

    if (!matchesSearch) {
      return false;
    }

    return true;
  });

  return (
    <div className="history-page">
      <div className="history-header">
        <div>
          <h1>Patient History</h1>

          <p>All Patient Records Till Now</p>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Name or Phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />

        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
        >
          <option value="">All Months</option>

          <option value="0">January</option>

          <option value="1">February</option>

          <option value="2">March</option>

          <option value="3">April</option>

          <option value="4">May</option>

          <option value="5">June</option>

          <option value="6">July</option>

          <option value="7">August</option>

          <option value="8">September</option>

          <option value="9">October</option>

          <option value="10">November</option>

          <option value="11">December</option>
        </select>
      </div>

      <div className="history-layout">
        <div className="history-table">
          <div className="table-header">
            <div>Name</div>

            <div>Phone</div>

            <div>Date</div>

            <div>Paid</div>

            <div>Gender</div>
          </div>

          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="history-row"
              onClick={() => setSelectedPatient(patient)}
            >
              <div>{patient.patientName}</div>

              <div>{patient.phone}</div>

              <div>{patient.dischargedAt?.toDate()?.toLocaleDateString()}</div>

              <div>₹{patient.paidAmount}</div>

              <div>
                {patient.gender &&
                patient.gender.toString().toLowerCase() === "female" ? (
                  <span className="female-badge">Female</span>
                ) : patient.gender &&
                  patient.gender.toString().toLowerCase() === "male" ? (
                  <span className="male-badge">Male</span>
                ) : (
                  <span className="other-badge">{patient.gender || "N/A"}</span>
                )}
              </div>
            </div>
          ))}
          <button className="load-more-btn" onClick={loadMore}>
            Load More
          </button>
        </div>

        <div className="details-panel">
          {selectedPatient ? (
            <>
              <div className="details-header">
                <h2>Patient Details</h2>

                {selectedPatient.gender === "Female" ? (
                  <span className="female-badge">Female</span>
                ) : (
                  <span className="male-badge">Male</span>
                )}
              </div>

              <div className="detail-item">
                <span>Name</span>

                <strong>{selectedPatient.patientName}</strong>
              </div>

              <div className="detail-item">
                <span>Phone</span>

                <strong>{selectedPatient.phone}</strong>
              </div>

              <div className="detail-item">
                <span>Email</span>

                <strong>{selectedPatient.email || "N/A"}</strong>
              </div>

              <div className="detail-item">
                <span>Age</span>

                <strong>{selectedPatient.age}</strong>
              </div>

              <div className="detail-item">
                <span>Disease</span>

                <strong>{selectedPatient.disease}</strong>
              </div>

              <div className="detail-item">
                <span>Address</span>

                <strong>{selectedPatient.address}</strong>
              </div>

              <hr />

              <div className="detail-item">
                <span>Admission Date</span>

                <strong>
                  {selectedPatient.admittedAt?.toDate()?.toLocaleString()}
                </strong>
              </div>

              <div className="detail-item">
                <span>Discharge Date</span>

                <strong>
                  {selectedPatient.dischargedAt?.toDate()?.toLocaleString()}
                </strong>
              </div>

              <div className="detail-item">
                <span>Stay Time</span>

                <strong>{selectedPatient.totalStayMinutes} Minutes</strong>
              </div>

              <div className="detail-item">
                <span>Paid Amount</span>

                <strong>₹{selectedPatient.paidAmount}</strong>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h3>Select A Patient</h3>

              <p>Click any row to view patient details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
