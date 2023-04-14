import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

// importing all routers
import homeRouter from "./routes/home.js";

// importing database code and rendering for config folder 
import './config/db.js';

const app = express();

// parsing the json, cors policy url encoding and json formatting
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//MIDDLEWARES
app.use('/',homeRouter);

// defining port for backend rest server
const PORT = 5000;

// run the server at PORT
app.listen(PORT, () =>
  console.log(`server running at: http://localhost:${PORT} `)
);