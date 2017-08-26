
import 'dotenv/config';

import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.use(helmet())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));


export { app };

/*
app.set('port', process.env.PORT || 3000)

var server = http.createServer(app).listen(3000, '127.0.0.1', function () {
  console.log('Express server listening on port ' + server.address().port)
  console.log('Express server listening on port ' + server.address().address)
})
*/