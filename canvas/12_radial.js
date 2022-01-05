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

  let gradient = context.createRadialGradient(300, 250, 80, 350, 250, 150); //

  gradient.addColorStop(0, "red"); //relative
  gradient.addColorStop(1, "blue");

  //   context.fillStyle = "yellow";
  context.fillStyle = gradient;
  context.fillRect(50, 50, 500, 400);

  //右下角
  context.translate(800, 600);
  context.lineWidth = 20;

  let radius = 150;
  let circleGradient = context.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  circleGradient.addColorStop(0, "#888");
  circleGradient.addColorStop(0.5, "#fff");
  circleGradient.addColorStop(1, "#888");

  context.beginPath();
  context.arc(0, 0, radius, 0, 2 * Math.PI);
  context.strokeStyle = circleGradient;
  context.stroke();
}

window.addEventListener("load", doFirst);
