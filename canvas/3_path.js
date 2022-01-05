//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  context.moveTo(100, 100);
  context.lineTo(250, 250);
  context.lineTo(400, 50);
  context.lineTo(50, 200);
  context.closePath();

  context.stroke();
}

window.addEventListener("load", doFirst);
