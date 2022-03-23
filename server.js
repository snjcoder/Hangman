
const express = require('express');
const { randomSelect, guess, gameState} = require('./index.js');
const app = express();

const PORT = 7100;
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});


// Link for Player Name curl http://localhost:7100/playerName -H 'Content-Type: application/json' -X POST -d '{"name":"bob", "emailId":"blah@email.com"}'

app.post('/playerName', (req,res)=>{
  const data = req.body
  const name = data.name
  const emailId = data.emailId
  gameState.name = name
  res.send(`Hello, ${name}, your email Id is ${emailId}`);
});

// CODE FOR STARTING THE GAME http://localhost:7100/startGame

app.get('/startGame', (req, res) => {
  theScore = 0;
  let randomWord = randomSelect();
  
  res.send(
    `Welcome to the Hangman Game: Here is your First Word ${randomWord}: "curl http://localhost:7100/enterGuess?guess= "`
  );
});

// CODE FOR HANDLING A GUESS

app.get('/enterGuess', (req, res) => {
  let userGuess = req.query.guess;
  let response = guess(userGuess);
  res.send(response);
});

// SCORE FOR A GUESS link curl http://localhost:7100/score

app.get('/score', (req, res) => {
  let theScore = gameState.theScore;
  let name = gameState.name;
  res.send(`the score is: ${theScore}, name is ${name}`);
});

app.get('/restart', (req, res) => {
  res.send(`To continue the Game: "curl http://localhost:7100/startGame" `);
});