//מגישות:
//קארין ואנונו 
// קורל צלח 
//כיתת תוכנה 50.5

//1
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
console.log (bio.length); //אורך המחרוזת

//2
const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
const charAtIndex4 = str.charAt(4);
console.log(` char #4 is: "${charAtIndex4}"`); //הצגת התו הרביעי של המחרוזת 

//3
const firstChar = str.charAt(0);
console.log(`first char is: "${firstChar}"`); // הצגת התו הראשון של המחרוזת

const secondToLastIndex = str.length - 2;
const secondToLastChar = str.charAt(secondToLastIndex);
console.log(`The penultimate character is: "${secondToLastChar}"`); //הצגת התו לפני אחרון

//4
const TheString = `abcde`;
let reversedString = '';
for (let i = TheString.length - 1; i >= 0; i--) {
  reversedString += TheString[i];
}
console.log(reversedString); //החזרת המחרוזת הפוך

//5
const string= `js`;
console.log(string.toUpperCase()); //מחרוזת מאותיות קטנות לגדולות

//6
const str1= 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'.includes(`str`)
console.log(str1); //בודק אם STR מופיע במחרוזת

//7
let StringNumber = `1-2-3-4-5`;
StringNumber = StringNumber.replaceAll('-', '.');
console.log(StringNumber); // מחליף את כל התווים "-" לנקודות

//8
let StringNumber1 = `1-2-3-4-5`;
const NewString = StringNumber1.replaceAll (`-`, `.`);
console.log(NewString); // מחליף את כל ה "-" בנקודה בעזאת פקודה אחרת 

//9
const str2=`sdfwe`;
console.log (str2.substring(4,2)); // fw 
// מה הפלט

//10
const str3= "I'm learning javascript!";
//אופציה ראשונה 
console.log(str3.slice(3,12)); //slice
//אופציה שניה 
console.log(str3.substring(3,12)); //substring
//אופציה שלישית
console.log(str3.substr(3,10)); //substr

//11
const str4= 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
console.log(str4.indexOf('http://')); //0
//אם המחרוזת לא נמצאת השיטה תחזיר -1 אם כן תחזיר 0

//12
const str5= 'https://www.notion.html'
console.log(str4.indexOf(`.html`)); //-1

//13
const str6=`ab cd cd cd ef`;
console.log(str6.lastIndexOf(`cd`));//9
console.log(str6.lastIndexOf(`cd` , 8));//6
// מה הפלט

//14
const str7=`abcde`;
console.log(str7.startsWith(`abc`)); //true
console.log(str7.startsWith(`xxx`));//false
console.log(str7.startsWith(`bc`, 1));//true
//מה הפלט

//15
console.log(str7.startsWith(`cde`));//false
console.log(str7.startsWith(`xxx`));//false
console.log(str7.startsWith(`bc`, 3));//false
//מה הפלט

//16
const str8= `ab-cd-ef`;
console.log(str8.split(`-`)); // 3 ', 'b', '-', 'c', 'd', '-', 'e', 'f']
console.log(str8.split(`-`, 2)); // (2) ['ab', 'cd']
console.log(str8.split(``));// (8) ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
console.log(str8.split(``, 8));// (8) ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']

let str9=`12345`;
console.log(str9.split(``));// (5) ['1', '2', '3', '4', '5']

//end

