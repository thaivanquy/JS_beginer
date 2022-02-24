
	//*Bien va khai bao bien
		var fullName; // khai bao bien
		fullName = 'Thai Quy'; // Gan gia tri cho bien
	//hoac viet ngan gon
		var fullName = 'Thai Quy';


	//*Ham built-in 
	//1. Alert (Bat len cua so hop thoai)
		var fullName = "Thai Quy";
		alert(fullName);
	//2. Confirm (Bat len cua so hop thoai co them 2 nut Ok va Cancel)
		if (confirm ('Ban co muon tiep tuc?') ) {
			alert('true');
		} else {
			alert('false');
		}
	//3. Prompt (Tuong tu confirm nhung co them o de nhap)
		if (prompt('Vui long nhap so tuoi cua ban') > 18) {
			alert('Ban da tot nghiep lop 12');
		} else {
			alert('Ban chua tot nghiep lop 12!');
		}
	//4.Console
		//- console.log (hien thi ra loi nhan tren tab console cua chorme)
			console.log('Day la loi nhan');
		//- console.warn (hien thi ra loi nhan canh bao)
			console.warn('Day la canh bao')
		//- console.error (hien thi ra loi nhan loi)
			console.error('Day la loi!'); 
	//5. setTimeout (Thuc thi 1 ham code sau 1 thoi gian cho truoc nhung chi thuc thi 1 lan)
		setTimeout(function() {
			alert('Day la thong bao');
		}, 1000)
	//6. setInterval (Tuong tu nhu setTimeout nhung lap lai nhieu lan)
		setInterval(function() {
			alert('Day la thong bao');
		}, 1000)
	//*Toan tu, kieu di lieu
	//1. Toan tu so hoc
	/*
		+  Cong
		-  Tru
		*  Nhan
		** Luy thua
		/  Chia
		%  Chia lay du
		++ Tang 1 gia tri
		-- Giam 1 gia tri
	*/
		var a = 1;
		var b = 2;
		var c = a + b;
		console.log(c);
	//2. Toan tu gan
	/*
		= 	`x = y`
		+=	`x = x + y`
		-=	`x = x - y`
		*=	`x = x * y`
		/=	`x = x / y`
		**= `x = x ** y`
	*/
		var a = 1;
		a += 2;
		console.log(a);
	//3. Toan tu chuoi
		var firstName = 'Thai';
		var lastName = 'Quy';
		console.log(firstName + ' ' + lastName);
	//4. Toan tu so sanh
	/*
		=== // 1 === 1 => true , 1 === '1' => false
		== `bang`
		!= `khac`
		>  `lon hon`
		< `nho hon`
		>= `lon hon hoac bang`
		<= `nho hon hoac bang`
	*/
		var a = 1;
		var b = 2;
		if (a == 1) {
			console.log('Dieu kien dung');
		} else {
			console.log('Dieu kien sai');
		}
	//5. Kieu du lieu boolean
		var a = 1;
		var b = 2;
		var testTrueFalse = a > b;
		console.log(testTrueFalse);
	//6. Dieu kien if - else 
		if (`bieu thuc dieu kien`) {
			//dieu kien dung
		} else {
			//dieu kien sai
		}
		function run(gender){
			var result 
			if (gender == 'male') {
				result = 'Nam';
			} else if (gender == 'female') {
				result = 'Nu';
			} else if (gender == 'other') {
				result = 'khac';
			}
			return result
		}
	//7. Toan tu logical
		//1. && - And (tat ca dieu kien dung moi dung)
			var a = 1;
			var b = 2;
			var c = 3;
			if (a > 0 && b > 0 && c > 0) {
				console.log('Dieu kien dung');
			}
		//2. || - or (chi can 1 thang dung)
			var a = 1;
			var b = 2;
			var c = 3;
			if (a < 0 || b < 0 || c > 0) {
				console.log('Dieu kien dung');
			}
		//3. ! - Not
			var a = 1;
			if (!(a < 0)) {
				console.log('Dieu kien dung');
			}
	//8. Kieu du lieu 
		//8.1 Du lieu nguyen thuy - Primitive Data
			//- Number 
			//- String
			//- Boolean 
			//- undefined
			//- null
			//- Symbol 
		//8.2 Du lieu phuc tap - Complex Data
			//- function
			//- object
	//9. Mang - array
		// Tao mang (dua duoc tat ca kieu du lieu vao mang)
			var languages = ['Javascript', 'PHP', 'Python'];
			console.log(languages);
		// Do dai mang
		var languages = ['Javascript', 'PHP', 'Python'];
		console.log(languages.length);
		// Lay phan tu theo index
		var languages = ['Javascript', 'PHP', 'Python'];
		console.log(languages[0]); //lay ra javascript
		// Cac phuong thuc trong array
			//1.To string
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.toString()); //array sang chuoi
			//2.Join
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.join(', '));// giong nhu toString nhung co the truyen 1 ki tu vao
			//3.Pop (xoa phan tu cuoi mang va tra ve phan tu da xoa)
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.pop());
				console.log(languages);
			//4.Push (them 1 hoac nhieu phan tu vao cuoi mang va tra ve do dai moi cua mang)
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.push('Ruby', 'Java'));
				console.log(languages);
			//5.Shift (xoa phan tu dau mang va tra ve phan tu da xoa)
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.shift());
				console.log(languages);
			//6.Unshift (them 1 hoac nhieu phan tu vao dau mang)
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.unshift('Ruby'));
				console.log(languages);
			//7.Splicing (xoa cat hoac chen 1 phan tu moi vao mang)
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.splice(1, 0, 'Java')); //tham so 1 vi tri phan tu muon xoa, tham so 2 so phan tu muon xoa, tham so thu 3 chen phan tu moi vao
				console.log(languages);
			//8.Concat (noi mang lai voi nhau)
				var languages = ['Javascript', 'PHP', 'Python'];
				var languages2 = ['Ruby', 'Java'];
				console.log(languages.concat(languages2));
			//9. Slicing (cat phan tu trong mang)
				var languages = ['Javascript', 'PHP', 'Python'];
				console.log(languages.slice(1, 2)); //tham so 1 vi tri muon cat, tham so 2 vi tri ngung viec cat

			//10. forEach
				var users = [
					{
						id : 1,
						name : 'Quy',
						age: 22,
						address: 'Bac lieu'
					},
					{
						id : 2,
						name : 'Khoa',
						age : 16,
						address: 'Ca mau'
					},
					{
						id : 3,
						name : 'Vu',
						age : 30,
						address : 'Soc trang'
					},
					{
						id : 4,
						name : 'Son',
						age: 17,
						address : 'Can tho'
					}
				];
				
				users.forEach(function(user) {
					console.log(user);
				})
			//11. filter
				var users = [
					{
						id : 1,
						name : 'Quy',
						age: 22,
						address: 'Bac lieu'
					},
					{
						id : 2,
						name : 'Khoa',
						age : 16,
						address: 'Ca mau'
					},
					{
						id : 3,
						name : 'Vu',
						age : 30,
						address : 'Soc trang'
					},
					{
						id : 4,
						name : 'Son',
						age: 17,
						address : 'Can tho'
					}
				];
				
				var user = users.filter(function(user) {
					return user.age >= 18;
				});
				
				console.log(user);

			//12.map
			var users = [
				{
					id : 1,
					name : 'Quy',
					age: 22,
					address: 'Bac lieu'
				},
				{
					id : 2,
					name : 'Khoa',
					age : 16,
					address: 'Ca mau'
				},
				{
					id : 3,
					name : 'Vu',
					age : 30,
					address : 'Soc trang'
				},
				{
					id : 4,
					name : 'Son',
					age: 17,
					address : 'Can tho'
				}
			];
			
			var newUser = users.map(function(user) {
				return {
					id: user.id,
					name: `Ten: ${user.name}`,
					age: `Tuoi: ${user.age}`,
					address: `Dia chi: ${user.address}` 
				};
			})
			
			console.log(newUser);
	//10. Object
			//Function -> Phuong thuc (method)
			//others -> thuoc tinh (property)
			var myInfo = {
				name: 'Thai Quy',
				age: 22,
				address: 'Bac Lieu'
			};
			myInfo.email = 'thaivanquy821@gmail.com'; //them key va value 
			delete myInfo.age; // xoa key va value
			console.log(myInfo);
			console.log(myInfo.name); //lay key ra
			// object constructor
			function User(firstName, lastName, age) {
				this.firstName = firstName; //this o day la User
				this.lastName = lastName;
				this.age = age;
			}
			var admin = new User('Khoa', 'Nguyen', 25);
			var member = new User('Thai', 'Quy', 22);
			member.address = 'Bac lieu'; // them thuoc tinh rieng le cho member
			console.log(admin);
			console.log(member);
	//11. Ham 
			//Khong thuc thi khi dinh nghia
			function showDialog() {
				alert('Hello World!')
			}
			//Se thuc thi khi duoc goi
			function showDialog() {
				alert('Hello World!')
			}
			showDialog();
			//Co the nhan tham so
			function showDialog(message, message2) {
				console.log(message)
				console.log(message2)
			}
			showDialog('Hello World!', 'test');
			//Co the tra ve 1 gia tri
			function cong(a, b) {
				return a + b;
			}
			var ketQua = cong(2, 8);
			console.log(ketQua);
	
