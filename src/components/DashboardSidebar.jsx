// src/components/DashboardSidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, User, List, Plus, ArrowLeft } from "lucide-react";

const DashboardSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Sports Equipment</h1>
        
        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center mb-6 p-2 rounded-md hover:bg-gray-800 w-full text-left"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Site
        </button>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard"
                end  // This ensures exact matching
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                <Home className="mr-2" size={18} />
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                <User className="mr-2" size={18} />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-equipment"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                <List className="mr-2" size={18} />
                My Equipment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/add-equipment"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                <Plus className="mr-2" size={18} />
                Add Equipment
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;