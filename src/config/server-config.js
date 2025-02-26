const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

if (!process.env.PORT) {
  console.error("PORT is not defined in .env file");
  process.exit(1); // Exit the application if PORT is not defined
}

console.log("PORT:", process.env.PORT);

module.exports = {
  PORT: process.env.PORT,
};
