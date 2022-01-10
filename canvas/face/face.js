function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  //Grid start
  for (let i = 0; i < 1000; i++) {
    //horizontal
    let interval = i * 25;
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

  //UpperLeft-joy
  context.translate(50, 25); // ever since ---> (0,0)
  context.lineWidth = 7;
  context.strokeStyle = "rgb(46, 75, 112)";
  context.lineCap = "round";

  context.beginPath();
  //face
  context.moveTo(200, 50);
  context.quadraticCurveTo(90, 50, 100, 200);
  context.quadraticCurveTo(100, 325, 200, 325);
  context.quadraticCurveTo(300, 320, 300, 225);
  context.quadraticCurveTo(300, 50, 200, 50);
  //hair-left
  context.moveTo(200, 50);
  context.bezierCurveTo(200, 200, 75, 224, 50, 175);
  context.bezierCurveTo(38, 150, 80, 140, 75, 170);
  //hair-right
  context.moveTo(200, 50);
  context.bezierCurveTo(200, 200, 325, 224, 350, 175);
  context.bezierCurveTo(360, 150, 330, 140, 325, 170);
  //mouth
  context.moveTo(160, 220);
  context.quadraticCurveTo(150, 299, 200, 300);
  context.quadraticCurveTo(250, 299, 230, 220);
  context.stroke();

  //bowtie
  context.strokeStyle = "#d9ba57";
  context.fillStyle = "#d9ba57";
  context.beginPath();
  context.moveTo(200, 50);
  context.lineTo(215, 60);
  context.lineTo(215, 40);
  context.lineTo(200, 50);
  context.lineTo(185, 60);
  context.lineTo(185, 40);
  context.closePath();

  context.lineJoin = "round";
  context.stroke();
  context.fill();

  //blush-right
  context.strokeStyle = "#b34f77";
  context.shadowColor = "rgba(237, 140, 179,.8)";
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 10;

  context.beginPath();
  context.moveTo(260, 220);
  context.lineTo(266, 226);
  context.moveTo(275, 220);
  context.lineTo(281, 226);
  //blush-left
  context.moveTo(125, 220);
  context.lineTo(119, 226);
  context.moveTo(110, 220);
  context.lineTo(104, 226);

  context.stroke();

  //歸位
  //context.translate(-250, -200);

  //UpperRight-angry
  context.translate(530, 20); // ever since ---> (0,0)

  context.lineWidth = 7;
  context.strokeStyle = "rgb(46, 75, 112)";
  context.shadowColor = "transparent";
  context.lineCap = "round";

  context.beginPath();
  //face
  context.moveTo(200, 50);
  context.quadraticCurveTo(90, 50, 100, 200);
  context.quadraticCurveTo(100, 325, 200, 325);
  context.quadraticCurveTo(300, 320, 300, 225);
  context.quadraticCurveTo(300, 50, 200, 50);
  context.stroke();

  //hair-left
  context.moveTo(200, 50);
  context.bezierCurveTo(150, 100, 80, 100, 60, 50);
  context.bezierCurveTo(50, 20, 79, 28, 75, 40);

  context.moveTo(200, 50);
  context.bezierCurveTo(170, 100, 80, 150, 37, 80);
  context.bezierCurveTo(10, 15, 60, 30, 40, 45);

  context.moveTo(200, 50);
  context.bezierCurveTo(190, 100, 80, 190, 20, 125);
  context.bezierCurveTo(5, 100, 25, 100, 25, 110);
  //hair-right
  context.moveTo(200, 50);
  context.bezierCurveTo(200, 100, 325, 150, 375, 75);
  context.bezierCurveTo(410, 20, 350, 30, 368, 50);

  context.moveTo(200, 50);
  context.bezierCurveTo(200, 100, 325, 100, 350, 50);
  context.bezierCurveTo(359, 15, 315, 30, 335, 45);

  context.moveTo(200, 50);
  context.bezierCurveTo(200, 100, 325, 70, 310, 25);
  context.bezierCurveTo(300, 10, 280, 30, 295, 40);
  context.stroke();
  //mouth
  context.lineJoin = "round";

  context.moveTo(170, 290);
  context.lineTo(225, 275);
  context.quadraticCurveTo(210, 200, 175, 225);
  context.quadraticCurveTo(150, 240, 170, 290);
  context.closePath();
  context.stroke();

  //frawn
  context.moveTo(205, 109);
  context.quadraticCurveTo(210, 150, 235, 125);

  context.moveTo(190, 120);
  context.quadraticCurveTo(210, 150, 175, 150);

  context.moveTo(180, 165);
  context.quadraticCurveTo(210, 150, 210, 185);

  context.moveTo(225, 180);
  context.quadraticCurveTo(210, 150, 240, 145);
  context.stroke();

  //bowtie
  context.strokeStyle = "#d9ba57";
  context.fillStyle = "#d9ba57";
  context.beginPath();
  context.moveTo(200, 50);
  context.lineTo(215, 60);
  context.lineTo(215, 40);
  context.lineTo(200, 50);
  context.lineTo(185, 60);
  context.lineTo(185, 40);
  context.closePath();

  context.lineJoin = "round";
  context.stroke();
  context.fill();

  //blush-right
  context.strokeStyle = "#e83810";
  context.shadowColor = "rgb(222, 90, 60,.9)";
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 6;

  context.beginPath();
  context.moveTo(260, 220);
  context.lineTo(266, 226);
  context.moveTo(275, 220);
  context.lineTo(281, 226);
  //blush-left
  context.moveTo(125, 220);
  context.lineTo(119, 226);
  context.moveTo(110, 220);
  context.lineTo(104, 226);

  context.stroke();
  context.translate(-550, -20);

  //LowerLeft
  context.translate(20, 400); // ever since ---> (0,0)
  context.lineWidth = 7;
  context.strokeStyle = "rgb(46, 75, 112)";
  context.shadowColor = "transparent";
  context.lineCap = "round";

  context.beginPath();
  //face
  context.moveTo(200, 50);
  context.quadraticCurveTo(90, 50, 100, 200);
  context.quadraticCurveTo(100, 325, 200, 325);
  context.quadraticCurveTo(300, 320, 300, 225);
  context.quadraticCurveTo(300, 50, 200, 50);
  context.stroke();

  //hair-left
  context.beginPath();
  context.moveTo(200, 50);
  context.bezierCurveTo(99, 50, 170, 190, 75, 277);
  //hair-right
  context.moveTo(180, 52);
  context.bezierCurveTo(170, 150, 275, 150, 300, 325);
  context.stroke();

  //mouth
  context.moveTo(150, 290);
  context.quadraticCurveTo(150, 250, 185, 250);
  context.quadraticCurveTo(210, 250, 225, 300);

  context.stroke();

  //bowtie
  context.strokeStyle = "#d9ba57";
  context.fillStyle = "#d9ba57";
  context.beginPath();
  context.moveTo(175, 50);
  context.lineTo(195, 60);
  context.lineTo(195, 40);
  context.lineTo(175, 50);
  context.lineTo(160, 60);
  context.lineTo(160, 40);
  context.closePath();

  context.lineJoin = "round";
  context.stroke();
  context.fill();

  //tear
  context.lineWidth = "2";
  context.strokeStyle = "#7abac2";
  context.fillStyle = "#7abac2";

  context.beginPath();
  context.moveTo(225, 200);
  context.quadraticCurveTo(210, 250, 230, 250);
  context.quadraticCurveTo(250, 240, 225, 200);
  context.stroke();
  context.fill();
  context.translate(-20, -400);

  //LowerRight-excited
  context.translate(550, 400); // ever since ---> (0,0)
  context.lineWidth = 7;
  context.strokeStyle = "rgb(46, 75, 112)";
  context.lineCap = "round";

  context.beginPath();
  //face
  context.moveTo(200, 50);
  context.quadraticCurveTo(90, 50, 100, 200);
  context.quadraticCurveTo(100, 325, 200, 325);
  context.quadraticCurveTo(300, 320, 300, 225);
  context.quadraticCurveTo(300, 50, 200, 50);
  //hair-left
  context.moveTo(200, 50);
  context.bezierCurveTo(200, 200, 75, 224, 50, 175);
  context.bezierCurveTo(38, 150, 80, 140, 75, 170);
  //hair-right
  context.moveTo(200, 50);
  context.bezierCurveTo(200, 200, 325, 224, 350, 175);
  context.bezierCurveTo(360, 150, 330, 140, 325, 170);
  //mouth
  context.moveTo(160, 200);
  context.quadraticCurveTo(150, 299, 200, 300);
  context.quadraticCurveTo(250, 299, 230, 200);
  context.quadraticCurveTo(200, 290, 160, 200);

  context.stroke();

  //bowtie
  context.strokeStyle = "#d9ba57";
  context.fillStyle = "#d9ba57";
  context.beginPath();
  context.moveTo(200, 50);
  context.lineTo(215, 60);
  context.lineTo(215, 40);
  context.lineTo(200, 50);
  context.lineTo(185, 60);
  context.lineTo(185, 40);
  context.closePath();

  context.lineJoin = "round";
  context.stroke();
  context.fill();

  //blush-right
  context.lineWidth = "3";

  context.strokeStyle = "#b34f77";
  context.fillStyle = "#b34f77";
  context.shadowColor = "rgba(237, 140, 179,.8)";
  context.shadowOffsetX = 3;
  context.shadowOffsetY = 3;
  context.shadowBlur = 7;

  context.beginPath();
  context.moveTo(260, 225);
  context.bezierCurveTo(240, 190, 234, 210, 263, 240);
  context.bezierCurveTo(284, 200, 274, 200, 260, 225);
  context.fill();
  context.stroke();

  //blush-left
  context.beginPath();
  context.moveTo(126, 245);
  context.bezierCurveTo(110, 200, 100, 230, 129, 260);
  context.bezierCurveTo(150, 220, 140, 220, 126, 245);
  context.fill();
  context.stroke();
  context.translate(-550, -400);
}

window.addEventListener("load", doFirst);
