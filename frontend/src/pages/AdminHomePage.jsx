import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 123123,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Delivered",
    },
    {
      _id: 123123,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Delivered",
    },
    {
      _id: 123123,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Delivered",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-14">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-3">
        <div className="p-4 shadow-md rounded-lg">
          <h4 className="text-2xl font-semibold">Revenue</h4>
          <p className="text-xl">$100000</p>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <h4 className="text-2xl font-semibold">Total Order</h4>
          <p className="text-xl">200</p>
          <Link
            to="/admin/orders"
            className="text-blue-500 hover:underline"
          >
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <h4 className="text-2xl font-semibold">Revenue</h4>
          <p className="text-xl">100</p>
          <Link
            to="/admin/products"
            className="text-blue-500 hover:underline"
          >
            Manage Products
          </Link>
        </div>
      </div>
      {/* Recent orders */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order Id</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">total Price</th>
                <th className="py-3 px-4">status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={orders._id}>
                    <td className="py-2 px-4">{order._id}</td>
                    <td className="py-2 px-4">{order.user.name}</td>
                    <td className="py-2 px-4">{order.totalPrice}</td>
                    <td className="py-2 px-4">
                      {status ? "Pending" : "Delivered"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="p-4 text-center text-gray-500"
                  >
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
