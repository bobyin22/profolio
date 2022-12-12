// ======= default data =======
const menu = document.querySelector("#menu"); //上方欄 清單資訊 照片 品項 價格 加入購物車按鈕
const cart = document.querySelector("#cart"); //中間欄 購物車清單
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl: "https://i.postimg.cc/ZnWyC9sj/image.png",
    name: "大陸建設：耑序\n台北市：大安區",
    price: 19000
  },
  {
    id: "product-2",
    imgUrl: "https://i.postimg.cc/ZRMWtbYN/image.png",
    name: "大陸建築：豐蒔\n台中市：西屯區",
    price: 3700
  },
  {
    id: "product-3",
    imgUrl: "https://i.postimg.cc/3xTCbBcT/image.png",
    name: "大陸建設：鐫月\n台北市：士林區",
    price: 4700
  },
  {
    id: "product-4",
    imgUrl: "https://i.postimg.cc/L6zjfP60/image.png",
    name: "大陸建設：鐫萃\n台北市：松山區",
    price: 3700
  }
];
// ======= 請從這裡開始 =======
// 製作變數嘗試 ------------------------------------------------
//測試一開始最笨的方式 用querySelector parent child改，看起來太複雜了 -------寫法不好--------
//console.log(productData[0].name) //馬卡龍
//console.log(productData[0].price) //90
//menu.children[1].children[0].children[0].src = productData[1].imgUrl

//測試改照片
//console.log( document.querySelectorAll("img") ) //印出 ["<img/>","<img/>","<img/>","<img/>"]
//const nameDOM = document.querySelectorAll("img")
//console.log(imgDOME[0]) //會印出<img src="" class="" alt="...">
//imgDOME[1].src = productData[1].imgUrl

//測試改品名
//console.log( document.querySelectorAll("h5") ) //印出 ["<h5>,<h5>,<h5>,<h5>,<h5>"]
//console.log( document.querySelectorAll(".card-title") ) //印出 ["<h5>,<h5>,<h5>,<h5>"]
//console.log(cardTitleDOM[1]) //印出 <h5 class="card-title">馬卡龍</h5>
//console.log(cardTitleDOM[1].innerText) //印出馬卡龍

//測試改價格
//console.log( document.querySelectorAll(".card-text") ) //印出 [<p>,<p>,<p>,<p>,<p>]
//console.log( document.querySelectorAll(".card-text") ) //印出 [<p>,<p>,<p>,<p>,<p>]
//console.log(cardTextDOM[0]) //會印出<p class="card-text">90</p>>
//console.log(cardTextDOM[0].innerText) //會印出90

//測試監聽按鈕 方法1 笨方法 menu.父親.兒子去找 需要一個一個設監聽 -------寫法不好--------
//console.log(menu.children[1].children[0].children[0].src) //照片2
//console.log("firstAddButton", firstAddButton) //印出<a>加入購物車</a> 標籤
//const firstAddButton = menu.children[0].children[0].children[1].children[2]
//console.log(menu.children[0].children[0].children[1].children[2]); //印出<a>加入購物車</a> 標籤

//測試監聽按鈕 方法2 直接創一個按鈕變數 監聽btn-primary 一樣需要一個一個設監聽 -------寫法不好--------
//console.log(document.querySelector(".btn-primary")); //印出<a>加入購物車</a>
//console.log(document.querySelectorAll(".btn-primary")); //印出[<a/>,<a/>,<a/>,<a/>,<a/>,<button/>]
//const addbutton = document.querySelector(".btn-primary") //自己設置加入購物車按鈕

//測試監聽按鈕 方法3 方法4 在整個大menu去做監聽
//console.log(document.querySelector("#menu")); //印出會把整個<div> menu標籤
addListDOM = document.querySelector("#menu");

//製作變數 ------------------------------------------------
const imgDOM = document.querySelectorAll("img");
const cardTitleDOM = document.querySelectorAll(".card-title");
const cardTextDOM = document.querySelectorAll(".card-text");
const cartDOM = document.querySelector("#cart"); //中間欄 購物車清單 渲染既有HTML
let addMoney = 0;

//JS渲染HTML 照片、品項、價格 ------------------------------------------------
for (let i = 0; i < imgDOM.length; i++) {
  imgDOM[i].src = productData[i].imgUrl;
  cardTitleDOM[i].innerText = productData[i].name;
  cardTextDOM[i].innerText = productData[i].price;
}

//JS渲染HTML購物車清單 清空
//console.log(cartDOM.innerText)
cartDOM.innerText = "";

//監聽器加入在按鈕 方法1 笨方法 只能選到單一按鈕------------------------------------------------
// firstAddButton.addEventListener("click", function() {
// const target = event.target
// //   console.log("target",target) //印出<a>加入購物車</a>
// //   console.log("target.parentElement",target.parentElement) //印出<div> <h5>馬卡龍 <p>90 <a>加入購物車
// //   console.log("target.parentElement.children[2]",target.parentElement.children[2]) //印出加入購物車
// //   console.log("target.parentElement.children[0].innerText",target.parentElement.children[0].innerText) //馬卡龍
// //   console.log("target.parentElement.children[1].innerText",target.parentElement.children[1].innerText) //90

// //建立一個list
//    let newItem = document.createElement("ol")
//    newItem.innerText = `${target.parentElement.children[0].innerText} Ｘ1  小記： ${target.parentElement.children[1].innerText}`
// //在溝物車清單 加入新的一欄
//    cart.appendChild(newItem)
//  })

//監聽器加入在按鈕 方法2 笨方法 只能選到單一按鈕------------------------------------------------
// addbutton.addEventListener("click", function() {
//   console.log("oh yeah")
//   const target = event.target
//   console.log("target",target)

// })

//監聽器加入在按鈕 方法3 加入購物車清單新1欄格式不符合------------------------------------------------
// addListDOM.addEventListener("click", function() {
//    const target = event.target
//    console.log("target",target) //印出<a>加入購物車</a>
//    console.log("target.parentElement.children[0].innerText",target.parentElement.children[0].innerText)
//   if(target.tagName == "A") {
//     let newItem = document.createElement("li")
//     newItem.innerHTML = `
//     ${target.parentElement.children[0].innerText} Ｘ1  小記： ${target.parentElement.children[1].innerText}
//     `
//     console.log('newItem',newItem)
//     cart.appendChild(newItem)
//   }
// })

//監聽器加入在按鈕 方法4 加入購物車清單新1欄格式不符合------------------------------------------------
addListDOM.addEventListener("click", function () {
  const target = event.target;
  //console.log("target",target) //印出<a>加入購物車</a>
  //console.log("target.parentElement.children[0].innerText",target.parentElement.children[0].innerText)
  //如果點擊加入購物車按鈕
  if (target.tagName == "A") {
    let newItem = document.createElement("li"); //建立一個list
    newItem.className = "list-group-item"; //根據bootsrap className命名，才會有一樣的list格式
    //建立變數讀取資料
    newItem.innerHTML = `
    ${target.parentElement.children[0].innerText} Ｘ1  小計： ${target.parentElement.children[1].innerText}
    `;
    //console.log('newItem',newItem)
    cart.appendChild(newItem); //把該點擊 讀取的資訊 加入購物車清單往下多一行

    //尚未完成------------------------------------------------------------------------------
    //點擊時總金額 "--" 會變成 “”清空
    totalAmount.innerText = "";

    //總金額做加總
    addMoney += Number(target.parentElement.children[1].innerText); //"90" 變90
    //onsole.log("addMoney初始",addMoney) //90

    //console.log("totalAmount",totalAmount) //印出<span id="total-amount">90</span>標籤
    //console.log("totalAmount.innerText",totalAmount.innerText) //"--"
    totalAmount.innerText += addMoney;
  }
});

//監聽送出訂單 點擊送出訂單出現alert
button.addEventListener("click", function () {
  alert(
    `！！！注意！！！\n\n此訂單是否為您本人所購買\n\n非本人請直接關閉頁面\n\n正確請點擊下方確定`
  );
  alert(
    `！！！賀成交！！！\n\n已成功下訂\n\n你剛剛選擇的物件總金額為：${addMoney}萬元整\n\n後續簽約時程，3日內銷售專員會致電給您，與您約接待中心現場簽約`
  );
});
