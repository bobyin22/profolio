const playerImg = document.querySelector(".playerImg"); //從HTML找到照片<img></img>標籤位置
const frogSound = document.querySelector(".frogSound"); //從HTML找聲音<audio></audio>標籤位置
const count = document.querySelector(".count");
const resetButton = document.querySelector(".resetButton");

playerImg.addEventListener("mousedown", clickPlayer); //滑鼠按下點擊監聽
resetButton.addEventListener("click", () => {
  count.innerText = 0;
});

//監聽函式
function clickPlayer() {
  let score = Number(count.innerText); //此時count是 0
  score += 1; //JS加減
  count.innerText = score; //JS渲染 HTML
  playerImg.src = "./image/big.jpeg"; //PlayerImg變數 照片改
  frogSound.play(); //frogSound變數 使用播放功能
}

playerImg.addEventListener("mouseup", unclickPlayer); //滑鼠放開點擊監聽

//監聽函式
function unclickPlayer() {
  playerImg.src = "./image/small.jpeg"; //playerImg變數 照片改
}
