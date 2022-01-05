function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  //grid start
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
  //grid end

  context.lineWidth = 20;
  context.strokeStyle = "maroon";

  //lineCap
  context.beginPath();
  context.lineCap = "butt";

  context.moveTo(100, 100);
  context.lineTo(250, 100);
  context.stroke();

  context.beginPath();
  context.lineCap = "round";
  context.moveTo(100, 150);
  context.lineTo(250, 150);
  context.stroke();

  context.beginPath();
  context.lineCap = "square"; //不要用，三小
  context.moveTo(100, 200);
  context.lineTo(250, 200);
  context.stroke();

  //lineJoin
  context.lineJoin = "miter";
  context.strokeRect(100, 300, 100, 150);

  context.lineJoin = "bevel";
  context.strokeRect(250, 300, 100, 150);

  context.lineJoin = "round";
  context.strokeRect(400, 300, 100, 150);
}

window.addEventListener("load", doFirst);
