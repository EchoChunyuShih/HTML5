function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  context.font = "bold 50px Tahoma";

  //   context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';

  //第一個字
  // context.strokeText("Bless you", 100, 100);
  context.fillText("Bless you", 100, 100);

  context.moveTo(100, 100);
  context.lineTo(350, 100);
  //base line
  context.strokeStyle = "red";
  context.stroke();

  //第二個字
  //shadow before text
  context.shadowColor = "rgba(255, 0, 0, .7)";
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 15;

  context.fillText("Bless you", 100, 200);

  //第三個字 //四邊都有shadow x && y都要是0 and have blur
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.fillStyle = "#fff";

  context.fillText("Bless you", 100, 300);

  //第四個字 //多重陰影
  context.fillText("Bless you", 100, 400);
  context.shadowColor = "rgba(0, 0, 255, .7)";

  context.fillText("Bless you", 100, 400);
}

window.addEventListener("load", doFirst);
