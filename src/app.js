const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/router');
const app = express();

const port = process.env.Port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hi there');
});

app.use(router);

app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
