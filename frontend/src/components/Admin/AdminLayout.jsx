import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSideOpen] = useState(false);

  const handleSidebar = () => {
    setIsSideOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* MObile toggle button */}
      <div className="flex md:hidden bg-gray-900 p-4 text-white z-20">
        <button onClick={handleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* overlay for mobile sodebar */}
      {isSidebarOpen && (
        <div
          className="fixed  inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={handleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`bg-gray-900  w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } trsnsition-transform duration-300 md:translate-x-0 md:block z-20`}
      >
        {/* sidebar */}
        <AdminSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
