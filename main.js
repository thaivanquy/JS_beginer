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

function loadUser(arrUser) {
	let userEle = '';
	arrUser.forEach(element => {
		userEle += `
      <tr id="u-${element['id']}" data-action="view-user-detail" data-value="${element['id']}">
          <td data-action="view-user">${element['id']}</td>
          <td>${element['name']}</td>
          <td>${element['age']}</td>
          <td>${element['address']}</td>
      </tr>`;
	});
	document.getElementById('user-list').innerHTML = userEle;
	const trs = document.querySelectorAll('tr[data-action="view-user-detail"]');
	for (const tr of trs) {
		tr.addEventListener('click', function(_e) {
			const uID = _e.currentTarget.getAttribute('data-value');
			newTab();
		})
	}
}
loadUser(users);

//newtab
function newTab(){
	var urlString = "http://127.0.0.1:5500/user_detail.html";
	window.open(urlString);
}


//search
var search_user = document.getElementById('searchbutton');
search_user.addEventListener('keyup', function (e) {
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


//view detail_user
