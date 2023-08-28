/* بسم الله الرحمن الرحيم */

import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import TasksRoutes from "./Handlers/tasksHandler";
dotenv.config();


const app: Application = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParser.json()); // req.body
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send("بسم رب العالمين ابدأ")
})

// APPLICATION MAIN ROUTING
TasksRoutes(app);

app.listen(PORT, () => console.log("http://localhost:"+PORT))
/* الحمد لله رب العالمين */