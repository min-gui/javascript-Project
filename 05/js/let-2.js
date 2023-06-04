function calcSum(n) {
  var sum = 0;  // 전역 변수
  var sum = 1;
  for(let i = 1; i < n + 1; i++) {
    sum += i;
  }  
  console.log(sum);
}

calcSum(10);
//console.log(sum);  // 전역 변수 사용