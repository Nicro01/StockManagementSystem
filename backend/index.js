import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      return callback(null, true);
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(Router);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
