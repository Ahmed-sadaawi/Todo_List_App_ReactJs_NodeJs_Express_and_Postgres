/* بسم الله الرحمن الرحيم */

import {Pool} from "pg";
import dotenv from "dotenv";
dotenv.config();

const {DB_HOST, DB_USERNAME,DB_PASSWORD, DB_NAME, DB_PORT} = process.env;

const Client = new Pool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    port:  parseInt(DB_PORT as string)
});

export default  Client;

/* الحمد لله رب العالمين */