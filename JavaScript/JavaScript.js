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
