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

  //   let gradient = context.createLinearGradient(100, 100, 600, 500);
  let gradient = context.createLinearGradient(100, 300, 600, 300); //(x1, y1, x2, y2)
  gradient.addColorStop(0, "red"); //relative
  gradient.addColorStop(1, "blue");
  gradient.addColorStop(0.5, "yellow");

  context.fillStyle = gradient;
  //   context.fillStyle = "yellow";
  context.fillRect(100, 100, 500, 400);
}

window.addEventListener("load", doFirst);
