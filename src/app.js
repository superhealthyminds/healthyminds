const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes')();
const app = express();

const port = process.env.Port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('hi there');
});

app.use('/posts', postsRoutes);

app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app; 