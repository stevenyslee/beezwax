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
  let words = req.body.firstName.trim().split(/\s+/);;
  if (words[0] === '') {
    res.status(200);
    res.send([]);
  }

  let wordCount = {};
  for (let i = 0; i < words.length; i++) {
    if (wordCount[words[i]] === undefined) {
      wordCount[words[i]] = 1;
    } else {
      wordCount[words[i]]++;
    }
  }

  let sortedWords = [];
  for (let key in wordCount) {
    sortedWords.push([ key, wordCount[key] ]);
  }
  sortedWords.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  console.log(sortedWords);

  res.status(200);
  res.send(sortedWords);
});

app.listen(3000, () => console.log('App listening on port 3000'));
