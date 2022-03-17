
const users = [
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

const userLocal = JSON.parse(localStorage.getItem('users'));

if (localStorage.getItem('users') === null){
	localStorage.setItem('users', JSON.stringify(users));
	loadUser(users);
	setLastUserId();
} else {
	loadUser(userLocal);
	setLastUserIdLocal();
}

//Load user
function loadUser(arrUser) {
	let userEle = '';
	arrUser.forEach(element => {
		userEle += `
      <tr>
        <td>${element['id']}</td>
        <td ><a href="./user_detail.html?user_id=${element['id']}" target="_bank"> ${element['name']} </a></td>
        <td>${element['age']}</td>
        <td>${element['address']}</td>
		<td>
		  	<button type="button" 
			  	class="btn btn-warning"
		  		data-bs-toggle="modal" 
				data-bs-target="#modalUpdateUser"
		  		data-bs-whatever="@mdo" 
				onclick="editUser(${element['id']})">
					Sửa
			</button>
		</td>
		<td>
		  	<button type="button" 
			  	class="btn btn-danger" 
				data-bs-toggle="modal" 
				data-bs-target="#modalDelete"
		  		data-bs-whatever="@mdo"  
		  		onclick="deleteUser(${element['id']})">
				  	Xóa
			</button>
		</td>	
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


// Update storage
function updateUserStorage(users) {
	localStorage.setItem('users', JSON.stringify(users));
}
// Get storage
function getUserStorage() {
	return JSON.parse(localStorage.getItem('users'));
}

// Get User by id
function getUserById(uID) {
	const users = getUserStorage();
	return users.find(u => Number(u.id) === Number(uID)); //
}

// set last user id
function setLastUserId() {
	const lastUserId = users[users.length - 1].id + 1;
	$("#id").val(lastUserId);
}

function setLastUserIdLocal() {
	const lastUserId = userLocal[userLocal.length - 1].id + 1;
	$("#id").val(lastUserId);
}

// Reset value
function resetForm() {
	setLastUserId();
	$("#name").val('');
	$("#age").val('');
	$("#address").val('');
}

// Add user
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

//Modal delete
// $('[data-action="btn-modal-delete"]').click(function(e){
// 	$("#modalDelete").modal('show');
// 	const dID = Number(e.currentTarget.getAttribute('data-value'));
// 	$('#btn-delete').data('user-id', dID);
// });

function deleteUser(id){
	const users = getUserStorage();
	const _user = getUserById(id);
	if (_user === undefined) {
		alert('User Not Found !!!');
		return;
	}
	$('#btn-delete').data('user-id', id);
}


//Delete user
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


//Modal edit
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

//Edit user
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