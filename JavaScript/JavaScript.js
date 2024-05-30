console.log("Hello! Welcome to JavaScript");
let a = 1, // khai bao bien
  b = 2,
  c = 3;
console.log("variables is :", "a= ", a, "b= ", b, "c= ", c);
let d = "I'm string "; // khai bao chuoi
console.log(d);
// ban chat cua kieu string trong js la cong tu trai sang phai
console.log(4 + 5 + "a"); //4+5+a= 9a
console.log("a" + 4 + 5); //a4+5= a45
let n = "i'm string "; // khai bao chuoi
let m = n.length; // gan m = chieu dai chuoi n
console.log(m); // show ra chieu dai chuoi n khi da gan m
console.log("Hello my name is JavaScript".toUpperCase()); //in hoa chuoi ki tu
// js ko phan biet so nguyen hay so thuc
//cac toan tu trong js (+,-,*./)
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
//co 2 kieu chuyen tu string sang number
let p = "5";
let o = Number(p);
console.log("o value:", o, "type : ", typeof o); //cach 1
let l = +p;
console.log(l); //cach 2
//cong noi chuoi va bien {template string}
//su dung ${} de dien ta chung chuoi
//su dung dau `` de dien ta 1 chuoi kys tu khong quan tam brn trong la su dung dau gi
console.log(`toi la phi nam nay toi ${22} tuoi toi sinh nam ${2003}`);
//Object in JS
//key:value
let obj = {
  name: "Nguyễn Hoàng phi",
  age: "22",
  address: "Cần Thơ",
};
//để lấy 1 đối tượng ta dùng Variables.object
console.log("What your name ?", `My name is`, obj.name);
console.log("How old are you?", `i'm ${obj.age} year old`);
console.log("where are you from ?", `i'm from`, obj.address);
//cách 2
console.log("What your name ?", `My name is`, obj["name"]);
console.log("How old are you?", `i'm ${obj["age"]} year old`);
console.log("where are you from ?", `i'm from`, obj["address"]);
//thay đổi giá trị trong object
let r = "name"; //gan giá trị r = name
obj[r] = "huy"; //truyền giá trị r vào obj và gán bằng 1 tên khác
console.log("What your name ?", `My name is`, obj.name); // xuất ra giá trị vừa gán
// thêm 1 cách thay đổi obj
let v = "name"; // gán giá trị name cho biến v
obj.name = "fee"; //gán fee vào name của obj
console.log("What your name ?", `My name is`, obj.name); // xuất ra giá trị vừa gán
//Array
let i = ["fee", "free", 80]; // array basic
console.log(i[0], i[2]); //xuất ra giá trị đầu tiên và giá trị cuối
//Array advance
let Family = [
  { name: "Nguyễn Hoàng Phi", age: 22 },
  { name: "Nguyễn Hoàng Long", age: 28 },
]; // mảng chứa các đối tượng bên trong
console.log(
  `tên của fee là ${Family[0].name} tuổi của Long là ${Family[1].age}`
); //xuất ra giá trị của item đầu tiên có giá trị là name và giá trị thứ 2 có giá trị tuổi
// sự khác nhau giữa == và ===
// là khi so sánh 2 giá trị thì nếu ss giữa 1 số và 1 chuỗi thì js nó cố gắng biến chuỗi thành number
//nên khi dung == thì sẽ cho ra giá trị vd:
// 5 == '5' input :true (điều này không thể xảy ra)
// nhưng khi dùng === thì sẽ cho ra là fail
//vd: 5===5 input : true
// 5 === "5" input fail
let w = 5;
let q = "5";
let s = 5;
console.log(w == q);
console.log(w === q);
console.log(w == s);
console.log(w === s);
// so sánh sự khác nhau giữa EMPTY,NULL,UNDEFINE
//empty : empty thường không phải là một từ khóa hay giá trị cụ thể trong JavaScript.
// Tuy nhiên, nó thường được sử dụng để mô tả một giá trị trống như một chuỗi trống "",
// một mảng trống [], hoặc một đối tượng trống {}.
// let ab=[]
// đây là mảng rỗng
//null cà một giá trị đặc biệt được sử dụng để biểu thị rằng một biến không có giá trị nào cả.
//  Nó thường được dùng để khởi tạo một biến mà sau này sẽ chứa một đối tượng.
//let ab = null
//undefine: ch định nghĩa
// let a=;
// for
let arr1 = ["fee", "free", "abc"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
// duyệt mảng và lấy ra từng phần tử trong mảng
// var và let thì var phạm vi rộng hơn let
// i++ vs ++i
//i++: gán giá trị rồi mới tăng
//++i : tăng r mới gán giá trị
// let i1 = 5;
// let j = i++; // j nhận giá trị của i trước khi tăng, tức là 5
// console.log(i1); // Output: 6 (i đã được tăng lên 1)
// console.log(j); // Output: 5 (j nhận giá trị cũ của i)
// let i2 = 5;
// let j2 = ++i; // j nhận giá trị của i sau khi tăng, tức là 6
// console.log(i2); // Output: 6 (i đã được tăng lên 1)
// console.log(j2); // Output: 6 (j nhận giá trị mới của i)
let arr3 = ["abc ", "def", "ghi", "lmk"]; //cho mảng arr3
for (let i = 0; i < arr3.length; i++) {
  // vòng lặp for cho i = 0 ,i< chiều dài của mảng , tăng lên 1 giá trọ của i
  console.log("Top ", i + 1, arr3[i]); // xuẩt ra giá trị của i duyệt từ mảng và xuất ra từng giá trị khi gán i +1
}
// if/else/ break/continue
let i1 = 0;
while (i1 < arr3.length) {
  if (arr3[i1] === "ghi") {
    console.log("found it :", arr3[i1]);
    break; // khi tìm đc ghi thì thoát
  }
  i1++;
}
// function
function Sum(a, b) {
  // day la ham cu phap la function ten ham la sum truyen vao 2 tham so a va b
  return a + b; // tra ve ket qua a+b
}
console.log("sum a+b = ", Sum(5, 5)); // in ra ket qua a+b khi ma gan gia tri 5 va 5 vao ham sum
// phuong thuc return la dau hieu de ham nhan biet de tra ve kq
// thoat ra 1 func thi dung keyword return
//Arrow function
let Sum1 = (a, b) => {
  return a + b;
};
console.log("sum a+b = ", Sum1(5, 5));
//arrow function cung nhu 1 function nhung cach viet khac nhau
// khoi tao nhu 1 bien bth loai bor tu khoa function
//them dau mui ten trc dau ngoac
// ham filter
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // cho 1 mang
let filter = arr6.filter((item) => {
  // tao 1 bien moi gan bien do bang mang . ham filter truyen vao filter 1 ham gan bang ite,
  // tra ve ham do bang item va loc item do <=5
  return item && item <= 5;
});
console.log(filter); // in ra 1 mang moi khi da loc

// vd2
let arr4 = [
  { name: "abc", age: 20 },
  { name: "cvb", age: 30 },
  { name: "fdda", age: 20 },
  { name: "ssd", age: 80 },
  { name: "abss", age: 70 },
  { name: "ssd", age: 30 },
];
let fil = arr4.filter((item) => {
  return item && item.age === 30;
});
console.log(fil);

// find
let find = arr6.find((Element) => Element > 6);
console.log(find);
// filter khac find
// filter loc ra het cac phan tu theo dieu kien
//find chi loc 1 phan tu gan nhat theo dieu kien
// map : ham nay dung de lap va tao ra 1 mang moi
let map = arr6.map((item) => {
  item = item * item;
  return item;
});
console.log(map);
// ss vong lap for va map
// for se ko tao ra vong lap moi
for (let i = 0; i < arr6.length; i++) {
  arr6[i] = i * i;
}
console.log(arr6);
// Reduce
//sort
arr6.sort();
console.log(arr6); //sap xep tu thap den cao

//lodash
