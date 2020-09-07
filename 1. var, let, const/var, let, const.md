# 1. 변수 특징

|  | 재 선언 | 재 할당 |
|------|---|---|
| var | O | O |
| let | X | O |
| const | X | X |

<br>

### 1) var

```javascript
var vv = 123;
console.log(vv);   // 123
var vv = 321;  // 재선언, 재할당 가능
console.log(vv);  // 321
```

<div>
변수를 한번 더 선언했음에도 불구하고 에러가 발생하지 않고 각자 다른 값이 출력된다.
유연하다 생각할 수도 있지만, 코드량이 많아진다면 어디에서 어떻게 사용 될지도 파악하기 힘들고 값이 바뀔 위험성이 존재한다.
<div>

<br><br>

```javascript
if (true) {
  var x = 3;
}
console.log(x);   // 3
```

또한 var는 `함수 스코프`를 가지기 때문에 `if문의 블록과 관계없이 변수에 접근할 수 있다`.
그래서 ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 `let`과 `const`이다.

<br>

### 2) let

```javascript
let ll = 123; 
console.log(ll);
let ll = 321;    // 변수 재선언 안됨 -> 에러 발생
console.log(ll);  // Uncaught SyntaxError: Identifier 'name' has already been declared

ll = 333;
console.log(ll);  // 333
```

`let은 변수에 재할당은 가능하지만, 재선언이 불가능하다`.

<br><br>

```javascript
if (true) {
  let x = 3;
}
console.log(x);// Uncaught ReferenceError : y is not defined
```

let은 `블록 스코프`를 가지므로 블록 밖에서는 변수에 접근할 수 없다. 블록 스코프를 사용함으로써 호이스팅 같은 문제도 해결되고 코드 관리도 수월해졌다.

<br>

### 3) const

```javascript
const ll = 123
console.log(name)    // bathingape

const ll = 321
console.log(name)   // Uncaught SyntaxError: Identifier 'name' has already been declared

name = 333
console.log(name)   // Uncaught TypeError: Assignment to constant variable.
```

`const는 변수 재선언, 변수 재할당 모두 불가능`하다.따라서 const로 선언한 변수는 상수라고 부르기도 한다. 

<br><br>

```javascript
if (true) {
  const x = 3;
}
console.log(x);   // Uncaught ReferenceError : y is not defined
```

`const`도 let과 마찬가지로 `블록 스코프`를 가지기 때문에 블록 밖에서는 변수에 접근할 수 없다.

<br><br>


### [Note] const와 let중에 어느 것을 써야 하나요? 

```
자바스크립트는 사용할 때 한번 초기화 했던 변수에 다른 값을 할당하는 경우는 의외로 적다. 따라서 변수 선언 시에는 기본적으로 const를 사용하고, 다른 값을 할당해야 하는 상황이 생겼을 때 let을 사용하면 된다.
```

<br>

### 호이스팅이란? 

`호이스팅(Hoisting)이란?`, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다. <br><br>

자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다. <br>

하지만, var 로 선언된 변수와는 달리 let 로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.


```javascript
console.log(ll); // undefined
var ll;

console.log(tt); // Error: Uncaught ReferenceError: bar is not defined
let tt;
```

이는 let 로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다. <br>

참고로, 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성되는데 var 으로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다.

<br>

```javascript
// 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.

console.log(ll);   // undefined

var ll;
console.log(ll);   // undefined

ll = 1;           // 할당문에서 할당 단계가 실행된다.
console.log(ll);  // 1
```

<br>

하지만 let로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

<br>

```javascript
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.

console.log(foo); // ReferenceError: foo is not defined

let foo;          // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1;          // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
```