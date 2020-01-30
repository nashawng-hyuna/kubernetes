const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('First Kubernetes app');
  return res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
