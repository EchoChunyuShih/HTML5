//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  document.getElementById("theFile").onchange = fileChange;
}
function fileChange() {
  let file = document.getElementById("theFile").files[0];
  //console.log(file);

  let message = ``;
  message += `File name: ${file.name} \n`;
  message += `File type: ${file.type} \n`;
  message += `File size: ${file.size} byte(s)\n`;
  message += `File modified: ${file.lastModifiedDate} \n`;

  document.getElementById("fileInfo").value = message; //可用innerText取代value

  //==========
  let readFile = new FileReader();
  readFile.readAsText(file);
  readFile.addEventListener("load", function () {
    document.getElementById("fileContent").value = readFile.result;
  });
}
window.addEventListener("load", doFirst);

//let readFile = new FileReader()

//=> new FileReader =>
// duck type:
// if walks like a duck,
//     quark like a duck,
// it must be a duck.
