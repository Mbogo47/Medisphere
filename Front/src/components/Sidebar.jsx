import { useState } from 'react';
import { FaBars, FaCalendar, FaFileMedicalAlt, FaHome, FaPills, FaUserMd } from 'react-icons/fa';
import { GiMedicinePills, GiMedicines, GiTestTubes } from 'react-icons/gi';
import { MdOutlineLogout, MdOutlinePayments, MdPayments } from 'react-icons/md';
import { RiSecurePaymentFill, RiSecurePaymentLine, RiSurgicalMaskFill, RiSurgicalMaskLine, RiTestTubeFill, RiTestTubeLine } from 'react-icons/ri';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import '../styles/sidebar.css';

const SidebarComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

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

                    <MenuItem icon={<FaHome className="icons-side" />} component={<Link to="home" />} >
                        <span className="span-side">Dashboard</span>
                    </MenuItem>

                    <SubMenu label="Doctors" className="span-side" icon={<FaUserMd className="icons-side" />} >
                        <MenuItem icon={<FaCalendar className="icons-side" />} component={<Link to="appointments" />}>
                            <span className="span-side">Appointments</span>
                        </MenuItem>
                        <MenuItem icon={<FaFileMedicalAlt className="icons-side" />} component={<Link to="records" />}>
                            <span className="span-side">MedicalRecords</span>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu label="Pharmacy" className="span-side" icon={<FaPills className="icons-side" />} >
                        <MenuItem icon={<GiMedicinePills className="icons-side" />} >
                            <span className="span-side">Medication</span>
                        </MenuItem>
                        <MenuItem icon={<GiMedicines className="icons-side" />} >
                            <span className="span-side">Prescriptions</span>
                        </MenuItem>
                    </SubMenu>

                    <SubMenu label="Finances" className="span-side" icon={<RiSecurePaymentLine className="icons-side" />} >
                        <MenuItem icon={<RiSecurePaymentFill className="icons-side" />} >
                            <span className="span-side">Bill</span>
                        </MenuItem>
                        <MenuItem icon={<MdPayments className="icons-side" />} >
                            <span className="span-side">Unpaid</span>
                        </MenuItem>
                        <MenuItem icon={<MdOutlinePayments className="icons-side" />} >
                            <span className="span-side">Paid</span>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Laboratory" className="span-side" icon={<RiTestTubeLine className="icons-side" />} >
                        <MenuItem icon={<GiTestTubes className="icons-side" />}>
                            <span className="span-side">TestResults</span>
                        </MenuItem>
                        <MenuItem icon={<RiTestTubeFill className="icons-side" />} >
                            <span className="span-side">Tests</span>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Surgeries" className="span-side" icon={<RiSurgicalMaskFill className="icons-side" />} >
                        <MenuItem icon={<RiSurgicalMaskLine className="icons-side" />}>
                            <span className="span-side">Surgeries</span>
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


        </div>
    );
};

export default SidebarComponent;
