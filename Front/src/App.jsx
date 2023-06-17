import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Servcont from './components/Servcont';
import About from './pages/About';
import Contact from './pages/Contact';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Servcont />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
