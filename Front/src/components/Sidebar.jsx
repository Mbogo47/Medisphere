import { useState } from 'react';
import { FaBars, FaCalendar, FaFileMedicalAlt, FaHome, FaUserMd } from 'react-icons/fa';
import { GiTestTubes } from 'react-icons/gi';
import { MdOutlineLogout } from 'react-icons/md';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import UserProfile from '../components/UserProfile';

import '../styles/sidebar.css';

const SidebarComponent = ({ onAppointmentsClick, onRecordsClick }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);

    return (
        <div style={{ minHeight: '100vh' }}>
            <Sidebar collapsed={collapsed} className="sidebar" breakPoint="sm" transitionDuration={800}>
                <Menu>
                    <MenuItem
                        icon={<FaBars />}
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2>Medisphere</h2>
                    </MenuItem>

                    <MenuItem icon={<FaHome className="icons-side" />} onClick={() => setShowDashboard(!showDashboard)}>
                        <span className="span-side">Dashboard</span>
                    </MenuItem>

                    <SubMenu label="Doctors" className="span-side" icon={<FaUserMd className="icons-side" />} >
                        <MenuItem icon={<FaCalendar className="icons-side" />} onClick={onAppointmentsClick}>
                            <span className="span-side">Appointments</span>
                        </MenuItem>
                        <MenuItem icon={<FaFileMedicalAlt className="icons-side" />} onClick={onRecordsClick}>
                            <span className="span-side">MedicalRecords</span>
                        </MenuItem>
                        <MenuItem icon={<GiTestTubes className="icons-side" />}>
                            <span className="span-side">TestResults</span>
                        </MenuItem>
                    </SubMenu>
                    <MenuItem>
                        <UserProfile />
                    </MenuItem>
                    <MenuItem>
                        <MdOutlineLogout className="icons-side" />
                        <span className="span-side">Log out</span>
                    </MenuItem>
                </Menu>
            </Sidebar>

            <div className="dashboard">
                {showDashboard && <h3>Welcome to Medisphere</h3>}
            </div>
        </div>
    );
};

export default SidebarComponent;
