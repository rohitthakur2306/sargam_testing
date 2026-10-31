import "./App.css";
import "./styles/premium-hospital.css";
import "./styles/diwali-festive.css";

import Home from "./components/mainpage";
import AdminLogin from "./patients_dashboards/mainpage";
import Dashboard from "./patients_dashboards/Dashboard";
import PatientHistory from "./patients_dashboards/PatientHistory";
// import Rohittiwariprofile from "./components/landingpage/Rohittiwariprofile";
import Rohittiwariprofile from "./components/Doctorsprofile/Rohittiwariprofile";
import Neerajjhaprofile from "./components/Doctorsprofile/Neerajjhaprofile";
import Lokeshgargprofile from "./components/Doctorsprofile/Lokeshgarg";
import Amitbeniwalprofile from "./components/Doctorsprofile/amitbeniwal";
import RkmishraProfile from "./components/Doctorsprofile/Rkmishra";
import BachunarayanProfile from "./components/Doctorsprofile/Bachunarayan";
// import { useNavigate } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import WriteBlog from "./CMS/Blog/Blogpage";
import Doctorspage from "../src/components/Doctorspage";
import Contact from "./components/Contactpage";
import BookAppointment from "./components/Bookappoinment";
import Blog from "./components/Blogpage";
import BlogDetails from "./components/BlogDetails";
// import HealthLibrary from "./components/Health_Learning_Center";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admin login route start */}
        <Route
          path="/admin_to_sargamhealthcare/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/patients"
          element={
            <ProtectedRoute>
              <PatientHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors/dr-rohit-kumar-tiwari"
          element={<Rohittiwariprofile />}
        />
        <Route
          path="/doctors/dr-amit-beniwal"
          element={<Amitbeniwalprofile />}
        />
        <Route
          path="/doctors/dr-bachu-narayan-singh"
          element={<BachunarayanProfile />}
        />
        <Route path="/doctors/dr-neeraj-jha" element={<Neerajjhaprofile />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/health-learning-center" element={<HealthLibrary />} /> */}
        <Route path="/doctors/dr-rk-mishra" element={<RkmishraProfile />} />
        <Route path="/doctors/dr-lokesh-garg" element={<Lokeshgargprofile />} />
        <Route path="/doctorspage" element={<Doctorspage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/Blog-page" element={<Blog />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route
          path="/create-blog"
          element={
            <ProtectedRoute>
              <WriteBlog />
            </ProtectedRoute>
          }
        />

        {/* Admin login route end */}
      </Routes>
    </Router>
  );
}

export default App;
