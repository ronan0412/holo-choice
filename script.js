'use strict';
/*
###期待動作###
1) スタートボタンを押す
2) ホロライブメンバーの数だけ立ち絵がルーレットのように表示される
3) ストップボタンを押すと、そのホロメンの紹介が表示される
*/

//画像のプリロード
window.onload = function(){
    //プリロードする画像
    let images = [
        "public/image/holo-mem/tokino-sora-1139x2048.png",
        "public/image/holo-mem/roboco-san_pr-img_06.png",
        "public/image/holo-mem/AZKi_pr-img_01.png",
        "public/image/holo-mem/Sakura-Miko_pr-img_01.png",
        "public/image/holo-mem/Hoshimachi-Suisei_pr-img_01.png",
        "public/image/holo-mem/Aki-Rosenthall_pr-img_01.png",
        "public/image/holo-mem/Akai-Haato_pr-img_01.png",
        "public/image/holo-mem/Shirakami-Fubuki_pr-img_01.png",
        "public/image/holo-mem/matsuri_pr-img_2.png",
        "public/image/holo-mem/Minato-Aqua_pr-img_01b.png",
        "public/image/holo-mem/Murasaki-Shion_pr-img_01.png",
        "public/image/holo-mem/Nakiri-Ayame_pr-img_01.png",
        "public/image/holo-mem/Yuzuki-Choco_pr-img_01-1.png",
        "public/image/holo-mem/Oozora-Subaru_pr-img_01.png",
        "public/image/holo-mem/Shirakami-Fubuki_pr-img_01.png",
        "public/image/holo-mem/Ookami-Mio_pr-img_01.png",
        "public/image/holo-mem/Nekomata-Okayu_pr-img_01.png",
        "public/image/holo-mem/Inugami-Korone_pr-img_01.png",
        "public/image/holo-mem/Usada-Pekora_pr-img_01.png",
        "public/image/holo-mem/Shiranui-Flare_pr-img_01.png",
        "public/image/holo-mem/Shirogane-Noel_pr-img_02.png",
        "public/image/holo-mem/Houshou-Marine_pr-img_1.png",
        "public/image/holo-mem/Amane-Kanata_pr-img_01.png",
        "public/image/holo-mem/Tsunomaki-Watame_pr-img_01-1.png",
        "public/image/holo-mem/Tokoyami-Towa_pr-img_01.png",
        "public/image/holo-mem/Himemori-Luna_pr-img_01.png",
        "public/image/holo-mem/Yukihana-Lamy_pr-img_01.png",
        "public/image/holo-mem/Momosuzu-Nene_pr-img_01.png",
        "public/image/holo-mem/Shishiro-Botan_pr-img_01.png",
        "public/image/holo-mem/Omaru-Polka_pr-img_01.png",
        "public/image/holo-mem/La-Darknesss_pr-img_02.png",
        "public/image/holo-mem/Takane-Lui_pr-img_02.png",
        "public/image/holo-mem/Hakui-Koyori_pr-img_02.png",
        "public/image/holo-mem/Sakamata-Chloe_pr-img01.png",
        "public/image/holo-mem/Kazama-Iroha_pr-img_01-1.png"
    ];
    //プリロードの実施
    let img = "";
    for (i = 0; i < images.length; i++) {
        img = document.createElement('img');
        img.src = images[i];
    }
}
//事前に要素を検索して格納しておく
let holoImage = "";
let holoGreeting = "";
let holoNameJP = "";
let holoNameEN = "";
holoImage = document.getElementById("holomem-picture");
holoGreeting = document.getElementById("holomem-greeting");
holoNameJP = document.getElementById("holoname-jp");
holoNameEN = document.getElementById("holoname-en");

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
        holoGreeting.innerHTML = "";
        holoNameJP.innerHTML = "";
        holoNameEN.innerHTML = "";
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
    holoImage.src = holomem[i].image;
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
        holoImage.src = holomem[pickedIndex].image;
        holoGreeting.innerHTML = "「" + holomem[pickedIndex].greetings + "」";
        holoNameJP.innerHTML = holomem[pickedIndex].JPname;
        holoNameEN.innerHTML = holomem[pickedIndex].ENname;
    }
    intervalID = 0;//スタート-->ストップ-->ストップ...と押された場合を回避
    done = 0;//スタート-->ストップ-->スタート...と押された場合を回避
}