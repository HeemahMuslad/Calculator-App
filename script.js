let calculation = JSON.parse(localStorage.getItem("calculation")) || " ";

let calc = (calculate) => {
  if (calculate === "one") {
    calculation += "1";
  } else if (calculate === "two") {
    calculation += "2";
  } else if (calculate === "three") {
    calculation += "3";
  } else if (calculate === "four") {
    calculation += "4";
  } else if (calculate === "five") {
    calculation += "5";
  } else if (calculate === "six") {
    calculation += "6";
  } else if (calculate === "seven") {
    calculation += "7";
  } else if (calculate === "eight") {
    calculation += "8";
  } else if (calculate === "nine") {
    calculation += "9";
  } else if (calculate === "zero") {
    calculation += "0";
  } else if (calculate === "add") {
    calculation += " + ";
  } else if (calculate === "substract") {
    calculation += " - ";
  } else if (calculate === "multiply") {
    calculation += " * ";
  } else if (calculate === "divide") {
    calculation += " / ";
  } else if (calculate === "eval") {
    calculation = eval(calculation);
  } else if (calculate === "float") {
    calculation += ".";
  } else if (calculate === "clear") {
    calculation = "";
    localStorage.removeItem("calculation");
    console.log("Cleared");
  }
  document.querySelector(".calcResult").innerHTML = calculation;
  localStorage.setItem("calculation", JSON.stringify(calculation));
};
