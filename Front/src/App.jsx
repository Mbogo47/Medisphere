import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Appointments from './pages/Appointments';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import Medical from './pages/MedicalRecords';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="appointments" element={<Appointments />} />
            <Route path="records" element={<Medical />} />
          </Route>
        </Routes>

      </Router>

    </>
  );
}

export default App;
