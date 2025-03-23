import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route
            path="/"
            element={<UserLayout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="Login"
              element={<Login />}
            />
            <Route
              path="register"
              element={<Register />}
            />
            <Route
              path="profile"
              element={<Profile />}
            />
            <Route
              path="collections/all"
              element={<CollectionPage />}
            />
            <Route
              path="product/:id"
              element={<ProductDetails />}
            />
            <Route
              path="checkout"
              element={<Checkout />}
            />
            <Route
              path="order-confirmation"
              element={<OrderConfirmation />}
            />
            <Route
              path="order/:id"
              element={<OrderDetails />}
            />
            <Route
              path="my-orders"
              element={<MyOrdersPage />}
            />
          </Route>
          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              index
              element={<AdminHomePage />}
            />
            <Route
              path="user"
              element={<UserManagement />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
