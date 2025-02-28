const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json()); // or use app.use(express.json()) ->inbuilt in Express
// that help to identify json body send by client
app.use(express.urlencoded({ extended: true })); // encode or decode the urlencoded data

app.use("/api", apiRoutes);




app.listen(ServerConfig.PORT, () => {
  console.log(`SucessFully Started the server on Port: ${ServerConfig.PORT}`);
});
