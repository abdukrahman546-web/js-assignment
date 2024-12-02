var numbers = [-5, 0, -2, -1, -6];
var largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
alert("The largest number is: " + largest);