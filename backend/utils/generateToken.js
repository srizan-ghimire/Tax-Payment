const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  console.log(userId);
  return jwt.sign({ userId }, "test", { expiresIn: "1h" });
};

module.exports = generateToken;
