import dotenv from 'dotenv';
dotenv.config();
import http from "http";
import express from 'express';
import helmet from 'helmet';
import bodyparser from 'body-parser';
import routes from './routes';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
app.use(helmet());
app.use(bodyparser.json());
app.use(cookieParser());
app.use('/', routes);

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', process.env.DEVELOPMENT ? true : false);

const server: http.Server = app.listen(process.env.PORT);
server.on("listening", () => {
    console.info("MTAuth Server running on port " + process.env.PORT);
    try {
        mongoose.connect(process.env.MONGO_URI || "")
        mongoose.connection.on('open', () => { console.log("MongoDBConnected!") });
        mongoose.connection.on('error', (err) => { console.log("MongoERR0: ", err) });
    } catch (e) {
        console.log("MongoERR1: ", e)
    }
});