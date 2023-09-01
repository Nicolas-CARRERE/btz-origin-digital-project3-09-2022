import Express from "express";
import api from "./api";
import CookieParser from "cookie-parser";

const app = Express();

import cors from "cors";
import corsOptions from "./config/corsOptions";
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.

app.use(CookieParser());
app.use(cors(corsOptions)); /* NEW */

app.use(Express.json());

app.use("/api/v1", api);

export default app;
