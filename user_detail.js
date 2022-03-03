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
//

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