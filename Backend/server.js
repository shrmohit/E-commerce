const express = require("express");
const cors = require("cors");
// it used to connect env on code
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

console.log(process.env.PORT);

const PORT = 9000;

app.get("/", (req, res) => {
  res.send("WELCOME TO RABBIT API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
