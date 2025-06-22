const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config({
  path: path.join(__dirname, '/.env'),
});
console.log("🔍 MONGO URI:", process.env.MONGODB_URI);

const connectDB = require("./db/conn");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/api/upskill", require("./routes/upskill.route"));


const govt_scheme_route = require("./routes/govt_scheme.route");
const jobs_route = require("./routes/jobs.route");
const upskill_route = require("./routes/upskill.route");
const veer_community_route = require("./routes/veer_community.route");
const authRoute = require("./routes/auth.route");

app.use("/auth", authRoute);
app.use("/govt-schemes", govt_scheme_route);
app.use("/jobs", jobs_route);
app.use("/upskill", upskill_route);
app.use("/veer-community", veer_community_route);

app.listen(8080, () => {
  connectDB();
  console.log(" Server is running ");
});
