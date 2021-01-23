const path = require("path");
const express = require("express");

const app = express();

app.listen(8088, () => {
  console.log("Running at Port 8088...");
});

app.use(express.static(path.join(__dirname, "public")));

app.use((_req, res) => {
  res.sendStatus(404);
});
