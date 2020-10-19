let addNum1 = document.querySelector("#add1");
let addNum2 = document.querySelector("#add2");
let multNum1 = document.querySelector("#mult1");
let multNum2 = document.querySelector("#mult2");
let powNum1 = document.querySelector("#pow1");
let powNum2 = document.querySelector("#pow2");
let factNum = document.querySelector("#fact");
let fiboNum = document.querySelector("#fibo");

let addButton = document.querySelector("#add-button");
let multiplyButton = document.querySelector("#multiply-button");
let powerButton = document.querySelector("#power-button");
let factorButton = document.querySelector("#factor-button");
let resetButton = document.querySelector("#reset-button");
let fibonacciButton = document.querySelector("#fibonacci-button");

let addTotal = document.querySelector("#add-total");
let multiplyTotal = document.querySelector("#multiply-total");
let powerTotal = document.querySelector("#power-total");
let factorTotal = document.querySelector("#factor-total");
let selectedNumber = document.querySelector("#selected-number");

let fibocacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21];

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  let count = 0;
  let answer = 0;

  while (count < b) {
    answer = add(a, answer);
    count += 1;
  }
  return answer;
}

function power(a, b) {
  let count = 0;
  let answer = 1;

  while (count < b) {
    answer = multiply(a, answer);
    count += 1;
  }
  return answer;
}

function factor(a) {
  let answer = 1;
  let count = 0;

  while (count < a) {
    count += 1;
    answer = multiply(answer, count);
  }

  return answer;
}

// I don't know if this techically counts for the extra credit. I did not use a previously made funtion inside this one, I instead used an array.
function fibonacci(a) {
  let count = 0;
  let answer = 0;

  while (count < a) {
    answer = fibocacciArray[count];
    count += 1;
  }
  return answer;
}

addButton.addEventListener("click", function () {
  let addition = add(Number(addNum1.value), Number(addNum2.value));
  addTotal.innerHTML = addition;
});

multiplyButton.addEventListener("click", function () {
  let multiplication = multiply(Number(multNum1.value), Number(multNum2.value));
  multiplyTotal.innerHTML = multiplication;
});

powerButton.addEventListener("click", function () {
  let exponentiation = power(Number(powNum1.value), Number(powNum2.value));
  powerTotal.innerHTML = exponentiation;
});

factorButton.addEventListener("click", function () {
  let factorial = factor(Number(factNum.value));
  factorTotal.innerHTML = factorial;
});

fibonacciButton.addEventListener("click", function () {
  //    vv points for making up that word. I'll be sad if it's already a word.
  let fibonaccicize = fibonacci(Number(fiboNum.value));
  selectedNumber.innerHTML = fibonaccicize;
  // I looked it up. It's not a word. I'm trademarking it. $$
});

resetButton.addEventListener("click", function () {
  addNum1.value = "";
  addNum2.value = "";
  multNum1.value = "";
  multNum2.value = "";
  powNum1.value = "";
  powNum2.value = "";
  factNum.value = "";
  addTotal.innerHTML = "";
  multiplyTotal.innerHTML = "";
  powerTotal.innerHTML = "";
  factorTotal.innerHTML = "";
  fiboNum.value = "";
  selectedNumber.innerHTML = "";
});
