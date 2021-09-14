const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const swap = document.getElementById("button-rate");
const currencyText = document.getElementById("rate");

//getting rates from API
function calculate() {
  let currency1 = currencyOne.value;
  let currency2 = currencyTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.rates[currency2];
      amountTwo.value = (amountOne.value * rate).toFixed(2);
      currencyText.innerHTML = `1 ${currency1} = ${rate} ${currency2} `;
    });
}

//listener for currency one change
currencyOne.addEventListener("change", calculate);

//listener for currency two change
currencyTwo.addEventListener("change", calculate);

//amountOne change addEventListener
amountOne.addEventListener("input", calculate);

//amountTwo change addEventListener
amountTwo.addEventListener("input", calculate);

//swapping the currencies using a temp variable
swap.addEventListener("click", () => {
  const temp = currencyTwo.value;
  currencyTwo.value = currencyOne.value;
  currencyOne.value = temp;
  calculate();
});

calculate();
