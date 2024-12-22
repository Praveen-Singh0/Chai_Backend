require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 4000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${port}`);
});
