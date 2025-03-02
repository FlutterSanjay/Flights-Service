const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");
const { City, Airport } = require("./models");

const app = express();
app.use(express.json()); // or use app.use(express.json()) ->inbuilt in Express
// that help to identify json body send by client
app.use(express.urlencoded({ extended: true })); // encode or decode the urlencoded data

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`SucessFully Started the server on Port: ${ServerConfig.PORT}`);
  // Bad Code Way just for checking
  /*const city = await City.findByPk(3); // access the data in object form
  console.log(city);
  // const result = await city.createAirport({
  //   name: "Bihar airport",
  //   code: "BHR",
  });
  console.log(result); */

  /* delete the cities along with related airport with it
  const delResult = await City.destroy({
    where: {
      id: 3,
    },
  });
  */
});

