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

/* eslint-disable */
app.use((err, req, res, next) => {
  // next usage is mandatory
  /* eslint-enable */
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: JSON.stringify(err)
  });
});

module.exports = app;
