
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;