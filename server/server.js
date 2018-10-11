const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  let data = {
    message: 'Hello World!'
  };
  res.status(200);
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200)
  res.send('Post Received!')
});

app.listen(3000, () => console.log('App listening on port 3000'));
