// import Header from "../components/Header";
import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarComponent from "../components/Sidebar";
import "../styles/dash.css";

const Dashboard = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="dashboard">
                <ProSidebarProvider>
                    <SidebarComponent />
                </ProSidebarProvider>
                <div className="dashboard-content">
                    <p>Dashboard</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
