var users = JSON.parse(localStorage.getItem('users'));
if (users == null){
	window.close();
	window.open('./page-user.html');
}


const params = new URLSearchParams(window.location.search);
var user_detailID = params.get("user_id");
document.getElementById('id').innerHTML = user_detailID;
let values = Object.values(users);
for (let value of values){
	const vId = value.id;
	if (vId == user_detailID){
		const vName = value.name;
		const vAge = value.age;
		const vAddress = value.address;
		document.getElementById('name').innerHTML = vName;
		document.getElementById('age').innerHTML = vAge;
		document.getElementById('address').innerHTML = vAddress;
	}
}