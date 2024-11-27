const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const localURI = "mongodb://localhost/igdatabase";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(localURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

// routing
app.use("/", require("./routes/api/post"));
app.use("/user", require("./routes/api/user"));

mongoose.set("useFindAndModify", false);
