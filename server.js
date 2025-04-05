require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport= require("passport");
const LocalStrategy= require("passport-local");

const User= require("./models/user.model.js");
const postRouter = require("./routes/post.route.js");
const userRouter= require("./routes/user.route.js");

// Database connection
const MONGO_URl = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URl);
}

// middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));

const sessionOption = {
  secret: "supersecured",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(session(sessionOption));
app.use(flash());

// passport configuration
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/posts", postRouter);
app.use("/",userRouter);
app.use("/",userRouter);

app.listen(port, () => {
  console.log(
    `Server is listening on port ${port} at http://localhost:${port}/posts`
  );
});
