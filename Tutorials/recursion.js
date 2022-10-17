// this is A simple example of a recursive function would be to count down the value to 1.

function countdown(number) {
  //display number
  console.log(number);

  // decrese the number
  const newNumber = number - 1;

  // case
  if (newNumber > 0) {
    countdown(newNumber)
  }
}

countdown(3)
