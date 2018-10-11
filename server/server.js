const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  let data = {
    message: 'Hello World!'
  };
  res.status(200);
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.status(200)
  res.send('Post Received!')
});

app.listen(3000, () => console.log('App listening on port 3000'));
