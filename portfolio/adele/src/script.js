/////////////////////////
const SoundDOME = document.querySelector(".Sound"); //從HTML找聲音<audio></audio>標籤位置
const BASE_URL = "https://webdev.alphacamp.io/api/lyrics/";
const songList = document.querySelector("#song-list");
const lyricsPanel = document.querySelector("#lyrics-panel");
const album = {
  artist: "Adele",
  album: "25",
  tracks: [
    "Hello",
    "Send My Love (To Your New Lover)",
    "I Miss You",
    "When We Were Young",
    "Remedy",
    "Water Under the Bridge",
    "River Lea",
    "Love in the Dark",
    "Million Years Ago",
    "All I Ask",
    "Sweetest Devotion"
  ]
};
//console.log("長度", album.tracks.length); //長度是11，共11個歌曲名

//////////////////////////
//先做歌曲名渲染HTML
let songListContent = ""; //建立空
for (let i = 0; i < album.tracks.length; i++) {
  //<div class="lyricsJS"> ${album.tracks[i]} </div> //A2作業寫法，但本次要寫在既有HTML nav裡面

  //根據bootstrape網站，元件，pill部分找要的按鈕碼並使用
  songListContent += `
   <li class="nav-item">
    <a class="nav-link" href="#"> ${album.tracks[i]} </a>
  </li>
  `;
}
songList.innerHTML = songListContent; //JS渲染HTML歌名

//songList.innerHTML = album.tracks;

//把歌詞在console印出
songList.addEventListener("click", function () {
  //點擊會有音樂
  SoundDOME.play();

  //點擊歌名，顯示該歌詞
  const songTitle = event.target.innerText; //用變數接住 點擊的文字
  //console.log(songTitle); 會直接得到點擊的那個文字
  axios
    //.get("https://webdev.alphacamp.io/api/lyrics/Adele/Remedy.json") //麻煩的寫法會是全部網址保留，只改歌名${}
    .get(`${BASE_URL}Adele/${songTitle}.json`) //利用變數讓程式碼簡潔
    .then(function (response) {
      //console.log("這是response", response); //所有資料
      //console.log("這是data", response.data); //歌詞被包在括弧{}裡
      //console.log("這是lyrics", response.data.lyrics); //純歌詞文字
      const lyricsAPI = response.data.lyrics;
      //lyricsPanel.innerHTML = response.data.lyrics; //API歌詞賦予給lyricsPanel再渲染HTML
      lyricsPanel.innerHTML = `
      <h2>${songTitle}</h2>
      <pre>${lyricsAPI}</pre>
      
      `; //API歌詞賦予給lyricsPanel再渲染HTML
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});
