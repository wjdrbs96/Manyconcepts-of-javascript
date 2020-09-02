### == vs === vs typeof

```
JavaScript에는 다른 언어와는 달리 == 연산자 말고도 === 연산자가 존재한다. 둘의 차이가 무엇인지 정리해보자.
```

* '=='는 서로 다른 유형의 두 변수의 [값]을 비교하여 같다면 true, 다르면 false (느슨한 비교)
* '==='는 [값], [자료형]을 비교하여 모두 값으면 true 다르면 false (엄격한 비교) 

<br>

```javascript
console.log(0 == "0");  // true;
console.log(0 == []);  // true;
console.log("0" == []);  // false;
```

여기서 `0`과 `"0"`의 `==` 연산 결과는 `true`, `0`과 `[]`의 연산결과는 `true`이다. 삼단논법으로 추론할 경우 당연히 `"0" == []`의 결과는 `true`이겠지만, 결과는 `false`이다. 이러한 특징이 `==`연산자의 특징이다. 자바스크립트의 동등연산자에 대해서 더 알아보자.

<br>

### == 연산자

자바스크립트에서 `==`연산자는 느슨한 동등 비교를 한다.
`"0" == []`의 경우 `"0"`의 타입은 `String`이고 `[]`은 `object`이다. 

```javascript
console.log(typeof "0"); // string
console.log(typeof []); // object
```

두 데이터의 타입이 다르기 때문에 자바스크립트 엔진에서는 두 데이터가 서로 비교 가능하도록 <b>암시적 형변환</b>을 하게 된다.<br>

`string`의 우선순위가 `object`보다 높기 때문에 `object`인 `[]`를 `string`으로 변환한다. 

```javascript
let test = [];  // object
test = String(test); // String 형변환 
console.log(test); // ""
console.log(typeof test); // string
```

위의 코드를 보면 알 수 있듯이, `object`형인 `[]`이 `string`으로 변환되어 `test`변수의 값이 `""`으로 바뀌게 된다. 따라서 결과적으로 `"0" == ""`이 되기 때문이 `false`의 결과를 반환하는 것이다. 

```javascript
0 == [];
0 == [].valueOf();
0 == [].valueOf().toString();
0 == Number([].valueOf().toString());
0 == 0; // true
```

`object`형인 `[]`는 위의 과정을 통해서 숫자타입과 비교를 하게 된다. 따라서 최종적으로 `number`타입으로 변환이 되어 `0 == 0`이 되어 `true`가 반환된다. <br>

몇가지의 예제를 보면서 감을 익혀보자. 좀 더 자세히 알고 싶다면 [여기](https://corock.tistory.com/460?category=727443)를 참고하자.

```javascript
0 == "";  // true
0 == "0"; // true
1 == true // true
false == "0" // true
null == undefined // true
false == null // false
false == undefined // false
```

<br>

### === 연산자

`===`연산자는 <b>암시적 형변환</b>이 일어나지 않고 `값`과 `타입`까지 검사한다.<br>
위에서 보았던 예제를 `===`를 적용하여 다시 생각해보자.

```javascript
0 === "";  // false
0 === "0"; // false
1 === true // false
false === "0" // false
null === undefined // false
false === null // false
false === undefined // false
```

이번에는 `값`뿐만 아니라 `타입`까지 검사하기 때문에 모두 `false`가 반환이 된다.
여기서 한가지 살펴보아야할 점은 `null === undefined` 의 결과도 false가 나온다는 점이다.
이유는 아래와 같다 

```javascript
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
```
`null`의 타입은 object이고, `undefined`의 타입은 undefined가 나오는 것을 확인할 수 있다. 
따라서 일반적인 상황에서는 `==`보다는 `===`을 사용하는 것이 좋다.

<br>

### typeof

`typeof`는 피연산자의 타입을 반환해준다.

```javascript
typeof "string"; // "string"
typeof 1; // "number"
typeof true; // "boolean"
typeof null; // "object"
typeof undefined; // "undefined"
typeof []; // "object"
typeof {}; // "object"
typeof (() => {}); // "function"
typeof class {}; // "function"
typeof Symbol(); // "symbol"
typeof BigInt(1111); // "bigint"
```

`typeof`는 아래와 같은 자바스크립트의 내장 타입만 반환한다.

1. `string`
2. `number`
3. `boolean`
4. `obejct`
5. `function`
6. `symbol`
7. `bigint`

또한 선언되지 않은 변수를 피연산자로 갖고 있다면 `undefined`로 반환한다.

```javascript
typeof undeclaredVaribale; // "undefined"
```

`typeof`를 이용해 값의 타입 검사를 진행한 후 이후 로직을 진행할 수도 있다.

```javascript
if (typeof value == "string") {
    console.log("This value is string");
} else if (typeof value == "number") {
    console.log("This value is number");
} else if (typeof value == "boolean") {
    console.log("This value is boolean");
} 
```