//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  // console.log(canvas);
  //emmet->clg
  let context = canvas.getContext("2d");

  context.fillStyle = "red";
  context.strokeStyle = "green";
  context.lineWidth = 8; //4+4 長度沒單位

  //context.strokeRect(100, 100, 300, 200);
  context.fillRect(100, 100, 300, 200); //(x-axis, y-axis, w, h)
  context.clearRect(150, 150, 50, 50);

  context.rect(700, 600, 300, 200);
  context.fill();
  context.stroke();

  //橡皮擦
  //context.clearRect(0, 0, canvas.width, canvas.height);
}

// why 'load' but not 'onload'? 出現時間有關
window.addEventListener("load", doFirst);

// 1. html
// <body onload="doFirst()"></body>

// 2. .js傳統寫法
// window.onload=doFirst;

// 3. .js W3C recommanded
// window.addEventListener('load', doFirst);
