const express = require("express");
require("../src/db/conn");
const mensRanking = require("../src/models/mens");
const app = express();
//for dynamic port
const port = process.env.PORT || 3000;
app.get("/", async (req, res) => {
  res.send("Hello");
});
app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking({
      ranking: 1,
      name: "Mitali",
      dob: "31st Oct 2022",
      country: "USA",
      score: "1000",
    });
    addingMensRecords.save();
  } catch (e) {
    res.send(e);
  }
});
app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
