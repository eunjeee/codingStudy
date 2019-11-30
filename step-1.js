var result = console.log("게임을 시작할까요?"); // confirm("게임을 시작할까요?");/* eslint no-restricted-globals:0 */
result = true; // 삭제될 영역
if (result) {
  console.log("게임을 시작합니다!"); // alert("")
  console.log("첫 번째 타자가 타석에 입장했습니다."); // alert("")
} else {
  console.log("준비가 되면 시작하겠습니다.");
  // alert("저런~ 2018년에는 꼭 모두 이루세요!!");
}

// var list = ["스트라이크", "볼", "안타", "아웃"];
// var number = [];
// for (var i = 0; i < 4; i++) {
//   var select = Math.floor(Math.random() * list.length);
//   number[i] = list.splice(select, 1)[0];
// }

// function makeid(){
//     var text = "";
//     var possible = ["a","b","c","d"];

//     for( var i=0; i < 2; i++ )
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//         console.log(text);
//     return text;
// }
// makeid();

function baseBall() {
  var game = ["스트라이크", "볼", "안타", "아웃"];
  var rN = "";
  var gameCount = 0;

  for (var i = 0; i <= 0; i++) {
    var randTnum = Math.floor(Math.random() * game.length);
    rN += game[randTnum];
    gameCount = 0;
    // gameCount = game[1].length;
    // gameCount = game[2].length;
    // gameCount = game[3].length+1;
    gameCount++;
  }
  console.log(rN + "!");
  game[0] = "S";
  game[1] = "B";
  game[2] = "안타";
  game[3] = "O";
  console.log(gameCount);
  console.log(
    game[0].length,
    game[0],
    game[1].length,
    game[1],
    game[3].length,
    game[3]
  );
  console.log(game[2] + "는 ", +game[2].index, "번 나왔습니다.");
  console.log(game[0].name);
  return rN;
}

// for문이나 와일문으로 돌린다.
for (var i = 0; i < 20; i++) {
  if (true) {
    baseBall();
    // 아웃 3번이면 아웃 === fasle;
    // 게임종료 메세지
  } else if (false) {
    console.log("122");
  }
}
