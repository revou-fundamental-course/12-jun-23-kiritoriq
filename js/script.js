let convertForm = document.querySelector("#convert");

convertForm.onsubmit = function () {
  let celcius = document.querySelector("#celcius").value;

  let fahrenheit = celcius * (9 / 5) + 32;
  let calculation = `(${celcius} * (9/5)) + 32 = ${fahrenheit}`;

  document.getElementById("fahrenheit").textContent = fahrenheit;
  document.getElementById("calc-res").textContent = calculation;
};

let resetForm = document.querySelector("#reset");

resetForm.onclick = function () {
  document.getElementById("celcius").textContent = "";
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").textContent = "";
  document.getElementById("calc-res").textContent = "";
};
