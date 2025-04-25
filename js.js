//True or False
//task#1
if("0"){
  alert('Hello');
}

//there is alert! the string is not "empty"

//task#2
let fName=prompt("What is the formal name of JavaScript?");
if(fName == 'ECMAScript'){
  alert('Correct!');
}else{
  alert('Do you not know? ECMAScript!');
}

//task#3
let score = 75;
let grade = (score >= 90)? "A":
            (score >= 80)? "B":
            (score >= 70)? "C":
            (score >= 60)? "D": "F";

console.log("הציון הוא:", grade);

//task#4
let num=Number(prompt('Enter number:'));
if(num > 0){
  alert(1);
}else if(num < 0){
  alert(-1);
}else if(num === 0){
  alert(0);
}else{
  alert('it is not a number');
}

//task#5
let result;
let a=Number(prompt('Enter number to a:'));
let b=Number(prompt('Enter number to b:'));
result = (a + b < 4)? 'Not enough': 'A lot';
console.log(result);

//task#6
let message;
let login=prompt('what is your role?');
let massage = (login == 'Employee')? 'Hello':
            (login == 'Director')? 'Hello':
            (login == '')? 'No login': '';
console.log(massage);


//task#7
console.log(false || 'sdf'); //sdf
console.log(false && ''); //false
console.log(true || ''); //true
console.log(true && ''); //''
console.log(undefined || null); //null
console.log(undefined || 0 || null); //null
console.log(undefined && 0 && null); //undefined
console.log(1 || 0); //1
console.log(null || 1); //1
console.log(null || 0|| 1); //1

//Loops
//task#1
let i=1;
let sum=0;
while(i!=101){
  sum+=i;
  i++;
}
console.log(sum);

//task#2
let num1;
do{
  num1=prompt("Enter a number:");
}while(num1<=0 || isNaN(num1));

//task#3
for(let j=1;j<=10; j++){
  console.log('7 x '+j+ ' = '+ (7*j))
}

//task#4
const secret =7;
let g=Number(prompt("Guess a number between 1-10:"));
for(let i=0; i<5; i++){
  if(g===secret){
    alert("you right!");
    break;
  }else{
    g=Number(prompt("wrong, Try again:"));
  }
}

//task#5
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}

//task#6
let i2 = 3;
while (i2) {
  alert( i2-- ); //ערך אחרון שמדפיס הוא 1 כי 0 הוא שקר ןלא נכנס ללולאה
}

//task#7
let i3 = 0;
while (++i3 <5) console.log(i3); //1,2,3,4

let i4 = 0;
while (i4++ <5) console.log(i4); //1,2,3,4,5

//task#8
for (let i5 = 0; i5 < 5; i5++) console.log(i5); //0,1,2,3,4
for (let i6 = 0; i6 < 5; ++i6) console.log(i6); //0,1,2,3,4

//task#9
for (let i7 = 2; i7 <= 10; i7++) {
  if (i7 % 2 == 1) continue;
  console.log(i7);
}

//task#10
let i8 = 0;
while(i8<3){
  console.log( `number ${i8}!` );
  i8++
}
