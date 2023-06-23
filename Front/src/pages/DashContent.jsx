import { FaCalendarAlt, FaUserInjured } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dashcontent = () => {

    return (
        <>
            <div className="dash-content">
                <div className="card">
                    <div className="card-body">
                        <FaCalendarAlt className="icon-dash" component={<Link to="appointments" />} />
                        <h1>Appointments</h1>
                        <p className="card-text">You can navigate through the sidebar to access your information</p>
                    </div>
                    <div className="card-body">
                        <FaUserInjured className="icon-dash" />
                        <h1>Patients</h1>
                        <p className="card-text">You can navigate through the sidebar to access your information</p>
                    </div>
                    <div className="card-body">
                        <RiSurgicalMaskFill className="icon-dash" />
                        <h1>Surgeries</h1>
                        <p className="card-text">You can navigate through the sidebar to access your information</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashcontent;