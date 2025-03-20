import React from "react";
import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 ">
          {/* left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">John Doe</h2>
            <p className="text-lg text-gray-600 mb-4">John@example.com</p>
            <button
              className="w-full text-center
             bg-red-500 text-white rounded  py-2 px-4 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
          {/* right section - order table
           */}
          <div className="w-full md:h-2/3 lg:h-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
