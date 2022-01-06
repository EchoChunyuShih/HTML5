function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  navigator.geolocation.getCurrentPosition(succCallback, errorCallback, {
    enableHighAccuracy: false,
    // timeout: 100,
    maximumAge: 0,
  }); //成功處理函數, 失敗處理函數, 訊息(optional)
  //cb function函數包‘函數‘
}
function succCallback(e) {
  let lati = e.coords.latitude;
  let longi = e.coords.longitude;
  let accuracy = e.coords.accuracy;

  if (accuracy > 1500) {
    document.getElementById("position").innerHTML = `超過偵測範圍`;
  } else {
    document.getElementById("position").innerHTML = `
    緯度：${lati} <br>
    經度：${longi} <br>
    準確度：  ${accuracy} 公尺<br>
    `;
  }
}
function errorCallback(e) {
  document.getElementById(
    "position"
  ).innerHTML = `錯誤碼：${e.code} <br>錯誤訊息：${e.message}`;
}
window.addEventListener("load", doFirst);
