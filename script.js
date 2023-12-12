'use strict';
/*
###期待動作###
1) スタートボタンを押す
2) ホロライブメンバーの数だけ立ち絵がルーレットのように表示される
3) ストップボタンを押すと、そのホロメンの紹介が表示される
*/

let done = 0;
let intervalID = 0;
// 1) スタートボタンを押す
function start() {
    //1回目の呼び出し
    if (done === 0) {
        // "2)" を100ミリ秒間隔で実行することで、ルーレットのように表示させる
        intervalID = setInterval(randomHolomem, 100);//n > 0
        done = 1;//実行済み
        console.log("初回の実行");
        //ルーレットのように立ち絵を表示する間は名前などを表示させない
        document.getElementById("holomem-greeting").innerHTML = "";
        document.getElementById("holoname-jp").innerHTML = "";
        document.getElementById("holoname-en").innerHTML = "";
    //2回目以降の呼び出し
    } else {
        console.log("2回目以降の実行");
        return;//2回目以降スタートを押された場合は処理を終わらせる
    }
}

let i = 0;
// 2) ランダムに立ち絵を表示させる
function randomHolomem() {
    i = Math.floor(Math.random() * holomem.length);
    document.getElementById("holomem-picture").src = holomem[i].image;
    return i;
}

let pickedIndex = 0;
// 3) ストップボタンを押す
function pickHolomem() {
    // "2)" の繰り返しを停止する
    clearInterval(intervalID);
    // ストップボタンが押され "2)" の繰り返しが停止している場合
    if (intervalID === 0) {
        return;//2回目以降ストップを押された場合は処理を終わらせる
    // スタートボタンを押して "2)" の繰り返しが続いている場合
    } else if (intervalID !== 0 && typeof intervalID === "number") {
        pickedIndex = randomHolomem();//ランダムに選ばれたホロメンのindex
        //選ばれたホロメンの画像や名前などを表示する
        document.getElementById("holomem-picture").src = holomem[pickedIndex].image;
        document.getElementById("holomem-greeting").innerHTML = "「" + holomem[pickedIndex].greetings + "」";
        document.getElementById("holoname-jp").innerHTML = holomem[pickedIndex].JPname;
        document.getElementById("holoname-en").innerHTML = holomem[pickedIndex].ENname;
    }
    intervalID = 0;//スタート-->ストップ-->ストップ...と押された場合を回避
    done = 0;//スタート-->ストップ-->スタート...と押された場合を回避
}