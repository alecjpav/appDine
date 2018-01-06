const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
const path       = require("path");
const bodyparser = require("bodyparser");
const app        = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
