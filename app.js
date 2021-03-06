const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 8000;
const usersRoute = require("./server/routes/users");
const eventRoute = require("./server/routes/eventFome");
// mongoose.connect(
//   "mongodb://localhost:27017/events",
//   { useNewUrlParser: true },
//   function (err, connection) {
//     if (err) throw err;
//     else console.log("connected to mongodb");
//   }
// );

// const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://ashish:ashish@cluster0.kw1ap.mongodb.net/<organiseEvent>?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true }, (err) => {
  try {
    if (err) {
      console.log(err, "Not Connected To DB");
    } else {
      console.log("Connected Sucessfully TO DB");
    }
  } catch (err) {
    console.log(err.message);
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "writer",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: "mongodb://localhost/writer-session" }),
  })
);

if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(cors());
app.use(require("./server/routes/index"));
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/users/event", eventRoute);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
