import { useState } from 'react';
import { FaBars, FaCalendar, FaFileMedicalAlt } from 'react-icons/fa';
import { GiTestTubes } from 'react-icons/gi';
import { MdOutlineLogout } from 'react-icons/md';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import UserProfile from '../components/UserProfile';
import '../styles/sidebar.css';

const SidebarComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>


            <Sidebar collapsed={collapsed} className="sidebar" breakPoint="sm" transitionDuration={800}>
                <Menu>
                    <MenuItem
                        icon={<FaBars />}
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>Medisphere</h2>

                    </MenuItem>
                    {/* <MenuItem>
                        <FaBars
                            onClick={() => setCollapsed(!collapsed)}
                            className="icons-side"
                        />
                        {!collapsed && (
                            <>
                                <span className="span-side">Medisphere</span>
                               
                            </>
                        )}
                    </MenuItem> */}
                    <SubMenu label="Doctors" icon={<FaCalendar className="icons-side" />} styles={{ 'fontWeight': '700' }} >
                        {/* <MenuItem>
                            <FaCalendar className="icons-side" />
                            {!collapsed && <span className="span-side">Appointments</span>}
                        </MenuItem>
                        <MenuItem>
                            <FaFileMedicalAlt className="icons-side" />
                            {!collapsed && <span className="span-side">MedicalRecords</span>}
                        </MenuItem>
                        <MenuItem>
                            <GiTestTubes className="icons-side" />
                            {!collapsed && <span className="span-side">TestResults</span>}
                        </MenuItem> */}
                        <MenuItem icon={<FaCalendar />}>Home</MenuItem>
                        <MenuItem icon={<FaFileMedicalAlt />}>Team</MenuItem>
                        <MenuItem icon={<GiTestTubes />}>Contacts</MenuItem>
                        <MenuItem icon={<FaCalendar />}>Home</MenuItem>
                        <MenuItem icon={<FaFileMedicalAlt />}>Team</MenuItem>
                        <MenuItem icon={<GiTestTubes />}>Contacts</MenuItem>
                    </SubMenu>
                    <MenuItem>
                        <UserProfile />
                    </MenuItem>
                    <MenuItem>
                        <MdOutlineLogout className="icons-side" />
                        {!collapsed && <span className="span-side">Logout</span>}
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarComponent;
