'use strict';
//ok Todo startを２回押したときの回避が必要
//ok Todo 更新押した時にすぐ実行されてしまうのを回避
//ok Todo stop 押した後にintervalIDを受け渡し-->グローバルにしたい
//ok start-->stop-->startの時に再度startさせたい

/*
スタートボタンを押す
ホロライブメンバーの数だけ数字に合わせたホロメンの立ち絵がルーレットのように表示される (onclick())
ストップボタンを押すと、そのホロメンの紹介が表示される
*/

//動作確認
//let intervalID = setInterval(randomHolomem, 100);

let b = 0;//はじめて読み込んだ時
let intervalID = 0;
function start() {
    //ifでstart押し済みかどうか判定？-->済みなら1でcontinueで重ね実行させない
    if (b === 0) {//読み込んだ後初回の実施
        intervalID = setInterval(randomHolomem, 100);
        console.log("IDは" + intervalID);
        //onclickの後に別途intervalIDに代入すると、もう一回setIntervalが呼び出される
        b = 1;//実行済み
        console.log("初回の実行");//Todo start-->stop-->start
            document.getElementById("holomem-greeting").innerHTML = "";
    document.getElementById("holoname-jp").innerHTML = "";
    document.getElementById("holoname-en").innerHTML = "";
    } else {
        console.log("2回目以降の実行"+b);
    //2回目以降呼び出し時に値を削除する
    document.getElementById("holomem-greeting").innerHTML = "";
    document.getElementById("holoname-jp").innerHTML = "";
    document.getElementById("holoname-en").innerHTML = "";
    return;
    }
}

//ランダムにホロメンをピックする
let i = 0;
function randomHolomem() {
    i = Math.floor(Math.random() * holomem.length);
    document.getElementById("holomem-picture").src = holomem[i].image;
    return i;
}
//ストップボタンを押したら、アニメーションのホロメンをピックする、それを表示する
let pickedIndex = 0;
function pickHolomem() {
    //Todo:この関数が実行された時に、STARTを押した後であることを判定してから以下を実行
    //ok? Todo:多分一度START-->STOP-->STOPを押された場合も考慮
    //ok Todo:random関数をまず止める clearIntervalで、インターバルID
    //console.log("IDは" + start().intervalID);
    console.log("IDは" + intervalID);
    clearInterval(intervalID);

    //ok Todo stopを押しただけでランダムで1人表示される不具合を修正する ため、ifで「setInterval中かどうか」分岐
    //1 動かす 2 idある 3 stop押す-->clear 4
    if (intervalID === 0) {
        return;
    } else if (intervalID !== 0 && typeof intervalID === "number") {
        //intervalIDが0ではなく、かつデータ型が数字の場合
        pickedIndex = randomHolomem();
        console.log(randomHolomem());
        console.log(holomem[pickedIndex]);

        document.getElementById("holomem-picture").src = holomem[pickedIndex].image;
        document.getElementById("holomem-greeting").innerHTML = "「" + holomem[pickedIndex].greetings + "」";
        document.getElementById("holoname-jp").innerHTML = holomem[pickedIndex].JPname;
        document.getElementById("holoname-en").innerHTML = holomem[pickedIndex].ENname;
    }

    console.log("IDは消えた？" + intervalID);
    intervalID = 0;
    console.log("IDは消した？" + intervalID);
    b = 0;//stopしたら次にスタート押せるようにカウンターをリセット

    //難しかったところとどういう方針で対処したかは聞かれそう
    //一発でURL叩けば使える状態にしよう（pen?+gitpage)
}