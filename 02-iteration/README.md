## Javascript Array 객체 내장함수인 map 함수

## map() 메소드는 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 프로세싱 하여 그 결과로 새로운 배열을 생성

- arr.map(callback, [thisArg])

* parameter

callback 새로운 배열의 요소를 생성하는 함수
    - currentValue : 현재 처리되고 있는 요소
    - index : 현재 처리되고 있는 요소의 index 값
    - array : 메소드가 불려진 배열
thisArg (선택항목) callback 함수 내부에서 사용할 this 값을 설정