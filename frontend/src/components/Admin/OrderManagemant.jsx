import React from "react";

const OrderManagemant = () => {
  const orders = [
    {
      _id: 123123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Processing",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    console.log({ id: orderId, status });
  };
  return (
    <div className="max-w-7xl p-8 mx-auto mb-6">
      <h1 className="text-2xl font-bold mb-4 ">Order Management</h1>
      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="uppercase bg-gray-100 text-gray-700 text-xs">
            <tr>
              <th className="px-4 py-2">order id</th>
              <th className="px-4 py-2">customer</th>
              <th className="px-4 py-2">total price</th>
              <th className="px-4 py-2">status</th>
              <th className="px-4 py-2">action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 whitespace-nowrap">{order._id}</td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">$ {order.totalPrice}</td>
                  <td className="p-4">
                    <select
                      name="status"
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 "
                    >
                      <option value="processing">Processing</option>
                      <option value="processing">Shipping</option>
                      <option value="processing">Delivered</option>
                      <option value="processing">Canceled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
                  No Ordered found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagemant;
