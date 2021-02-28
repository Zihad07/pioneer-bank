console.log('connect');

const loginBtn = document.getElementById('login');
const user = document.getElementById('name');
const password = document.getElementById('password');
const loginSection = document.getElementById('login-area');


// Transaction section variable
const transactionArea = document.getElementById("transaction-area");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const depositAmount = document.getElementById("depositAmount");
const withdrawAmount = document.getElementById('withdrawAmount');
const currentDeposit = document.getElementById("currentDeposit");
const currentBalance = document.getElementById("currentBalance");
const currentWithdraw = document.getElementById("currentWithdraw");

// loginBtn handler
loginBtn.addEventListener('click', function(e) {
    console.log('login');
    console.log(e.target.value);
    console.log(user.value, password.value);
    // console.log(loginSection.innerHTML)
    // loginSection.remove();
    loginSection.style.display = 'none';
    transactionArea.style.display = 'block';
});

// depositeBtn handler

function updateSpantext(value, obj) {
    let current_balance = parseFloat(obj.innerText);
    current_balance += value;
    obj.innerText = current_balance;
}

depositBtn.addEventListener('click', function(e) {

    let value = parseFloat(depositAmount.value);
    if (!isNaN(value)) {
        updateSpantext(value, currentDeposit);
        updateSpantext(value, currentBalance);
        depositAmount.value = '';
    }
});

withdrawBtn.addEventListener('click', function(e) {
    let value = parseFloat(withdrawAmount.value);
    // alert(currentWithdraw.innerText);

    if (!isNaN(value)) {
        updateSpantext(value, currentWithdraw);
        withdrawAmount.value = '';
    }
});