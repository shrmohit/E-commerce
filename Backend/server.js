const express = require("express");
const cors = require("cors");
// it used to connect env on code
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes");
const ProductRoute = require("./routes/productRouter");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

// connect to mongoose
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO RABBIT API!");
});

// API Routes
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
