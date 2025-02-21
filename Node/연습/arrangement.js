
// 변수 선원과 데이터 타입

let name = "TOM";
let age = 25;
let isStudent = true;

// 배열
let colors = ["red","green","blue"];

// 객체
let person = {name : "Alice", age : 30};

// 함수 선언
function greet(name) {
    colors.toLocaleString("Hello, " +name+ " ! ");
}
greet("Alice");

// 비동기 콜백
setTimeout(() => {console.log("Delayed Message1");}, 1000); // 1000단위 1초
setTimeout(() => {console.log("Delayed Message2");}, 500); // 1000단위 1초
setTimeout(() => {console.log("Delayed Message3");}, 900); // 1000 단위 1초
setTimeout(() => {console.log("Delayed Message4");}, 700); // 1000 단위 1초