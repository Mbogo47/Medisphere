import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import "../styles/dash.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <p>Dashboard</p>
                {/* https://www.youtube.com/watch?v=0cPCMIuDk2I */}
                <UserProfile />
            </div>
        </div>
    );
};

export default Dashboard;
