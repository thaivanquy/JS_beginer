
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