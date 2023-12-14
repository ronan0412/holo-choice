# 難しかった点と対処法
#### 1) スタートを押した後に "intervalID" を受け渡すこと
→もともと、htmlのonclick属性にsetInterval()を指定していた  
→スタートをクリックするとsetInterval()が実行されるが、setInterval()を停止するための  
 "intervalID" が渡せずストップボタンの処理に繋げられなかった  
=>onclick属性で実行される関数としてstart()を定義し、その中で "intervalID" を受け渡した
  
#### 2) スタート → ストップ を押した場合の処理
→関数外で "intervalID" を初期化しておき、ストップボタンを押した時に受け渡し

#### 3) ストップ → ストップ を押した場合の処理
→はじめにsetInterval()を停止した後に"intervalID"が実行時のIDであればホロライブメンバーの画像などを表示  
→次に "intervalID" に0を代入 (0以外であればスタートボタンを押されてルーレットが回っている状態)  
→そして、次回以降ストップボタンが押された際に "intervalID" が0であれば処理を終わらせる、
 という流れで2回目以降ストップボタンが押された場合に「何もしない」ことを実装  
```javascript:script.js
if (intervalID === 0) {
  return;
} else if (intervalID !== 0 && typeof intervalID === "number") {
  pickedIndex = randomHolomem();
  document.getElementById("holomem-picture").src = holomem[pickedIndex].image;
}
intervalID = 0;
```
#### 4) ストップ → スタート　を押した場合の処理
→はじめに "done" に0を代入  
→スタートボタンを押した際に "done" が0(「初回の実行」や「ストップを押された後」)であればルーレット  
→ "done" へ1を代入  
→スタートボタンを押した際に "done" が1(「ストップを押される前=スタートを押している状態」)であれば終了  
→ストップボタンを押した際に "done" へ0を代入  
=> これで次回スタートを押した際にルーレットが動く

#### 5) スタート → スタート を押した場合の処理
→はじめに "done" に0を代入  
→スタートボタンを押した際に "done" が0(「初回の実行」や「ストップを押された後」)であればルーレット  
→ "done" へ1を代入  
→スタートボタンを押した際に "done" が1(「ストップを押される前=スタートを押している状態」)であれば終了  
=>これで次回スタートを押した際にルーレットが動かない  
→ストップボタンを押した際に "done" へ0を代入

※setInterval()について  
・繰り返し実行されている間は "intervalID" が n > 0 である  
・ "intervalID" を clearInterval() に渡すと繰り返しを停止できる  
・停止している目印は "intervalID" が n = 0 とした  
https://developer.mozilla.org/ja/docs/Web/API/setInterval
