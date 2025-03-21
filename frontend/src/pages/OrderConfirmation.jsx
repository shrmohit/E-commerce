import React from "react";

const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      producId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 190,
      quantity: 1,
      image: "https://picsum.photos/500/500/?random=2",
    },
    {
      producId: "2",
      name: "black-Jacket",
      color: "blue",
      size: "S",
      price: 150,
      quantity: 2,
      image: "https://picsum.photos/500/500/?random=9",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmation = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thankyou You for Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID : {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date : {new Date(checkout.createdAt).toLocaleDateString}
              </p>
            </div>
            {/*estimated delivery  */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* orderd Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item}
                className="flex items-center mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="font-semibold text-md">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color}|{item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <h4 className="text-md font-semibold">${item.price}</h4>
                  <p className="text-gray-500">Qty:{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and delivery info */}
          <div className="flex justify-between w-1/2 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
