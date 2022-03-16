
var myUser = 'admin';
var myPass = '123';

var inputUsername = document.getElementById('exampleInputEmail1');
var inputPassword = document.getElementById('exampleInputPassword1');

var btn = document.getElementById('login');

btn.addEventListener('click', function() {
    var userName = inputUsername.value;
    var passWord = inputPassword.value;

    if (userName == myUser && passWord == myPass) {
        window.open('./page-user.html', '_self');
    } else {
        alert('Đăng nhập thất bại!');
    }
});
