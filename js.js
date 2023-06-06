document.addEventListener('DOMContentLoaded', function() {
  let words = [
    "javascript", "monkey", "amazing", "pancake", "bitcoin"
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  let remainingLetters = word.length;
  console.log(answerArray);
  console.log(remainingLetters);

  let gameStateElement = document.getElementById('game-state');
  let guessInputElement = document.getElementById('guess-input');
  let guessButtonElement = document.getElementById('guess-button');
  let wordsDay = document.getElementById('words-day');

  wordsDay.textContent = words;

  function updateGameState() {
    gameStateElement.textContent = answerArray.join(" ");

    if (remainingLetters === 0) {
      alert("Congratulations! You guessed the word!");
    }
  }

  guessButtonElement.addEventListener('click', function() {
    let guess = guessInputElement.value.toLowerCase();
    guessInputElement.value = '';

    if (guess.length !== 1) {
      alert("Please enter a single letter");
      return;
    }

    if (answerArray.includes(guess)) {
      alert("You already guessed that letter!");
      return;
    }

    let foundMatch = false;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        foundMatch = true;
      }
    }

    if (!foundMatch) {
      alert("Incorrect guess!");
    }

    updateGameState();
  });
    
  guessInputElement.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      // Перевіряємо, чи була натиснута клавіша Enter
      let guess = guessInputElement.value.toLowerCase();
      guessInputElement.value = '';

      if (guess.length !== 1) {
      alert("Please enter a single letter");
      return;
    }

    if (answerArray.includes(guess)) {
      alert("You already guessed that letter!");
      return;
    }

    let foundMatch = false;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        foundMatch = true;
      }
    }

    if (!foundMatch) {
      alert("Incorrect guess!");
      }
      
      updateGameState();
    }
  });

  updateGameState();
});