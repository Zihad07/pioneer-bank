console.log('connect');

var loginBtn = document.getElementById('login');
var user = document.getElementById('name');
var password = document.getElementById('password');
var loginSection = document.getElementById('login-area');
document.get

loginBtn.addEventListener('click', function(e) {
    console.log('login');
    console.log(e.target.value);
    console.log(user.value, password.value);
    // console.log(loginSection.innerHTML)
    // loginSection.remove();
    loginSection.style.display = 'none';
});