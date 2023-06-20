import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
