# `null` vs `undefined`

`null`과 `undefined`는 JavaScript에서 둘 다 `값이 없음`을 나타낸다. 

<br>

### 1. undefined

- undefined -> 변수를 선언만 하고 값을 할당하지 않음.(즉, 자료형이 결정되지 않은 상태)
- undefined는 `데이터 타입`이자, `값`이다. 


<br>

### 2. null

- null -> 변수를 선언하고, `null`이라는 빈 값을 할당한 경우이다.
- `null` 역시 `데이터 타입`이며, `값`이다. 


<br>

### 정리

```
null 은 값은 값이지만 값으로써 의미없는 특별한 값이 등록되어 있는 것이고, 
undefined 는 등록이 되어있지 않기 때문에 초기화도 정의되지도 않은 것이다. 
```

<br>

### Example

```javascript
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
```

```javascript
null == undefined // true
false == null // false
false == undefined // false
```

```javascript
null === undefined // false
false === null // false
false === undefined // false
```

