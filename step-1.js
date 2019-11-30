var result = console.log("게임을 시작할까요?"); // confirm("게임을 시작할까요?");/* eslint no-restricted-globals:0 */
result = true; // alert창을 띄울 시, 삭제될 영역
if (result) {
  console.log("게임을 시작합니다!"); // alert("게임을 시작합니다!")
  console.log("첫 번째 타자가 타석에 입장했습니다."); // alert("첫 번째 타자가 타석에 입장했습니다.")
} else {
  console.log("준비가 되면 시작하겠습니다.");
  // alert("준비가 되면 시작하겠습니다.");
}

// var list = ["스트라이크", "볼", "안타", "아웃"];
// var number = [];
// for (var i = 0; i < 4; i++) {
//   var select = Math.floor(Math.random() * list.length);
//   number[i] = list.splice(select, 1)[0];
// }

// function makeid(){
//     var text = "";
//     var possible = ["스트라이크","볼","안타","아웃"];

//     for( var i=0; i < 2; i++ )
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//         console.log(text);
//     return text;
// }
// makeid();

function baseBall() {
  var ALPHA = ["스트라이크 ", "볼 ", "안타 ", "아웃 "];
  var rN = "";
  for (var i = 0; i <= 3; i++) {
    var randTnum = Math.floor(Math.random() * ALPHA.length);
    rN += ALPHA[randTnum];
  }
  console.log(rN);
  return rN;
}

baseBall();