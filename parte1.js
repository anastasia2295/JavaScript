let n = 10
number:
for( let i = 2; i<=n; i++){
for (let a=2; a<i; a++){
if (i%a ==0 )continue number
}
alert(i)
}



let number;
do {
     number = prompt("Введите пожалуйста число больше 100", 0);
} while(number <=100 && number);






for (let i=2; i<=10; i++){
    if (i%2==0)
    alert(i)
}

for (let i=2; i<=10; i++){
    if (i%2==0) continue
    alert(i)
}

let i = 0
while(i<3){
    alert("number" + i)
    i++
}






//let userName = prompt("Как тебя зовут?");
//alert(userName);

//alert (Boolean(1)) //true
//alert (Boolean()) // false
//alert (Boolean("")) //false

//alert (number(" 123 "))
//alert (number(true))
//alert (number(false))


//let age = prompt("Возраст?" )

//let message = (age<3) ? ("Здравствуй малыш"):
//(age<18) ? "Привет":
//(age<100) ? "Здравствуйте":
//"Какой необычный возраст";

//alert(message)



let nameOfTheCompany = prompt("Какое официальное назване Джава скрипт?");
if (nameOfTheCompany == "ECMAScript"){
    alert("Верно!")
} else {
   alert("Не знаете? ECMAScript") 
}

let userNumber = prompt("Введите число");
if(userNumber>0){
    alert("1, число больше 0")
}else if(userNumber<0){
    alert("-1, число меньше 0")
}else{
   alert("0") 
}

let result
if(a+b<4){
    result = "Мало"
}else {
    result("Много")
}

let result2
result = (a+b<4) ? 
     "Мало" : "Много"



let message
if(login== "Сотрудник"){
    message = "Привет"
}else if (login == "Директор"){
    message = "Привет"
}else if(login=""){
    message="Нет логина"
}else {
    message=""
}


let message2 = (login == "Сотрудник") ? "Привет":
(login == "Директор") ? "Привет":
(login="") ? "Нет логина":
"";
