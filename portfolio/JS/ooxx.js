const parent = document.querySelector("#tictactoe");

let boxNumber = document.querySelectorAll(".box"); //<div>box標籤
let boxNumberLength = boxNumber.length; //<div>box標籤共9個
let resetBtn = document.querySelector(".reset");

parent.addEventListener("click", clickAction);
resetBtn.addEventListener("click", reset);

function clickAction(event) {
  //圈圈先，叉叉後
  const target = event.target; //點擊事件設為 target變數
  if (target.matches(".box") && boxNumberLength % 2 === 0) {
    target.textContent = "X";
    boxNumberLength -= 1; //點擊一次9宮格數量-1，叉叉走完換圈圈
  } else if (target.matches(".box") && boxNumberLength % 2 !== 0) {
    target.textContent = "O";
    boxNumberLength -= 1; //點擊一次9宮格數量-1，圈圈走完換叉叉
  } else if (target.matches(".reset")) {
    //這裡怪怪的？？？？
    boxNumber.parent.innerHTML();
  }
}

function reset() {
  boxNumber.forEach((item) => {
    item.innerHTML = "";
  });
}
