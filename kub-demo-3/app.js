const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const Task = require('./models/TaskModel');

const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());

//routes
app.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const result = await Task.create({ name });
    return res.json(result);
  } catch (err) {
    return res.json({ message: err.message });
  }
});

app.get('/', async (req, res) => {
  const result = await Task.findAll();
  return res.json(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
