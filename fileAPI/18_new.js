//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  document.getElementById("dropzone").ondragover = dragOver;
  document.getElementById("dropzone").ondrop = dropped;
}
function dragOver(e) {
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();

  let files = e.dataTransfer.files;
  let readFile = new FileReader();

  for (let i = 0; i < files.length; i++) {
    readFile.readAsDataURL(files[i]);
    readFile.addEventListener("load", function () {
      //動態新增<img>標籤
      let image = document.createElement("img");
      image.src = readFile.result;
      dropzone.appendChild(image);
    });
  }
}

window.addEventListener("load", doFirst);

//let readFile = new FileReader()

//=> new FileReader =>
// duck type:
// if walks like a duck,
//     quark like a duck,
// it must be a duck.
