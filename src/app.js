const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.Port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hi there');
});

app.listen(port, () => {
  console.log(`runing on prot http://localhost:${port}`);
});
