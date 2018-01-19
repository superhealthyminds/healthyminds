const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/router');
const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hi there');
});

app.use(router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is runing on port http://localhost:${port}`);
});

module.exports = app;
