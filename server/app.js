require("dotenv/config");

require("./db");

const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware"); // <== IMPORT

const app = express();

require("./config")(app);

const allRoutes = require("./routes");
app.use("/api", allRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const dataRouter = require("./routes/data.routes");
app.use("/userData", isAuthenticated, dataRouter);

require("./error-handling")(app);

module.exports = app;
