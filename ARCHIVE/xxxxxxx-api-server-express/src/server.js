const dbLayer = require("./db/dbLayer.js");
const express = require("express");
const response = require("./util/response");

const app = express();
const db = dbLayer("cars.db");
const port = 4000;

app.get("/", function (req, res) {
  res.send(
    "<body>" +
      "Calls:<br/>" +
      '<a href="/getCars">/getCars</a><br/>' +
      '<a href="/createCar?year=1111&model=superCar&color=Red">/createCar?year=1111&model=superCar&color=Red</a><br/>' +
      '<a href="/removeCar?id=3">/removeCar?id=3</a><br/>' +
      "</body>"
  );
});

app.get("/getCars", function (req, res) {
  db.cars.getCars((cars) => {
    res.send(
      response.makeSuccessResponse(cars, [
        "These are the cars",
        "Ain't they pretty!",
      ])
    );
  });
});

app.get("/createCar", function (req, res) {
  const year = req.query.year;
  const model = req.query.model;
  const color = req.query.color;

  if (year && model && color) {
    db.cars.createCar(parseInt(year), model, color, (car) => {
      res.send(
        car
          ? response.makeSuccessResponse(car, ["Made a car"])
          : response.makeFailResponse(["Could not make car"])
      );
    });
  } else {
    response.makeFailResponse(["Could not make car"]);
  }
});

app.get("/removeCar", function (req, res) {
  const id = req.query.id;

  console.log("       removing id: ", id);

  if (id) {
    db.cars.removeCar(parseInt(id), (car) => {
      res.send(
        car
          ? response.makeSuccessResponse(car, ["Removed a car"])
          : response.makeFailResponse(["Could not remove car"])
      );
    });
  } else {
    response.makeFailResponse(["Could not remove car"]);
  }
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

// db.close();
