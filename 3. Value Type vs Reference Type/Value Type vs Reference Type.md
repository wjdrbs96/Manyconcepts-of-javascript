###  값 타입(Value Type)과 참조 타입(Refecrence Type)

자바스크립트에서 값으로 전달되는 5가지 데이터 타입이 존재한다. `Boolean`, `null`, `undefined`, `String`, `Number`이고, 이것을 `Primitive types` 라고 부른다. <br><br>

또한 자바스크립트에는 참조로 전달되는 3가지 데이터 타입이 존재한다. `Array`, `Function`, `Object`이다. 이러한 것들은 기술적으로 Object라고 부르기 때문에 집합적으로 Object라고 부른다.

<br>

### Primitives

```javascript
var x = 10;
var y = 'abc;
var z = null;
```

원시타입은 변수들이 할당된 메모리에 `값` 자체가 메모리에 저장된다. 

```javascript
var x = 10;
var y = 'abc';

var a = x;
var b = y;

console.log(x, y, a, b);  // 10, 'abc', 10, 'abc'
```

위와 같이 `=`을 이용하여 다른 변수에 할당하면 값을 새 변수에 복사하여 할당하게 된다. 
```javascript
var x = 10;
var y = 'abc';

var a = x;
var b = y;

a = 5;
b = 'def';

console.log(x, y, a, b); // 10, 'abc', 5, 'def'
```

위와같이 a, b의 변수의 값을 바꾼다고 해서 x, y의 값이 바뀌지 않는다. 값만 복사하여 할당한 것이기 때문에 서로 관계가 없는 변수이다. 


### Objects

원시타입이 아닌 Object형은 해당 값이 아닌 값에 대한 참조가 제공된다. 참조란 메모리에 있는 객체의 위치를 가리킨다. 만약 우리가 `arr = []`의 코드를 입력했을 때, 메모리의 배열의 공간이 생기게 된다. 

```javascript
var arr = [];
arr.push(1);
```

`첫번 째` 줄을 메모리로 나타내보면 아래와 같다.

|Variables|Values|Addresses|Objects|
|------|---|---|----|
|arr|<#001>|#001|[]|


`두번 째`줄을 메모리로 나타내보면 아래와 같다.

|Variables|Values|Addresses|Objects|
|------|---|---|----|
|arr|<#001>|#001|[1]|

여기서 변수 `arr`에 포함되어 있는 주소와 값은 정적이라는 것을 기억하자. 만약 우리가 arr을 사용하여 값을 푸시하는 일을 할 때, javascript 엔진은 메모리에 있는 arr의 위치에 가서 저장된 정보와 함께 작업을 진행하게 된다.

<br>

### Assigning by Reference

참조 유형의 객체가 `=`를 사용하여 다른 변수에 복사될 때, 해당 값의 메모리에 저장되어 있는 주소가 복사되어 저장된다.

```javascript
var reference = [1];
var refCopy = reference;
```

따라서 위의 코드를 표현하면 아래와 같다.

|Variables|Values|Addresses|Objects|
|------|---|---|----|
|reference|<#001>|#001|[1]|
|refCopy|<#001>|  |  |

`reference`와 `refCopy` 모두 동일한 주소를 참조하고 있다. 이것의 의미는 만약 `reference`를 변경하면 `refCopy`도 바뀌게 된다는 뜻이다.

```javascript
reference.push(2);
console.log(reference, refCopy);   // [1, 2], [1, 2]
```

|Variables|Values|Addresses|Objects|
|------|---|---|----|
|reference|<#001>|#001|[1, 2]|
|refCopy|<#001>|  |  |

`2`를 push하면 위와 같이 메모리에 저장이 될 것이다. 따라서 `reference`와 `refCopy`는 같은 곳을 참조하고 있는 것이다.

<br>

### Reassigning a Reference

```javascript
var obj = {first: 'reference'};
```

이러한 코드를 실행하면 아래와 같이 메모리에 저장된다.

|Variables|Values|Addresses|Objects|
|------|---|---|----|
|obj|<#234>|#234|{first: 'reference'}|

한줄을 더 추가해보자.

```javascript
var obj = {first: 'reference'};
obj = {second: 'ref2'};
```

두번 째줄의 코드로 `obj`에 저장되어 있던 주소가 바꼈다. 하지만 처음에 저장되어 있던 객체 주소는 여전히 메모리에 남아있다.

|Variables|Values|Addresses|Objects|
|------|---|---|----|
|obj|<#234>|#234|{first: 'reference'}|
|   |   |#678|{second: 'ref2'}|

`#234`에서 알 수 있듯이 참조 값이 더이상 참조할 수 없을 때 자바스크립트 엔진은 `Garbage collection`을 수행한다. 이것은 프로그래머가 `obj`에 대한 참조를 잃어버렸고, 다시 참조할 수 없기 때문에 엔진이 안전하게 메모리에서 삭제할 수 있다.  

<br>

### == and ===

만약 참조변수에 연산자 `==`, `===`을 사용한다면 참조 값을 비교한다. 따라서 동일한 항목에 대한 동일한 참조값을 가지고 있다면 `true`를 반환한다.

```javascript
var arrRef = ['Hi'];
var arrRef2 = arrRef;

console.log(arrRef === arrRef2); // true
```

만약 두개의 내용은 같지만 다른 참조의 객체라면 어떨까?

```javascript
var arr1 = ['Hi'];
var arr2 = ['Hi'];

console.log(arr1 === arr2);  // false
```

이와 같이 들어있는 내용이 같더라도 참조값이 다르기 때문에 false를 반환하는 것을 알 수 있다.

<br>

### Passing Parameters through Functions

우리가 함수를 통해서 파라미터를 넘긴다면, 값이 복사되어 파라미터로 넘어가게 된다. `=`을 사용한 것과 동일하다.

```javascript
var hundred = 100;
var two = 2;

function multiply(x, y) {
  return x * y;
}

var twoHundred = multiply(hundred, two);
```

위의 코드를 정리하자면, `multiply` 함수를 호출하면 `hundred`에 들어있는 `100`을 복사하여 `x`에 전달한다. (`=`을 사용하는 것과 같다.)


|Variables|Values|Addresses|Objects|
|------|---|---|----|
|hundred|100|#333|function(x, y)...|
| two | 2 |#678|  |
| multiply | <#333> |  |  |
| x | 100 | | | 
| y | 2 |  |  | 

따라서 위의 코드 실행중에 저장되는 메모리를 확인해보면 위와 같다. 따라서 함수 내에 정의 된 변수들의 스코프는 함수 외부에 전혀 영향을 주지 않는다. 그리고 함수가 종료되면 함수에서 메모리에 등록되었던 것들이 자동으로 `Garbage collection`에 의해 처리된다. <br><br>

그러나 함수의 파라미터로 원시타입이 아닌 참조형을 받는다면 함수 외부에 영향을 줄 수 있다. 따라서 외부에서도 값을 변경할 수 있기 때문에 코드가 복잡해지고 값이 변경되는 것을 추적하지 못한다면 원하지 않는 결과를 얻을 수도 있다.<br>
따라서 많은 `Array.map`과 `Array.filter`를 포함한 많은 Array 함수들은 배열 참조를 가져와 내부적으로 배열을 복사하여 원본이 아닌 복사본으로 작업한다. 이렇게 하면 원본에 손대지 않고, 외부 범위는 영향을 받지 않으며, 새로운 `Array`에 대한 참조만 받게 된다.

```javascript
function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

var alex = {
  name: 'Alex',
  age: 30
};

var changedAlex = changeAgeImpure(alex);

console.log(alex);  // {name: 'Alex', age: 25}
console.log(changedAlex); // {name: 'Alex', age: 25}
```

위의 코드를 보면 `changeAgeImpure()`함수에서 `age`의 값을 바꾼 결과가 원본의 결과에도 영향을 준 것을 확인할 수 있다. 이유는 파라미터로 넘겨준 `alex`는 원본의 주소값을 넘겨준 것이기 때문이다.
따라서 `alex`와 `person`은 정확히 같은 주소값을 갖고 있다. 

<br>


```javascript
function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = changeAgePure(alex);
console.log(alex); // { name: 'Alex', age: 30 }
console.log(alexChanged); // { name: 'Alex', age: 25 }
```

여기서 위와 같이 `alex`를 파라미터로 넘겼지만, `changeAgePure()`함수에서 `JSON.stringify`를 통해서 문자열로 변환한 다음, `JSON.parse`를 사용하여 다시 객체로 변환하여 반환된 값을 새로운 변수에 저장한다. 따라서 `chageAgePure()`함수에서 `age`의 값을 변경하여도 원본인 `Alex`의 영향을 주지 않게 된다. 그리고 반환될 `newPersonObj`는 새로운 변수에 저장되어야 한다. 그렇지 않으면 함수가 종료되었기 때문에 `Garbage collection`에 의해 처리된다.










