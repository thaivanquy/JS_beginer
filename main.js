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
		id: 1,
		name: 'Quý',
		age: 22,
		address: 'Bạc liêu'
	},
	{
		id: 2,
		name: 'Khoa',
		age: 16,
		address: 'Cà mau'
	},
	{
		id: 3,
		name: 'Vũ',
		age: 30,
		address: 'Sóc trăng'
	},
	{
		id: 4,
		name: 'Sơn',
		age: 17,
		address: 'Cần thơ'
	}
];

//localStorage.setItem('users', JSON.stringify(users));
var users = JSON.parse(localStorage.getItem('users'));
function loadUser(arrUser) {
	let userEle = '';
	arrUser.forEach(element => {
		userEle += `
      <tr>
          <td>${element['id']}</td>
          <td ><a href="./user_detail.html?user_id=${element['id']}" target="_bank"> ${element['name']} </a></td>
          <td>${element['age']}</td>
          <td>${element['address']}</td>
		  <td><button type="button" class="btn btn-warning"
		  data-bs-toggle="modal" data-bs-target="#modalUpdateUser"
		  data-bs-whatever="@mdo" onclick="editUser(${element['id']})">Sửa</button></td>
		  <td><button type="button" class="btn btn-danger" data-action="btn-modal-delete" 
		  id="btn-del" data-value="${element['id']}">Xóa</button></td>	
      </tr>`;
	});
	document.getElementById('user-list').innerHTML = userEle;
	// const trs = document.querySelectorAll('td[data-action="view-user-detail"]');
	// for (const tr of trs) {
	// 	tr.addEventListener('click', function(_e) {
	// 		const uID = _e.currentTarget.getAttribute('data-value');
	// 		// window.open(`./user_detail.html?user_id=${uID}`,'_bank');
	// 	})
	// }
}
loadUser(users);



//search
var btnSearchUser = document.getElementById('searchbutton');
btnSearchUser.addEventListener('keyup', function (e) {
	let value = e.target.value || '';
	value = stringToSlug(value.trim().toLowerCase());
	const userFilter = users.filter(u => {

		const uName = stringToSlug(u.name.toLowerCase());
		const uAddress = stringToSlug(u.address.toLowerCase());

		 return uName.includes(value) || uAddress.includes(value)
	});
	loadUser(userFilter);
});

// remove Vietnamese
// source https://gist.github.com/bluzky/b8c205c98ff3318907b30c3e0da4bf3f
function stringToSlug(str) {
	// remove accents
	var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
		to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
	for (var i=0, l=from.length ; i < l ; i++) {
		str = str.replace(RegExp(from[i], "gi"), to[i]);
	}

	str = str.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\-]/g, '')
		.replace(/-+/g, '');

	return str;
}

//Add user
// var data = users;

// set last user id
function setLastUserId() {
	const lastUserId = users[users.length - 1].id + 1;
	$("#id").val(lastUserId);
}
setLastUserId();

function resetForm() {
	setLastUserId();
	$("#name").val('');
	$("#age").val('');
	$("#address").val('');
}

function addUser(){
	var aId = Number($("#id").val());
	var aName = document.getElementById('name').value;
	var aAge = Number(document.getElementById('age').value);
	var aAddress = document.getElementById('address').value;
	var user = {
		id : aId,
		name : aName,
		age : aAge,
		address : aAddress
	};
	if (aName === '' || aAge === '' || aAddress === '') {
		alert('Bạn chưa nhập giá trị!!!');
	} else {
		users.push(user);
		updateUserStorage(users);
		loadUser(users);
		resetForm()
	}
}

function updateUserStorage(_users) {
	localStorage.setItem('users', JSON.stringify(_users));
}

function getUserStorage() {
	return JSON.parse(localStorage.getItem('users'));
}

function getUserById(uID) {
	const users = getUserStorage();
	return users.find(u => Number(u.id) === Number(uID)); //
}

//Delete user
// function deleteUser(id){
// 	var deUser = data;
// 		for (var i = 0; i < deUser.length; i++){
// 			if (deUser[i].id==id){
// 				deUser.splice(i,1);
// 			}
// 		}
// 	loadUser(deUser);
// 	localStorage.setItem('users', JSON.stringify(users));
// }

//Modal delete
$('button[data-action="btn-modal-delete"]').click(function(e){
	$("#modalDelete").modal('show');
	const dID = Number(e.currentTarget.getAttribute('data-value'));
	$('#btn-delete').data('user-id', dID);
});

$('#btn-delete').click(function(id) {
	const uID = $(this).data('user-id');
	let users = getUserStorage();
	const _user = getUserById(uID);
	if (_user === undefined) {
		alert('User Not Found !!!');
		return;
	}
	for (var i = 0; i < users.length; i++){
		if (users[i].id === _user.id){
			users.splice(i,1);
		}
	}
	updateUserStorage(users);
	loadUser(users);
	$("#modalDelete").modal('hide');
})


//Edit user
function editUser(id){
	const users = getUserStorage();
	const _user = getUserById(id);
	if (_user === undefined) {
		alert('User Not Found !!!');
		return;
	}
	$('#editid').val(_user.id).attr('disabled', true);
	$('#editname').val(_user.name);
	$('#editage').val(_user.age);
	$('#editaddress').val(_user.address);
	$('#btn-edit').data('user-id', id);
}

$('#btn-edit').click(function(e) {
	const uID = $(this).data('user-id'); //
	let users = getUserStorage();
	const _user = getUserById(uID);
	if (_user === undefined) {
		alert('User Not Found !!!');
		return;
	}
	_user.name = $('#editname').val();
	_user.age = $('#editage').val();
	_user.address = $('#editaddress').val();
	users = users.map(u => {
		return Number(u.id) === Number(uID) ? _user : u //
	})
	updateUserStorage(users);
	loadUser(users);
	$("#modalUpdateUser").modal('hide');
});