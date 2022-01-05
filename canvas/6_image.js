function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

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

  let pic = new Image();
  pic.src = "../images/pic2.jpg";
  //內嵌
  pic.addEventListener("load", function () {
    context.drawImage(pic, 0, 0, canvas.width, canvas.height);
  });
}

window.addEventListener("load", doFirst);

// //JS的basic 7內建物件
// // 1. Number(float)
// let n = 5;
// let n = new Number(5); //constructor 建構子（函數）=> 給出值用的

// // 2. String
// let str = "ABC";
// let str = new String("ABC");

// // 3. Boolean
// let ans = true;
// let ans = new Boolean(true);

// // 4. Array
// let arr = [2, 4, 6, "ABC", new Date(), true];
// let arr = new Array(2, 4, 6, "ABC", new Date(), true);

// ----------------
// // 5. Math
// Math.PI
// Math.round();
// Math.random();
// ----------------
// // 6. Date
// let today = new Date();
// // 7. RegExp
// let reg=new RegExp();
