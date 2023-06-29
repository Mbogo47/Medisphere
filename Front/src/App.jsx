import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Appointments from './pages/Appointmentable';
import DashContent from './pages/DashContent';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import LoginPatient from './pages/Login';
import DoctorLogin from './pages/LoginD';
import Medical from './pages/MedicalRecords';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import Prescription from './pages/prescription';
import Appt from './pages/Apptpage'
function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<LoginPatient />} />
          <Route path="/doctor" element={<DoctorLogin />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/appt" element={<Appt />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="appointments" element={<Appointments />} />
            <Route path="records" element={<Medical />} />
            <Route path="home" element={<DashContent />} />
            <Route path="prescription" element={<Prescription />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>

    </>
  );
}

export default App;
