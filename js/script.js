/*
  Создать карточку Калькулятора с четырьмя кнопками: +,-,*,/ и 
  с двумя текстовыми полями для ввода двух значений
  и выводить в h2 с текстом Результат: [значение]
  
  карточка должна иметь высоту 300px и ширину 300px

  пользователь без усилий должен понимать что это кнопка,
  куда и что писать и нажимать
*/

let resultDiv = document.querySelector(".resultDiv");
let firstNumber = "";
let currentOperator = "";

const setNumber = (number) => {
  if (resultDiv.textContent === "0") {
    resultDiv.innerHTML = number;
  } else {
    resultDiv.innerHTML += number;
  }
};

const setOperator = (operator) => {
  currentOperator = operator;
  firstNumber = resultDiv.textContent;
  resultDiv.innerHTML = "0";
};

const calc = () => {
  switch (currentOperator) {
    case "+":
      return (resultDiv.innerHTML =
        Number(firstNumber) + Number(resultDiv.textContent));
    case "-":
      return (resultDiv.innerHTML =
        Number(firstNumber) - Number(resultDiv.textContent));
    case "*":
      return (resultDiv.innerHTML =
        Number(firstNumber) * Number(resultDiv.textContent));
    case "/":
      return (resultDiv.innerHTML =
        Number(firstNumber) / Number(resultDiv.textContent));
    case "%":
      return (resultDiv.innerHTML =
        (Number(firstNumber) * 100) / Number(resultDiv.textContent));
  }
};

const clearAll = () => {
  resultDiv.innerHTML = "0";
  firstNumber = "";
  currentOperator = "";
};
