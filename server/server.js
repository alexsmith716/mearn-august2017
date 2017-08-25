import express from 'express';

import bodyParser from 'body-parser';

const app = express();

app.use(helmet())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));