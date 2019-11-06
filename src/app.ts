import http from "http";
import express from 'express';
import helmet from 'helmet';
import bodyparser from 'body-parser';
import routes from './routes';

const app = express();
app.use(helmet());
app.use(bodyparser.json());
app.use('/', routes);
app.use('/public', express.static('public'));
app.use('/bulma', express.static("./node_modules/bulma"));

const server: http.Server = app.listen(3000);
server.on("listening", () => { console.info("MTAuth Server running") });