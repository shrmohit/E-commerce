import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Home from "./pages/home";
import Search from "./pages/search";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      {/* Header */}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/Search"
          element={<Search />}
        ></Route>
        <Route
          path="/Cart"
          element={<Cart />}
        ></Route>
      </Routes>
    </Router>
    // <>
    //   <h1>mohit</h1>
    // </>
  );
}

export default App;
