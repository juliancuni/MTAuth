import dotenv from 'dotenv';
dotenv.config();
import http from "http";
import express from 'express';
import helmet from 'helmet';
import bodyparser from 'body-parser';
import routes from './routes';
import cookieParser from 'cookie-parser';


const app = express();
app.use(helmet());
app.use(bodyparser.json());
app.use(cookieParser());
app.use('/', routes);
app.use('/public', express.static('public'));
app.use('/bulma', express.static("./node_modules/bulma"));


const server: http.Server = app.listen(process.env.PORT);
server.on("listening", () => { console.info("MTAuth Server running on port " + process.env.PORT) });