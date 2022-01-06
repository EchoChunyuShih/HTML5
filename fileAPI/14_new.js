//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  document.getElementById("dropzone").ondragover = dragOver; //dragOver自訂函數＝方法＝駝峰式
  document.getElementById("dropzone").ondrop = dropped;
}
function dragOver(e) {
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();

  let file = e.dataTransfer.files[0];
  //console.log(file);
  document.getElementById("fileName").innerText = file.name;

  //==========
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener("load", function () {
    document.getElementById("image").src = readFile.result;
  });
}

window.addEventListener("load", doFirst);

//let readFile = new FileReader()

//=> new FileReader =>
// duck type:
// if walks like a duck,
//     quark like a duck,
// it must be a duck.
