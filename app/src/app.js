const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/router');
const favicon = require('serve-favicon');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hi there');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.use(router);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));

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
