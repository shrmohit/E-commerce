import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  // useParams is use for giving params id

  const [OrderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetail = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/500/500/?random=2",
        },
        {
          productId: "2",
          name: "T-shirt",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/500/500/?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetail);
  }, [id]);
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">Order Details</h2>
      {!OrderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border ">
          {/* order info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {" "}
                Order ID: #{OrderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(OrderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  OrderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {OrderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  OrderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 rounded-full text-sm py-1 font-medium mb-2`}
              >
                {OrderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>
          {/* payment and shaipping info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 ">Payment Info</h4>
              <p className="text-md text-gray-900">
                Payment Method: {OrderDetails.paymentMethod}
              </p>
              <p className="text-md text-gray-900">
                Status: {OrderDetails.isPaid ? "Paid" : "UnPaid"}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Shipping Info</h4>
              <p className="text-md text-gray-900">
                Shipping: {OrderDetails.shippingMethod}
              </p>
              <p className="text-md text-gray-900">
                Address: {OrderDetails.shippingAddress.city}
                {", "}
                {OrderDetails.shippingAddress.country}
              </p>
            </div>
          </div>
          {/* product list */}

          <div className="overflow-x-auto">
            <h2 className="font-semibold text-lg mb-4">Products</h2>
            <table
              className="w-full
             text-gray-600 mb-4 border"
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {OrderDetails.orderItems.map((item) => (
                  <tr
                    key={item.productId}
                    className="border-b"
                  >
                    <td className="py-2 px-4 flex items">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">$ {item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* back to order link */}
          <Link
            to="/my-orders"
            className="text-blue-500 hover:underline"
          >
            Back to My Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
