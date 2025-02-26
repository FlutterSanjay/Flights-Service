const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use("/api", apiRoutes);

app.use(bodyParser.json());

app.listen(ServerConfig.PORT, () => {
  console.log(`SucessFully Started the server on Port: ${ServerConfig.PORT}`);
});
