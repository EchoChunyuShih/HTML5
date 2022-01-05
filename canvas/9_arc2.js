function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  //Grid start
  for (let i = 0; i < 1000; i++) {
    //horizontal
    let interval = i * 50;
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    context.fillText(interval, 0, interval);

    //vertical
    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    context.fillText(interval, interval, 10);
  }

  context.strokeStyle = "rgba(0,0,0,.2)";
  context.stroke();
  //Grid ends

  //quaterline starts
  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);

  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);

  context.strokeStyle = "rgba(0,0,0,.7)";
  context.stroke();
  //quaterline ends

  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.font = "bold 20px Tahoma";

  //UL
  context.fillText("arcTo", 100, 50);

  context.beginPath();

  context.moveTo(150, 250); //(x0, y0)
  context.arcTo(300, 100, 400, 300, 120); //(x1, y1, x2, y2, r)
  context.stroke();

  //輔助線
  context.lineWidth = 1;
  context.strokeStyle = "blue";

  context.beginPath();
  context.moveTo(150, 250);
  context.lineTo(300, 100);
  context.lineTo(400, 300);
  context.stroke();

  //UR
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.fillText("quadraticCurveTo", 600, 50);
  context.beginPath();

  context.moveTo(650, 250);
  //   context.quadraticCurveTo(800, 100, 900, 300);
  context.quadraticCurveTo(875, 50, 900, 300);

  context.stroke();

  //輔助線
  context.lineWidth = 1;
  context.strokeStyle = "blue";

  context.beginPath();
  context.moveTo(650, 250);
  context.lineTo(800, 100);
  context.lineTo(900, 300);
  context.stroke();

  //LL
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.fillText("bezierCurveTo", 100, 450);

  context.beginPath();
  context.moveTo(150, 600);
  context.bezierCurveTo(250, 500, 350, 475, 400, 700);
  context.stroke();

  //輔助線
  context.lineWidth = 1;
  context.strokeStyle = "blue";

  context.beginPath();
  context.moveTo(150, 600);
  //   context.lineTo(250, 500);
  //   context.lineTo(350, 475);

  context.lineTo(400, 700);
  context.stroke();

  //LR
}

window.addEventListener("load", doFirst);
