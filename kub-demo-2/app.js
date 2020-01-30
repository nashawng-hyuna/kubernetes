const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  return res.send('Index route');
});

app.get('/get-all', (req, res) => {
  return res.send('Get all route');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
