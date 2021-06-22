const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const db = require("./database/db.js");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const cors = require("cors");

const accountRouter = require("./routers/accountRouter");
const apiRouter = require("./routers/apiRouter");
const restaurantRouter = require("./routers/restaurantRouter");
const recipeRouter = require("./routers/recipeRouter");
const restaurantNotes = require("./routers/restaurantNotes");
const recipeNotes = require("./routers/recipeNotes");

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.options("*", cors()); // include before other routes pre-flight

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

// must be after cookiesession
app.use(cookieSessionMiddleware);

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("SameSite", req.csrfToken());
    next();
});

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(accountRouter);
app.use(restaurantRouter);
app.use(recipeRouter);
app.use(recipeNotes);
app.use(restaurantNotes);
app.use(apiRouter);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
