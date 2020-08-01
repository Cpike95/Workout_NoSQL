const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require('compression')

const PORT = process.env.PORT || 3000

const app = express();
// compress all responses
app.use(compression())
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/apiRoutes.js"));
// require("./seeders/seed");
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

