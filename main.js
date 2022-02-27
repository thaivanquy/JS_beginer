/*
var myUser = 'admin';
var myPass = '123';

var inputUsername = document.getElementById('exampleInputEmail1');
var inputPassword = document.getElementById('exampleInputPassword1');

var btn = document.getElementById('login');

btn.addEventListener('click', function() {
    var userName = inputUsername.value;
    var passWord = inputPassword.value;

    if (userName == myUser && passWord == myPass) {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập thất bại!');
    }
});
*/
var users = [
    {
        id : 1,
        name : 'Quý',
        age: 22,
        address: 'Bạc liêu'
    },
    {
        id : 2,
        name : 'Khoa',
        age : 16,
        address: 'Cà mau'
    },
    {
        id : 3,
        name : 'Vũ',
        age : 30,
        address : 'Sóc trăng'
    },
    {
        id : 4,
        name : 'Sơn',
        age: 17,
        address : 'Cần thơ'
    }
];

function loadUser() {
    var user = '';
    users.forEach(function(element) {
        user+='<tr>';
        user+='<td>'+element['id']+'</td>';
        user+='<td>'+element['name']+'</td>';
        user+='<td>'+element['age']+'</td>';
        user+='<td>'+element['address']+'</td>';
        user+='</tr>';
    });
    document.getElementById('dsuser').innerHTML = user;
}
loadUser();


//search
var search_user = document.getElementById('searchbutton');
search_user.addEventListener('keyup', function(){
    
});





