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

```



