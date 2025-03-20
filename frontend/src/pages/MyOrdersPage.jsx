import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orders = [
      {
        _id: "1234",
        createdAt: new Date(),
        ShippingAddress: { city: "New York", country: "USA" },
        orderItems: [
          {
            name: "Product 1",
            image: "https://picsum.photos/500/500?random=1",
          },
        ],
        totalPrice: 100,
        isPaid: true,
      },
      {
        _id: "5678",
        createdAt: new Date(),
        ShippingAddress: { city: "Los Angeles", country: "USA" },
        orderItems: [
          {
            name: "Product 2",
            image: "https://picsum.photos/500/500?random=2",
          },
        ],
        totalPrice: 150,
        isPaid: false,
      },
    ];

    setOrders(orders);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl mb-4 font-bold">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-gray-500 text-center">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700 ">
            <tr>
              <th className="py-2 px-3 sm:py-3">Image</th>
              <th className="py-2 px-3 sm:py-3">Order ID</th>
              <th className="py-2 px-3 sm:py-3">Created</th>
              <th className="py-2 px-3 sm:py-3">Shipping Address</th>
              <th className="py-2 px-3 sm:py-3">Items</th>
              <th className="py-2 px-3 sm:py-3">Price</th>
              <th className="py-2 px-3 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="px-2 py-2">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10  rounded-lg sm:h-12 sm:w-12 object-cover "
                    />
                  </td>
                  <td className="px-4 py-2 font-medium sm:px-4 sm:h-4 text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-4 py-2 sm:px-4 sm:h-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="px-4 py-2 sm:px-4 sm:h-4">
                    {order.ShippingAddress
                      ? `${order.ShippingAddress.city} ${order.ShippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 sm:px-4 sm:h-4">
                    {order.orderItems.length}
                  </td>
                  <td className="px-4 py-2 sm:px-4 sm:h-4">
                    ${order.totalPrice}
                  </td>
                  <td
                    className={`px-4 py-2 text-xs sm:text-sm  ${
                      order.isPaid ? " text-green-700" : "text-red-700"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="py-4 px-4 text-center text-gray-500"
                >
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
