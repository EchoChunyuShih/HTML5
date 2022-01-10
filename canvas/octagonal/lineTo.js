//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  //grid starts here
  //   for (let i = 0; i < 1000; i++) {
  //     //horizontal
  //     let interval = i * 20;
  //     context.moveTo(0, interval);
  //     context.lineTo(canvas.width, interval);
  //     context.fillText(interval, 0, interval);

  //     //vertical
  //     context.moveTo(interval, 0);
  //     context.lineTo(interval, canvas.height);
  //     context.fillText(interval, interval, 10);
  //   }
  //   context.strokeStyle = "rgba(0,0,0,0)";
  //   context.stroke();
  //grid ends

  //ruler
  //   context.strokeStyle = "red";
  //   context.lineWidth = "2";
  //   context.beginPath();
  //   context.moveTo(400, 50);
  //   context.lineTo(400, 750);
  //   context.moveTo(50, 400);
  //   context.lineTo(750, 400);
  //   context.moveTo(800, 800);
  //   context.lineTo(0, 0);
  //   context.moveTo(0, 800);
  //   context.lineTo(800, 0);
  //   context.stroke();

  //star begin
  context.beginPath();
  context.strokeStyle = "#2c6f73";
  context.lineWidth = "4";
  context.moveTo(400, 50);
  context.lineTo(365.5, 320);
  context.lineTo(150, 150);
  context.lineTo(321, 366.9);
  context.lineTo(50, 400);
  context.lineTo(321, 434);
  context.lineTo(160, 640);
  context.lineTo(369, 481);
  context.lineTo(400, 750);
  context.lineTo(430, 481);
  context.lineTo(650, 650);
  context.lineTo(479, 434);
  context.lineTo(750, 400);
  context.lineTo(479, 366.9);
  context.lineTo(650, 150);
  context.lineTo(435, 320);
  context.closePath();

  context.stroke();
}

window.addEventListener("load", doFirst);
