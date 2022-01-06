//eventlistener 一定有三個物件：物件window. 事件'load'. 處理函數doFirst

function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  document.getElementById("theFile").onchange = fileChange;
}
function fileChange() {
  let files = document.getElementById("theFile").files; //files(複數)是陣列
  //console.log(file);

  let message = ``;
  for (let i = 0; i < files.length; i++) {
    message += `File name: ${files[i].name} \n`;
    message += `File type: ${files[i].type} \n`;
    message += `File size: ${files[i].size} byte(s)\n`;
    message += `File modified: ${files[i].lastModifiedDate} \n`;
  }

  document.getElementById("fileInfo").value = message; //可用innerText取代value
}
window.addEventListener("load", doFirst);
