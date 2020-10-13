# 배열 (Array)


### `map()`란?

`map()`은 반복문을 돌면 배열 안의 요소들을 1대1로 짝지어 주는 역할이다. 한마디로 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열이다. 

<br>

### 예를들어 보자.

```javascript
const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
  console.log(v);
  return v;
});

console.log(oneTwoThree);   // [1, 2, 3]
console.log(result);        // [1, 2, 3]
console.log(oneTwoThree === result);  // false
```

반복문으로 배열의 요소들을 순회하면서 어떻게 짝지을지를 `callback`함수를 통해서 정한다. 그리고 알아둘 점은 map을 실행하는 배열과 결과로 나오는 배열이 다른 객체라는 점이다. 

<br>

```javascript
var arr = ['foo', 'hello', 'diamond', 'A'];
var arr2 = arr.map((v) => v.length);
console.log(arr2);  // [3, 5, 7, 1]
```

위와 같이 `callback`에 `v.length`를 적어주면 `arr`배열의 원소와 매핑이 되어 새로운 arr배열의 원소 길이가 만들어진다.  

<br>

### `reduce()`란?

사용법은 다음과 같다. `배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초기값)`

```javascript
const numberList = [1, 2, 3];

const initValue = 10;

const toalResult = numberList.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0)

console.log(toalResult);
```

```
0 1 0
1 2 1
3 3 2
6
```

한마디로 `cur`값에는 배열의 원소들이 하나씩 들어가고, `acc`에는 초기값 부터 시작해서 배열의 원소들이 더해진 값들이 계속 누적된다. `초기값을 적어주지 않으면 자동으로 배열의 0번 인덱스가 초기값이 된다.`

<br>

## Example

```javascript
const numberList = [1, 2, 3];

const result = numberList.reduce((acc, cur) => {
  acc.push(cur % 2 ? '홀수' : '짝수');
  return acc;
}, []);

console.log(result); // [ '홀수', '짝수', '홀수' ]
```

초깃값을 배열로 만들고, 배열에 값들을 push하면 map과 같아진다. 이를 응용하여 조건부로 push를 하면 filter와 같아진다. 다음은 홀수만 필터링하는 코드이다.


<br>

```javascript
const numberList = [1, 2, 3];

const result = numberList.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);

console.log(result); // [ 1, 3 ]
```

```
반복되는 모든 것에는 reduce를 쓸 수 있다는 것을 기억하면 된다.

map과 reduce 외에도, 배열의 메서드인 sort, filter, every, some, find, findIndex, includes 정도는 알아두면 좋다. 그리고 reduce만 있어도 다른 메서드들을 다 구현할 수 있다.
```