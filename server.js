
const express = require('express');
const { randomSelect, guess, gameState} = require('./project1');
const app = express();

const PORT = 7000;
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});


// Link for Player Name curl http://localhost:7000/playerName -H 'Content-Type: application/json' -X POST -d '{"name":"bob", "emailId":"blah@email.com"}'

app.post('/playerName', (req,res)=>{
  const data = req.body
  const name = data.name
  const emailId = data.emailId
  res.send(`Hello, ${name}, you are email Id is ${emailId}`)
});

// CODE FOR STARTING THE GAME

app.get('/startGame', (req, res) => {
  theScore = 0;
  let randomWord = randomSelect();
  res.send(
    `Welcome to the Hangman Game: Here is your First Word ${randomWord}: "curl http://localhost:7000/enterGuess?guess= "`
  );
});

// CODE FOR HANDLING A GUESS

app.get('/enterGuess', (req, res) => {
  let userGuess = req.query.guess;
  let response = guess(userGuess);
  res.send(response);
});

// SCORE FOR A GUESS link curl http://localhost:7000/score

app.get('/score', (req, res) => {
  let theScore = gameState.theScore;
  let name = gameState.name;
  res.send(`the score is: ${theScore}, name is ${name}`);
});

