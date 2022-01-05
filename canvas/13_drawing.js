function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
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

  canvas.addEventListener("mousemove", usePen);
}
function usePen(e) {
  context.fillStyle = "maroon";
  context.strokeStyle = "maroon";

  //   context.fillRect(e.pageX, e.pageY, 5, 5);

  context.beginPath();

  context.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
  context.fill();
}
window.addEventListener("load", doFirst);
