import "../patients_dashboards/admin.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("User UID:", user.uid);
      console.log("User Email:", user.email);
      console.log("User Name:", user.displayName);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Unable to login. Please try again.");
    }
  };

  return (
    <div className="admin-auth-page">
      <div className="auth-background-circle circle-one"></div>
      <div className="auth-background-circle circle-two"></div>

      <div className="auth-card">
        <div className="auth-logo">
          <h2>Sargam Healthcare</h2>
          <span>Hospital Management System</span>
        </div>

        <div className="auth-content">
          <h1>Secure Staff Access</h1>

          <p>
            Sign in using your Google account to access patient records,
            appointments, reports and healthcare operations.
          </p>

          <button className="google-auth-btn" onClick={handleGoogleLogin}>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Continue with Google
          </button>

          <div className="auth-info">
            <p>🔒 Protected by Firebase Authentication</p>

            <p>Authorized healthcare staff only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
