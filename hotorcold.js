let guesses = [1];
let submit = document.getElementById('choose');
let alertbox = document.getElementById('alertBox');

const randomNumber = function() {
  num = Math.floor(Math.random() * 100);
  return num;
}
randomNumber();


submit.onclick = function(){
  let guess = Number(document.getElementById('inputNumber').value);
  if (guess !=' ' && Number.isInteger(guess)) {
    if (guess == num) {
      alertBox.style.background='#ffff80';
      x = (guesses.length > 1) ? 'GUESSES':'GUESS';
      alertBox.innerText = 'CONGRATULATIONS, YOU GUESSED IT IN ONLY '+guesses.length+' '+x+'!!';
      submit.disabled=true;
    }
    else if (guess < 1 || guess > 100) {
      guesses.push(guess);
      alertBox.style.background='#ffc4c4';
      alertBox.innerText = 'OUT OF BOUNDS! Please try again';
    }
    else if (guesses[guesses.length-2]) {
      guesses.push(guess);
      if (Math.abs(num-guess) < Math.abs(num-guesses[guesses.length-2])) {
        alertBox.style.background='#ff0000';
        alertBox.innerText = 'HOTTER!!';
      }
      else {
        alertBox.style.background='#999999';
        alertBox.innerText = 'COLDER!!';
      }
    }
    else {
      if (Math.abs(num-guess) <= 10) {
        alertBox.style.background='#ff6666';
        alertBox.innerText = 'HOT!';
        guesses.push(guess);
      }
      else {
        alertBox.style.background='#d9d9d9';
        alertBox.innerText = 'COLD!';
        guesses.push(guess);
      }
    }
  }
  else {
    alertBox.style.background='#ffc4c4';
    alertBox.innerText = 'Please enter a valid number';
  }
}
document.getElementById('restart').onclick = function() {
  randomNumber();
  submit.disabled=false;
  guesses = [1];
  alertBox.style.background='#ffc4c4';
  alertBox.innerText = 'What is your guess?';
}
