const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes');
const chatRoomRoutes = require('./routes/chatRoomRoutes')
const app = express();

const port = process.env.Port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hi there');
});

app.use('/posts', postsRoutes());

app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});

app.use('/chatrooms', chatRoomRoutes());
