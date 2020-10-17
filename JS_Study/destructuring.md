# 비구조화 할당

```javascript
var candyMachine = {
  status: {
    name: 'node',
    count: 5
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};

console.log(candyMachine.status);
console.log(candyMachine.getCandy());
```

위와 같이 object의 값을 가져오기 위해서는 `.연산자`를 이용해서 가져오게 될 것이다.

<br>

```javascript
var candyMachine = {
  status: {
    name: 'node',
    count: 5
  },
  getCandy: function() {
    return 5;
  }
};

const {status, getCandy} = candyMachine;

console.log(status);
console.log(getCandy());
```

하지만 위와 같이 `비구조화 할당`이라는 것을 이용하면 객체의 값을 쉽게 빼낼 수 있다.

<br>

## 배열에서의 비구조화 할당

```javascript
var array = ["Gyunny", "Spring", "NodeJS"];

var node = array[0];
var obj = array[1];
```

보통 위와 같이 배열을 사용하여 새로운 변수에다 값을 할당해서 사용해본 적이 있을 것이다. 하지만 ES2015에서는 새로운 문법이 나와서 좀 더 편리한 기능이 생겼다.

<br>

```javascript
var array = ["Gyunny", "Spring", "NodeJS"];

const [node, obj, bool] = array;
// const [node, obj, , bool] = array;  // , , 로 배열의 원소 하나를 건너뛸 수도 있다. 

console.log(node);  // Gyunny
console.log(obj);   // Spring
console.log(bool);  // NodeJS
```

위와 같이 훨씬 간편하게 사용하는 방법이 있으니 잘 익혀두자.





