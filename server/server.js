const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const port = 5000;

const apiKey = "35f7044676msh060f063f311d0e5p16a79cjsnaa69971e1d9f"; // API key for wft-geo-db
const defaultCity = "New York";

app.get("/api/weather/", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
