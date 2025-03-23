import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSideOpen] = useState(false);

  const handleSidebar = () => {
    setIsSideOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* MObile toggle button */}
      <div className="flex md:hidden bg-gray-900 p-4 text-white z-20">
        <button>
          <FaBars />
        </button>
      </div>

      {/* <div className="w-64 bg-black h-screen flex ">L</div>
      <div>R</div> */}
    </div>
  );
};

export default AdminLayout;
