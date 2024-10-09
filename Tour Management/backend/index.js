import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";
import connectDb from "./utils/db.js";
import { default as tourRouter } from "./router/tour.js";
dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' })); // Adjust the limit as necessary
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(json());

// app.use(authMiddleware)

app.use("/api/tours", tourRouter);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
