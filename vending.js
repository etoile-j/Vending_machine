const baseMoney = document.querySelector('.baseMoney');
baseMoney.textContent = 15000;
let baseMoneyValue = baseMoney.textContent;

const restMoney = document.querySelector('.restMoney');
restMoney.textContent = 0;
let restMoneyValue = parseInt(restMoney.textContent);

const returnRestBtn = document.getElementById('returnRestBtn');
const inputValue = document.getElementById('inputValue');
const paymentBtn = document.getElementById('paymentBtn');


paymentBtn.addEventListener('click', paymentF);
function paymentF () {
    baseMoney.textContent = (baseMoneyValue -= inputValue.value);
    restMoney.textContent = (restMoneyValue += +(inputValue.value));
}
