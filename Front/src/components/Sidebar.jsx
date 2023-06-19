import { FaCalendar, FaFileMedicalAlt, FaHome } from "react-icons/fa";
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <FaHome className="icons-side" />
                <span className="side-name">Home</span>
            </div>
            <div>
                <FaCalendar className="icons-side" />
                <span className="side-name">Appointments</span>
            </div>
            <div>
                <FaFileMedicalAlt className="icons-side" />
                <span className="side-name">Doctors</span>
            </div>
        </div>
    );
};

export default Sidebar;