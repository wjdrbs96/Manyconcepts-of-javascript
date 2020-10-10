# 화살표 함수의 this

`일반 함수`는 선언할 때 `this`에 바인딩할 객체가 `정적`으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 `this`에 바인딩할 객체가 `동적`으로 결정된다.

<br>

`화살표 함수`는 함수를 선언할 때 `this`에 바인딩할 객체가 `정적`으로 결정된다. `동적`으로 결정되는 `일반 함수`와는 달리 `화살표 함수의 this는 언제나 상위 스코프의 this`를 가리킨다. 이것을 `Lexical this`라고 부른다.


<br>

### 일단 어떤 차이가 있는지 예제를 먼저 봐보자.

```javascript
const animal = {
  anmalType: 'puppy',
  animalName: '귀요미',
  animalFriends: ['쿠키', '세션', 'JWT'],
  // 화살표 함수에서는 `${this.animalName}` => undefined 
  bark: () => {
    console.log(`${animal.animalName}: 멍멍`);
  },
  
  // 화살표 함수를 쓰면 forEach에서 Error 
  thisFriends: function() {
    this.animalFriends.forEach(element => {
      console.log(`${this.animalName}의 친구: ${element}`);
    });
  }
}

console.log(animal);
animal.bark();
animal.thisFriends();
```

### 결과

```
{
  anmalType: 'puppy',
  animalName: '귀요미',
  animalFriends: [ '쿠키', '세션', 'JWT' ],
  bark: [Function: bark],
  thisFriends: [Function: thisFriends]
}
귀요미: 멍멍
귀요미의 친구: 쿠키
귀요미의 친구: 세션
귀요미의 친구: JWT
```

위의 animal 객체안에 bar 속성에 `화살표 함수`와 같이 `this`를 사용하면 `undefined`가 나온다. 그러나 `function`과 
`this`를 같이 사용하면 값이 제대로 나온다.

<br>

### 이유가 무엇일까??

`화살표 함수`의 내부의 `this`는 메소드를 소유한 객체(메소드를 호출한 객체)를 가르키지 않고 상위 컨택스트인 전역 객체 window를 가리킨다. 왜냐하면 위에서 말한 것처럼 `화살표 함수는 정적으로 값을 할당`하고 `일반 함수는 동적으로 값을 할당`한다고 하였다. 따라서 정적으로 값을 할당할 때 this를 읽을 때 window를 가리키는 것 같다. `따라서 `undefined`가 결과로 나오게 되는 것이다. 

<br>

그래서 `화살표 함수`대신 ES6의 축약 메소드 표현을 사용하는 것이 좋다.

```javascript
const animal = {
  anmalType: 'puppy',
  animalName: '귀요미',
  animalFriends: ['쿠키', '세션', 'JWT'],
  
  bark() {
    console.log(`${animal.animalName}: 멍멍`);
  }
}
```

<br>

### thisFriends에서도 같다.

```javascript
const animal = {
  anmalType: 'puppy',
  animalName: '귀요미',
  animalFriends: ['쿠키', '세션', 'JWT'],

  thisFriends: () => {
    // this 에러 
    this.animalFriends.forEach(element => {
      console.log(`${this.animalName}의 친구: ${element}`);
    });
  }
}
```

위에서도 `this.animalFriends`으로 `this`를 사용하면 `전역 객체 window`를 가리키게 된다.