const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const userRoutes = require("./routes/userRoutes");
const taxRoutes = require("./routes/taxRoutes");
const verifyToken = require("./middleware/verifyToken");
const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.cors_origin,
    credentials: true,
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoutes);
app.use("/api/taxes", verifyToken, taxRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
