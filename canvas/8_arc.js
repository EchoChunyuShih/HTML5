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

  //UL
  context.translate(250, 200); // ever since ---> (0,0)

  context.beginPath();
  context.arc(0, 0, 150, 0, Math.PI, false);
  //anticlockwise is true,
  context.stroke();
  //歸位
  context.translate(-250, -200);

  //LR
  context.translate(750, 200);

  context.beginPath();
  context.arc(0, 0, 150, 0, Math.PI, true);
  context.stroke();

  context.translate(-750, -200);

  //LL
  context.translate(250, 600);

  context.beginPath();
  context.arc(0, 0, 150, 0, 2 * Math.PI);
  context.stroke();
  context.translate(-250, -600);

  //LR
  context.translate(750, 600);

  context.beginPath();
  context.arc(0, 0, 150, 0.3 * Math.PI, 1.7 * Math.PI, false);
  context.stroke();
  context.translate(-750, -600);
}

window.addEventListener("load", doFirst);
